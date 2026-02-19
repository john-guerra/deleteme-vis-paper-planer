import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import { parseCSV, processPaperRecord } from '../lib/data-pipeline/csv-parser';
import { EmbeddingService } from '../lib/data-pipeline/embedding-generator';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const CSV_PATH = path.join(__dirname, '../../../project_memory/IEEE VIS papers 1990-2024 - Main dataset.csv');

async function main() {
  console.log(`Reading CSV from ${CSV_PATH}...`);
  if (!fs.existsSync(CSV_PATH)) {
    console.error("CSV file not found!");
    process.exit(1);
  }

  const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');
  const records = await parseCSV(csvContent);
  console.log(`Parsed ${records.length} records.`);

  const embeddingService = new EmbeddingService();
  await embeddingService.init();
  console.log("Embedding service initialized.");

  let successes = 0;
  let errors = 0;

  // Process in chunks to avoid overwhelming the model or memory
  const CHUNK_SIZE = 10;
  for (let i = 0; i < records.length; i += CHUNK_SIZE) {
    const chunk = records.slice(i, i + CHUNK_SIZE);
    
    // Process mappings concurrently for the chunk
    const mappedPromises = chunk.map(async (record) => {
      try {
        const processedText = processPaperRecord(record);
        const embedding = await embeddingService.generateEmbedding(processedText);
        
        return {
          conference: record.Conference || null,
          publication_year: record.Year ? parseInt(record.Year) : null,
          title: record.Title || null,
          doi: record.DOI || null,
          abstract: record.Abstract || null,
          author_names: record.AuthorNames || null,
          author_keywords: record.AuthorKeywords || null,
          embedding: embedding
        };
      } catch (err) {
        console.error(`Error processing embedding for paper: ${record.Title}`, err);
        return null;
      }
    });

    const mapped = (await Promise.all(mappedPromises)).filter((item): item is NonNullable<typeof item> => item !== null);

    if (mapped.length > 0) {
      const { error } = await supabase.from('papers').insert(mapped);
      if (error) {
        console.error("Error inserting chunk into Supabase", error);
        errors += mapped.length;
      } else {
        successes += mapped.length;
        console.log(`Inserted ${successes}/${records.length} records...`);
      }
    }
  }

  console.log(`Done! Configured ${successes} successfully with ${errors} errors.`);
}

main().catch(console.error);

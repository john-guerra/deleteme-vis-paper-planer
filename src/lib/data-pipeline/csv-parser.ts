import csv from 'csv-parser';
import { Readable } from 'stream';

export interface VisPaperRecord {
  Conference: string;
  Year: string;
  Title: string;
  DOI: string;
  Link: string;
  FirstPage: string;
  LastPage: string;
  PaperType: string;
  Abstract: string;
  'AuthorNames-Deduped': string;
  AuthorNames: string;
  AuthorAffiliation: string;
  InternalReferences: string;
  AuthorKeywords: string;
  AminerCitationCount: string;
  CitationCount_CrossRef: string;
  PubsCited_CrossRef: string;
  Downloads_Xplore: string;
  Award: string;
  GraphicsReplicabilityStamp: string;
}

/**
 * Parses a CSV string or stream into an array of VisPaperRecord objects.
 * Uses the `csv-parser` stream package for fast and accurate parsing.
 */
export async function parseCSV(csvContent: string): Promise<VisPaperRecord[]> {
  return new Promise((resolve, reject) => {
    const results: VisPaperRecord[] = [];
    const stream = Readable.from([csvContent]);

    stream
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

/**
 * Normalizes a single paper record into a clean string optimized for semantic embedding.
 * Typically includes Title, year, abstract, and authors.
 */
export function processPaperRecord(record: Partial<VisPaperRecord>): string {
  const parts = [];
  if (record.Title) parts.push(`Title: ${record.Title}`);
  if (record.AuthorKeywords) parts.push(`Keywords: ${record.AuthorKeywords}`);
  if (record.Abstract) parts.push(`Abstract: ${record.Abstract}`);
  
  return parts.join('\n');
}

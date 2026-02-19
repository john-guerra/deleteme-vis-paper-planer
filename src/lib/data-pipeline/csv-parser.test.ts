import { parseCSV, processPaperRecord } from './csv-parser';

describe('CSV Parser', () => {
  it('should parse a simulated CSV string correctly', async () => {
    const csvContent = `Conference,Year,Title,DOI,Link,FirstPage,LastPage,PaperType,Abstract,AuthorNames-Deduped,AuthorNames,AuthorAffiliation,InternalReferences,AuthorKeywords,AminerCitationCount,CitationCount_CrossRef,PubsCited_CrossRef,Downloads_Xplore,Award,GraphicsReplicabilityStamp
Vis,2024,Interactive Design-of-Experiments,10.1109/test,http://test,44,53,J,"Abstract test",Author A,Author A,"Univ A",,Keyword A,10,10,10,10,,`;

    const records = await parseCSV(csvContent);
    expect(records.length).toBe(1);
    expect(records[0].Title).toBe('Interactive Design-of-Experiments');
    expect(records[0].Year).toBe('2024');
    expect(records[0].Abstract).toBe('Abstract test');
  });

  it('should combine text for embedding gracefully', () => {
    const paper = {
      Title: 'Test Title',
      Abstract: 'Test Abstract',
      AuthorKeywords: 'test, keywords',
      Year: '2024'
    };
    
    // We want a function that formats the paper into a single string for the embedding model
    const combined = processPaperRecord(paper);
    expect(combined).toContain('Test Title');
    expect(combined).toContain('Test Abstract');
  });
});

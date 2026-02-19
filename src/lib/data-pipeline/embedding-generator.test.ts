import { EmbeddingService } from './embedding-generator';

const mockPipelineResult = Object.assign(
  (text: string) => Promise.resolve({ data: new Float32Array(384) }),
  { data: new Float32Array(384) }
);

jest.mock('@xenova/transformers', () => {
  return {
    pipeline: jest.fn().mockResolvedValue(mockPipelineResult),
    env: {
      allowLocalModels: false,
      useBrowserCache: false
    }
  };
});

describe('Embedding Generator', () => {
  it('should initialize the embedding model', async () => {
    const service = new EmbeddingService();
    await service.init();
    expect(service.isLoaded).toBe(true);
  });

  it('should generate an embedding for a given text', async () => {
    const service = new EmbeddingService();
    await service.init();
    
    const text = 'This is a test visualization research paper.';
    const embedding = await service.generateEmbedding(text);
    
    expect(Array.isArray(embedding) || embedding instanceof Float32Array).toBe(true);
    expect(embedding.length).toBeGreaterThan(0);
    expect(embedding.length).toBe(384);
  });
});

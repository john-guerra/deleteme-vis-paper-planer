export class EmbeddingService {
  private extractor: unknown = null;
  public isLoaded: boolean = false;

  /**
   * Initializes the Transformers pipeline
   */
  async init() {
    if (this.extractor) return;
    
    const { pipeline, env } = await import('@xenova/transformers');
    // Skip local check to prevent loading from local cache if we want to fetch the model
    env.allowLocalModels = false;
    env.useBrowserCache = false;

    // We use all-MiniLM-L6-v2 as a fast and performant sentence transformer
    this.extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
      quantized: true, // For faster execution in Node.js
    });
    
    this.isLoaded = true;
  }

  /**
   * Generates a 1D vector representing the semantic embedding of the input text
   */
  async generateEmbedding(text: string): Promise<number[]> {
    if (!this.extractor) {
      await this.init();
    }
    
    // Generate embedding
    // The model typically returns a tensor object
    const extractFn = this.extractor as Function;
    const result = await extractFn(text, { pooling: 'mean', normalize: true });
    
    // Convert to standard JS array of numbers
    return Array.from(result.data);
  }
}

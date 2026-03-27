---
tags:
  - draft
---
Cache-Augmented Generation (CAG) is an alternative to [[Retrieval-Augmented Generation]] to provide additional context to [[Large Language Model]]s.

For CAG the entire knowledge base is pre-processed into a context cache, then this cached context is combined with the user query during inference.

Upside of CAG include being faster at inference time, making all context available (RAG systems might struggle with finding all relevant documents) and having a more simple architecture. However, CAG systems are limited by the size of the knowledge base they can handle and LLM inference speed still degrades with longer prompts. Of note: The original paper[^1] was written with 32k-64k context windows in mind, way smaller than modern long-context LLMs.

Due to the precomputing of the models inference state, CAG is more performant than [[In-Context Learning]] at inference time, especially as prompt size growths.

**The process is:**
- During offline preloading, the knowledge base is preprocessed to fit into the models context window and a precomputed KV-cache is created. This KV-cache can then be stored on disk or in memory.
	- Aside: Key-value vectors are part of the calculation of attention scores that autoregressive models need to do every time they predict a token. These KV-vectors can be cached as a "snapshot of the inference state of an LLM" to improve generation speed [^2].
- During inference, the KV-cache is loaded and combined with the user query, creating a combined prompt.
- When needed for speed/responsiveness, a cache reset is performed. The KV-cache grows append-only with new tokens and can be reset by truncating the new tokens.

[^1]: Chan, B. J., Chen, C. T., Cheng, J. H., & Huang, H. H. (2025, May). Don't do RAG: When cache-augmented generation is all you need for knowledge tasks. In _Companion Proceedings of the ACM on Web Conference 2025_ (pp. 893-897). https://arxiv.org/abs/2412.15605 

[^2]: https://huggingface.co/docs/transformers/en/kv_cache

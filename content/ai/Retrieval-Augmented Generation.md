---
tags:
  - draft
---
Retrieval-Augmented Generation (RAG) refers to enhancing the answer generation of an [[Large Language Model]] with additional information that is relevant to the user query. For this, an information retrieval step is added before generation that searches for additional data from external sources and adds them to the model context.

RAG allows models to include more recent data without retraining (reducing costs), cite concrete sources (increasing trust/correctness) and make it possible to include closed data such as internal company documents (though with the danger of leaking information in the response). 

The original RAG architecture by Lewis et al.[^1] combines a retriever (pre-trained, non-parametric memory, consisting of a query encoder for the user query and a document index) with a generator (pre-trained, parametric memory model). Including RAG is most relevant for knowledge-intensive tasks, "tasks that humans could not reasonably be expected to perform without access to an external knowledge source". 
## Main stages
- Building a document base
	- Add data, either unstructured (e.g. text), semi structured or structured (e.g. [[Knowledge Graphs]])
	- Create embeddings for the data, saving it in a vector DB
- User query
	- Create an embedding for the user query
- Information retrieval
	- Select the most relevant documents for the user query (e.g. using keyword, semantic, vector or hybrid search)
- Enhance the model prompt
	- Add the most relevant documents to the prompt
	- Add the user query to the prompt
- Generate response

## Improvements
- Better encoding of documents ("refer to documents in a more relevant way")
- Better retrieval ("find more relevant documents")
	 - Hybrid search ("text search in addition to embedding search")
	 - Improved document index (optimized for retrieval, faster retrieval over more documents)
	 - Add additional metadata to documents (file names, file paths...) to improve citation quality
 - Chunking ("cut up documents into relevant parts only")
	 - e.g., semi-structured data such as some text has natural boundaries (markdown has titles and sections, code has functions and classes...)

## Glossary

**parametric memory vs non-parametric memory**: Parametric memory refers to the knowledge stored in the parameters of the model, non-parametric memory is everything in addition to that, for example added context with RAG.

**vector embedding**: Numeric representations of content used for vector similarity search.

## Sources
- https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation
- https://en.wikipedia.org/wiki/Retrieval-augmented_generation
- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive nlp tasks. _Advances in neural information processing systems_, _33_, 9459-9474.

[^1]: Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive nlp tasks. _Advances in neural information processing systems_, _33_, 9459-9474.


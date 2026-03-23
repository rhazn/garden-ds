---
tags:
  - draft
---
Knowledge-Augmented Generation is an approach / alternative to [[Retrieval-Augmented Generation]] that relies on [[Knowledge Graphs]] (KG) for information storage and retrieval.

Because KGs add a structure to the otherwise unstructured data extraction used in RAGs, they provide additional ways to use domain knowledge when retrieving relevant context and allow the LLM to improve its reasoning (e.g. by following a semantic connection using a KG edge instead of just a keyword matching search).

Ultimately, the approach stays similar to RAG, but:
- User queries can be searched for KG entities (e.g. using named entity retrieval)
- The knowledge base that is constructed before user queries is a KG
- Information retrieval uses the KG structure instead of other search approaches

# Implementations

GraphRag[^1][^2] is an implementation by Microsoft. During the knowledge base construction stage, a KG is created from source documents by chunking, then extracting entities and relationships, and finally creating the knowledge graph. Next, graph communities ("clusters of nodes") are discovered automatically, and community summaries are created bottom-up (leaf nodes are summarized first, then meta summaries are created from as many lower-level summaries as fit the context window of the summarizer). During query time, many community answers are created, based on these community summaries. An answer ranking system assigns scores to these community answers, depending on how helpful they are to the user query. Answers with a score larger than zero are added to the context in descending order.

Another approach (from the Ant Group[^3]) built a multi-tier knowledge representation with an easy-to-create (but low structure) bottom layer based on raw text chunks and summaries and increasingly more structured (but harder to create) knowledge graphs on top of that. By including references between the entities of each tier they can be grounded in the source data. In this approach, generation is also done by a logical reasoning engine. In contrast to GraphRag it claims to reason better over long distances (e.g. multiple communities), at the downside of higher costs/complexity.

[^1]: Edge, D., Trinh, H., Cheng, N., Bradley, J., Chao, A., Mody, A., ... & Larson, J. (2024). From local to global: A graph rag approach to query-focused summarization. _arXiv preprint arXiv:2404.16130_.

[^2]: GraphRAG: Unlocking LLM discovery on narrative private data https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/

[^3]: Liang, L., Bo, Z., Gui, Z., Zhu, Z., Zhong, L., Zhao, P., ... & Chen, H. (2025, May). Kag: Boosting llms in professional domains via knowledge augmented generation. In _Companion Proceedings of the ACM on Web Conference 2025_ (pp. 334-343).

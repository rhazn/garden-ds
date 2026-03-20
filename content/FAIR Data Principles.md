---
tags:
  - draft
---
Originally published in 2016[^1] with the goal of defining "good data management" to improve scholarly data with the goal of making downstream use and re-use easier and improve the output of research investments.

In contrast to other initiatives, FAIR data principles place a special importance on making data accessible to machines, not only human consumption (e.g. by making data types discoverable by machines without human intuition).

The principles are not a standard or implementation but a guideline.
## The principles

### Findability
- F1. (meta)data are assigned a globally unique and persistent identifier
- F2. data are described with rich metadata (defined by R1 below)
- F3. metadata clearly and explicitly include the identifier of the data it describes
- F4. (meta)data are registered or indexed in a searchable resource
### Accessibility
- A1. (meta)data are retrievable by their identifier using a standardized communications protocol
	- A1.1 the protocol is open, free, and universally implementable
	- A1.2 the protocol allows for an authentication and authorization procedure, where necessary
- A2. metadata are accessible, even when the data are no longer available
### Interoperability
- I1. (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
- I2. (meta)data use vocabularies that follow FAIR principles
- I3. (meta)data include qualified references to other (meta)data
### Reusability
- R1. meta(data) are richly described with a plurality of accurate and relevant attributes
	- R1.1. (meta)data are released with a clear and accessible data usage license
	- R1.2. (meta)data are associated with detailed provenance
	- R1.3. (meta)data meet domain-relevant community standards
## Examples

As a concrete example implementation[^2], consider Figshare[^3]:
- Findability: Assigns persistent identifiers (DOIs or Handles) to all research outputs
- Accessibility: Provides access to metadata through standard protocols (https, REST API, OAI-PMH)
- Interoperability: Supports multiple citation metadata formats and controlled vocabularies
- Reusability: Requires clear licensing and maintains detailed versioning for all items

[^1]: Wilkinson, M., Dumontier, M., Aalbersberg, I. _et al._ The FAIR Guiding Principles for scientific data management and stewardship. _Sci Data_ **3**, 160018 (2016). https://doi.org/10.1038/sdata.2016.18

[^2]: https://guides.library.cmu.edu/researchdatamanagement/FAIR_principles#implementation

[^3]: https://figshare.com/

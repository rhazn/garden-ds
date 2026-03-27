---
tags:
  - draft
---
The Model Context Protocol (MCP) is a standard for AI agents to interact with external tools. The standard was first released in November 2024 by Anthropic[^1] and in December 2025 donated to the Linux Foundation[^2].

The goals of MCP are to provide developers with a framework to easily enable AI agents to interact with their applications and to improve the quality of AI for end users by providing more tools to the AI to use.

# Main Components of an MCP architecture[^3]
- MCP Host, the AI application using MCP.
- MCP Client, a component that can be instantiated by an MCP host, manages a connection to an MCP server and gathers context from the MCP server for the MCP host to use.
- MCP Server, a component that provides context to MCP clients and executes on requests. Can be local (e.g. local file system) or remote (e.g. using an external service).

## Misc, Example
- MCP clients and MCP servers communicate using Streamable HTTP or Stio.
- MCP supports authorization using OAuth[^5]
- Example, Claude Code using GitHub MCP: Claude Code is the MCP host and instantiates an MCP client internally that keeps connection to a MCP server running in GitHubs cloud.

# Functionality
Functionality of an MCP connection lives in the data layer (in contrast to the transport layer that handles connection management). MCP is a **stateful** protocol using JSON RPC 2.0[^4] . The data layer manages meta concerns such as capability negotiation and exposes to following features.

## Server features
MCP describes three primitives for server features: Tools, resources and prompts.
- Tools can be called by clients
- Resources provide context data
- Prompts describe how to interact
Each primitive supports discovery (via /list) and retrieval (via /get). Tools additionally support execution (via /call).

### Example
For a database MCP server. Tools to query and search the database, a resource that returns the database schema and a prompt that includes some examples how to use the tools.

## Client features
MCP describes three primitives for clients as well: Sampling, elicitation and logging.
- Sampling allows the server to use autocomplete with the client LLM
- Elicitation gets input from users
- Logging logs messages to the client

## Additional utility features
In addition to the client and server features, MCP also describes utilities for long running processes and change management.
- Notifications, for example for a server to notify a client if the tools list updates
- Tasks (experimental), support for long running processes with progress tracking

# Pros, Cons, Alternatives
Upsides of MCP include the discovery of tools and how to use them which is useful for new services or when the usage of a service has not been in the training data or context of the AI agent.

In addition, tool calls using MCP can use fine grained permissions from existing authorization services using OAuth.

Problems with MCP come from its verbose discovery and description protocol that has to be included in the context of an AI using it and leads to context bloat.

Alternatives are the use of a command line directly (if CLI based auth is acceptable and the CLI use has been part of the training data or context) or [[Skills]].

[^1]: https://www.anthropic.com/news/model-context-protocol

[^2]: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation

[^3]: https://modelcontextprotocol.io/docs/learn/architecture

[^4]: https://www.jsonrpc.org/

[^5]: https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization

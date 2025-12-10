# 0006 - Migration Prompts Standardization

## Status

Accepted

## Context

As our design system evolves, we regularly release breaking changes that require users to migrate their code. To help users with these migrations, we have been creating migration prompts and instructions.
Users need clear, consistent, and comprehensive migration guidance that follows a predictable pattern to efficiently upgrade their implementations.

## Decision

We have decided to standardize our migration prompt approach with the following principles:

1. **Separate prompt files from changelog**: Migration prompts will be maintained in dedicated files, separate from changelog entries, to improve discoverability and maintainability.

2. **Document prompt usage in changelog**: While prompts are in separate files, changelogs will include clear references and instructions on how to use the migration prompts for each version.

3. **Global prompts by default**: Migration prompts should be comprehensive and cover all breaking changes for a version, except for major migrations that require more granular, step-by-step guidance.

4. **Step-by-step commits within prompts**: Migration prompts should guide users through incremental changes that can be committed step by step, allowing for easier review and rollback if needed.

5. **English language**: All migration prompts and related documentation will be written in English to ensure consistency and accessibility for our international contributor base.
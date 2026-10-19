# Open-Source AI Standardisation Observatory

**Version:** 0.1  
**Status:** Research prototype / proof of concept

## Overview

The Open-Source AI Standardisation Observatory is an interactive prototype for investigating how open-source AI projects engage with formal standardisation and governance institutions.

It is designed to support a transparent research workflow: identifying candidate actors and relationships, recording source evidence, distinguishing direct participation from contextual relevance, and documenting evidence gaps.

The prototype does not claim to represent a complete or independently verified network.

## Features

- **Overview dashboard:** Research questions, seed entities, and evidence coverage.
- **Network explorer:** Interactive entity map with search, type filters, and node details.
- **Evidence register:** Searchable records with documented, contextual, and evidence-gap categories.
- **CSV import and export:** Import evidence records and export the current register.
- **Sample-data tools:** Download example records and a blank CSV template.
- **Candidate matcher:** Keyword-based matching to identify records for manual review.
- **Research design:** Suggested coding procedures, variables, and verification steps.
- **Project briefing:** A concise explanation of the research idea and its limitations.

## Research integrity and limitations

This is a research instrument prototype, not a completed empirical study.

- Seed records and network relationships have not all been independently audited.
- A source page being linked does not mean that every associated claim has been verified.
- A keyword match does not establish formal participation, standards compliance, or certification.
- An evidence gap means that a relationship has not been established in the current dataset; it does not prove that no relationship exists.
- The current prototype has no backend or live data feed.

Do not present the current network as verified empirical findings.

## Evidence CSV schema

The template uses the following columns:

`project, institution_or_process, relationship_type, evidence_status, source_url, source_passage, access_date, notes`

For each candidate relationship, record:

1. The project and institution or standard-setting process.
2. The specific relationship being investigated.
3. The original source URL.
4. The exact passage supporting the claim.
5. The date the source was accessed.
6. The coding decision and any limitations.

Imported status labels are not independent verification.

## Recommended next milestone

Conduct a manual audit of **5–8 candidate relationships** before expanding the network.

For each candidate, preserve the source passage, access date, relationship classification, decision rationale, and unresolved evidence gaps. Publish the audited evidence register and a concise codebook before making broader network claims.

## Technical notes

- Single-file HTML, CSS, and JavaScript interface.
- No server installation required for the core prototype.
- No backend database or live data integration.
- Keyword matching is intended for research triage and human review.

## Research principle

**No relationship should be treated as a finding until the underlying evidence has been checked and the coding decision documented.**

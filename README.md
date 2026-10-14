# Open-Source AI Standardisation Observatory

An evidence-first research pilot on documented participation by open-source AI projects in formal standardisation and the knowledge-transfer pathways connecting open-source development with standards institutions.

**Status:** scaffold, not yet an empirical dataset. The relationships CSV intentionally contains headers only until each relationship is verified against source evidence.

## Research question
What forms of participation by open-source AI projects in formal standardisation can be documented from public evidence, and what knowledge-transfer pathways do those records reveal?

## Lean workflow
1. Define the sample, period and inclusion criteria.
2. Use `docs/codebook.md` to distinguish direct participation from mentions, alignment claims and contextual relevance.
3. Verify 5–8 candidate relationships and record exact supporting passages in `docs/source_audit.md`.
4. Add only verified relationships to `data/relationships.csv`.
5. Run `notebooks/01_network.ipynb` for descriptive analysis.
6. Report coverage gaps. Do not interpret centrality as causal influence.

Brokerage is an optional second-stage question motivated by formal standard-setting network research; it is not assumed to generalise to open-source AI.

## Files
- `data/relationships.csv` — verified relationship rows only; currently a schema template
- `docs/codebook.md` — coding rules
- `docs/source_audit.md` — source verification ledger
- `notebooks/01_network.ipynb` — descriptive network workflow
- `app/index.html` — static showcase

## Integrity rules
- A project appearing in a graph does not imply standards participation.
- Repository existence, topical similarity and standards alignment do not prove participation.
- Every verified row needs a source URL, exact passage, access date, coding decision and limitation.
- A missing public record is not proof of non-participation.
- Do not republish copyrighted standards text.

## Key literature
1. Heß, P., Buggenhagen, M., & Blind, K. (2025). *The Impact of Standard-Setting Knowledge Networks on Firm Innovation*. Journal of Business Research, 200, 115626. https://doi.org/10.1016/j.jbusres.2025.115626
2. Blind, K., & Kromer, L. (2025). *The Role of Research and Other Inputs for the Development and Impacts of Standards*. The Journal of Technology Transfer. https://doi.org/10.1007/s10961-025-10286-8
3. TU Berlin, *Open Source Software (OSS) & Standardization*. https://www.tu.berlin/en/news-from-tu-berlin/open-source-software-oss-standardization

The first paper concerns formal standard-setting co-authorship networks and firm patent outcomes. It motivates a possible extension; it does not prove that brokerage has the same relationship with innovation in open-source AI.

## Hosting
The `app/` directory is a static site suitable for GitHub Pages. Enable Pages from the `main` branch and `/app` folder after pushing. This archive is not a live public deployment.

## Current limitation
No project-to-standards participation relationship is asserted as verified in this scaffold. Fill the source ledger first, then add verified rows.

# Open-Source AI Standardisation Observatory

A self-contained browser prototype for an evidence-led research study of documented participation by open-source AI projects in formal standardisation.

## Run
1. Extract this ZIP.
2. Open `index.html` in a modern browser.
3. Use the tabs to explore the dashboard, network, evidence register, research design, and project briefing.
4. Use **Load sample records** to test the evidence workflow.
5. Import a CSV using `data/evidence_template.csv` as a guide.
6. Export the filtered evidence table using the CSV export control.

No API key, account, database, or build step is required. For local server testing, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Included
- `index.html` — interactive, responsive website.
- `data/evidence_template.csv` — suggested data schema.
- `data/demo_evidence.csv` — test records only.
- `docs/CODEBOOK.md` — evidence and status definitions.
- `docs/RESEARCH_PROTOCOL.md` — proposed study design.
- `tests/validate_csv.py` — standard-library CSV validator.

## Important
This is a research prototype, not a completed empirical study. Seed records and network edges are unaudited. A source URL alone does not verify a claim. Importing a record must never count as independent verification. Do not infer standards participation from repository presence, an open-source licence, topical similarity, or policy context. Audit every claim and record exact source passages and access dates before presenting findings.

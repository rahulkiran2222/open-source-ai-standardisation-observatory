# Open-Source AI Standardisation Observatory — Research Prototype v0.1

A self-contained browser prototype for demonstrating an evidence-led workflow to study documented participation by open-source AI projects in formal standardisation. It is a proof of concept, not completed empirical research.

## Quick start (recommended)

1. Extract the ZIP completely (do not try to run `index.html` from inside the ZIP preview).
2. Open the extracted `open_source_ai_standardisation_observatory` folder.
3. Double-click `index.html` to open it in a modern browser.
4. Try the tabs: Overview, Network explorer, Evidence register, Research design, and Explain the project.
5. In Evidence register, click **Load sample records**, then try **Export evidence CSV**.

## If double-clicking does not work

Run a tiny local server from inside the extracted project folder:

- **macOS / Linux:** open Terminal in the folder and run `python3 -m http.server 8000`
- **Windows:** open Command Prompt in the folder and run `py -m http.server 8000` (or `python -m http.server 8000`)

Then open `http://localhost:8000` in your browser. Keep the terminal window open while testing; press `Ctrl+C` to stop the server.

## Included

- `index.html` — interactive, responsive prototype.
- `data/evidence_template.csv` — expected data schema.
- `data/demo_evidence.csv` — illustrative test records only.
- `docs/CODEBOOK.md` — evidence and status definitions.
- `docs/RESEARCH_PROTOCOL.md` — proposed study design.
- `tests/validate_csv.py` — standard-library CSV validator.

## Research integrity

The seed records and network edges are unaudited. A source URL alone does not verify a claim. Importing a record never counts as independent verification. Do not infer standards participation from repository presence, an open-source licence, topical similarity, or policy context. Audit each claim and record the exact source passage and access date before presenting findings. This is not an official TU Berlin project or a compliance tool.

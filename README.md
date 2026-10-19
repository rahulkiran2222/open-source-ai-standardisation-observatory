# Open-Source AI Standardisation Observatory

A research prototype for tracing claims about relationships between open-source AI projects, standards development organisations, and policy processes.

## Run the interface
Open `index.html` in a modern browser; no server or external JavaScript dependencies are required.

## Included
- `index.html`: network explorer, evidence register, candidate matcher, reports, codebook, validation simulator, CSV import/export.
- `data/evidence_records.json` and `.csv`: illustrative starter records.
- `schemas/evidence_record.schema.json`: JSON Schema.
- `src/verification/validate_record.py`: record completeness checks.
- `src/network/build_graph.py`: NetworkX graph construction.
- `src/reporting/summary.py`: descriptive summaries.
- `tests/test_validate_record.py`: unit tests.

## Python setup
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m unittest discover -s tests -v
python src/network/build_graph.py
```

## Research integrity
Starter records are **illustrative, not independently verified findings**. A repository or project homepage does not prove formal standards participation. Before publication, locate the exact primary source, record a stable URL, verbatim passage, access date, and source type, and state what the source does and does not establish. Treat candidate matching as retrieval, not verification. Treat a gap as a record of insufficient evidence, not proof that a relationship does not exist.

## Persistence
Browser edits are in-memory; export CSV to preserve changes. A production version should add persistent storage, audit history, and reviewer permissions.

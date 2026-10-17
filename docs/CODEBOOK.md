# Codebook

## Unit of analysis
One candidate claim about a relationship between a project/actor and a formal standards body, committee, standard, or process, linked to a specific source.

## Status labels
- `documented`: a supplied record is labelled as documented; this does not by itself mean independently audited.
- `context`: relevant context without sufficient evidence of a direct relationship.
- `gap`: a relationship has not been established from the evidence checked; this does not prove it never occurred.

## Relationship types
Formal membership; direct contribution; consultation response; liaison/working-group participation; declared alignment; contextual relevance; evidence gap; other (explain).

## Evidence hierarchy
1. Primary records: official membership lists, minutes, submissions, contribution records.
2. Official secondary sources describing the relationship.
3. Self-reported project or institutional records.
4. Contextual sources useful for discovery but insufficient to establish a direct tie.
5. No qualifying evidence found, with search scope documented.

## Independent verification checklist
A human reviewer opens the source, confirms that it supports the precise claim, records the exact passage or locator and access date, and documents the decision and caveats. Mark participation verified only when the source establishes participation in a formal venue—not mere alignment or topical relevance.

## Required fields
`project`, `institution_or_process`, `relationship_type`, `evidence_status`, `source_url`, `source_passage`, `access_date`, `notes`. Recommended additions: `record_id`, `raw_status_label`, `independently_verified`, `project_participation_verified`.

## Cautions
- Repository existence or an open-source licence does not establish standards participation.
- Compliance, alignment, and participation are distinct.
- An evidence gap is not proof of absence.
- Do not republish protected standards texts without permission.

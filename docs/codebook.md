# Codebook: Open-Source AI and Standardisation

## Unit of analysis
One documented relationship between a named open-source AI project (or explicitly identified governing organisation) and a standards-development organisation, standards working group, formal consultation or published standardisation process during a predefined observation period.

## Relationship categories
- `formal_membership`: an official source explicitly records membership or formal representation.
- `direct_contribution`: a primary record documents a contribution to standards drafting, a working group or official standardisation activity.
- `consultation_response`: an identifiable response submitted to a formal public consultation.
- `declared_alignment`: project documentation explicitly states alignment with a standard. This is not participation.
- `implementation_reference`: a standard or official record explicitly refers to the project's implementation, or vice versa.
- `contextual_mention`: a source mentions both actors but establishes no direct relationship.
- `no_evidence_found`: a documented search found no qualifying public record. This is not proof that participation did not occur.

## Evidence status
- `verified`: a human opened the cited source and the exact passage supports the narrowly worded claim.
- `needs_review`: candidate record not yet manually checked.
- `rejected`: source does not support the claim, is broken, or the claim overstates what it says.

## Minimum fields
`relationship_id`, `project`, `institution_or_process`, `relationship_type`, `evidence_status`, `source_url`, `source_title`, `supporting_passage`, `access_date`, `coder_decision`, `limitations`.

## Inclusion rule
Only mark a relationship verified when the source explicitly supports that relationship type. Prefer primary records from standards bodies, consultation portals, project governance pages or project repositories. If using an official secondary source, record that limitation.

## Exclusion rule
Do not infer participation from an open-source licence, use of a standard, topical similarity, co-appearance in a general policy article, or an organisation's ecosystem membership without a project-specific link.

## Missingness and interpretation
Public records may be incomplete or inaccessible. Record the search path and avoid interpreting absence of evidence as evidence of non-participation. A graph with 5–8 relationships is an illustrative pilot, not a representative ecosystem map.

## Brokerage
Do not make brokerage claims from the pilot graph. Consider network measures only after sample coverage and node/edge definitions are defensible. Centrality or brokerage is not evidence of causal influence.

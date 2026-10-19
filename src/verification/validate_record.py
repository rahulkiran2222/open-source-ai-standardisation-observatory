from urllib.parse import urlparse
RELATIONSHIP_TYPES={"formal_membership","technical_contribution","consultation_response","documented_citation","declared_alignment","contextual_relevance","unresolved"}
STATUSES={"independently_verified","documented","candidate","gap"}
def validate_record(r):
 e=[]
 for k in ("project","institution_or_process","relationship_type","evidence_status","audit_notes"):
  if not str(r.get(k,"")).strip(): e.append(f"{k} is required")
 if r.get("relationship_type") not in RELATIONSHIP_TYPES:e.append("invalid relationship_type")
 if r.get("evidence_status") not in STATUSES:e.append("invalid evidence_status")
 u=str(r.get("source_url","")).strip()
 if u and (urlparse(u).scheme not in {"http","https"} or not urlparse(u).netloc):e.append("source_url must be absolute HTTP(S)")
 if r.get("evidence_status")=="independently_verified":
  if not u:e.append("independently_verified requires source_url")
  if not str(r.get("source_passage","")).strip():e.append("independently_verified requires source_passage")
 return e

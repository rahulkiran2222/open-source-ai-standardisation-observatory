from collections import Counter
STATUSES=("independently_verified","documented","candidate","gap")
def summarize(records):
 s=Counter(r.get("evidence_status","unknown") for r in records);t=Counter(r.get("relationship_type","unknown") for r in records)
 return {"total_records":len(records),"records_missing_passage":sum(not str(r.get("source_passage","")).strip() for r in records),"status_counts":{k:s.get(k,0) for k in STATUSES},"relationship_counts":dict(sorted(t.items()))}

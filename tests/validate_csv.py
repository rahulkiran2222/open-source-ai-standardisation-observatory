#!/usr/bin/env python3
import csv, sys
from pathlib import Path
REQUIRED = {"project","institution_or_process","relationship_type","evidence_status"}
ALLOWED = {"documented","context","gap"}
def validate(path):
    errors=[]
    with Path(path).open(newline="", encoding="utf-8-sig") as f:
        r=csv.DictReader(f)
        headers={h.strip().lower() for h in (r.fieldnames or [])}
        if REQUIRED-headers: return [f"Missing headers: {sorted(REQUIRED-headers)}"]
        for n,row in enumerate(r,2):
            d={str(k or "").strip().lower():str(v or "").strip() for k,v in row.items()}
            for k in REQUIRED:
                if not d.get(k): errors.append(f"Row {n}: {k} is blank")
            status=d.get("evidence_status","").lower().replace(" ","_").replace("-","_")
            if status and status not in ALLOWED: errors.append(f"Row {n}: invalid status {status}")
    return errors
if __name__=="__main__":
    paths=sys.argv[1:] or [str(Path(__file__).parents[1]/"data"/"demo_evidence.csv")]
    failed=False
    for p in paths:
        e=validate(p)
        print(("FAIL" if e else "PASS")+": "+p)
        for x in e: print(" - "+x)
        failed |= bool(e)
    raise SystemExit(1 if failed else 0)

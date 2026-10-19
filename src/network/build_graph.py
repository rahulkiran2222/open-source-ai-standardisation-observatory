import json
from pathlib import Path
import networkx as nx
def build_graph(records, include_candidates=True, include_gaps=False):
 g=nx.MultiGraph()
 for r in records:
  s=r.get("evidence_status")
  if s=="gap" and not include_gaps:continue
  if s=="candidate" and not include_candidates:continue
  a=r.get("project","").strip();b=r.get("institution_or_process","").strip()
  if not a or not b:continue
  g.add_node(a,node_type="project");g.add_node(b,node_type="institution_or_process");g.add_edge(a,b,key=r.get("id"),**r)
 return g
def load_records(path):return json.loads(Path(path).read_text(encoding="utf-8"))
if __name__=="__main__":
 r=load_records(Path(__file__).resolve().parents[2]/"data/evidence_records.json");g=build_graph(r);print({"nodes":g.number_of_nodes(),"edges":g.number_of_edges()})

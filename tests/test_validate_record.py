import unittest
from src.verification.validate_record import validate_record
class Tests(unittest.TestCase):
 def test_candidate_minimum(self):self.assertEqual(validate_record({"project":"A","institution_or_process":"B","relationship_type":"unresolved","evidence_status":"candidate","audit_notes":"Lead"}),[])
 def test_verified_requires_source(self):
  e=validate_record({"project":"A","institution_or_process":"B","relationship_type":"formal_membership","evidence_status":"independently_verified","audit_notes":"Checked"});self.assertTrue(any("source_url" in x for x in e));self.assertTrue(any("source_passage" in x for x in e))
 def test_bad_status(self):self.assertTrue(validate_record({"project":"A","institution_or_process":"B","relationship_type":"unresolved","evidence_status":"certain","audit_notes":"Test"}))
if __name__=="__main__":unittest.main()

exports = function(payload, response){
  
  const {gradeid} = payload.query;
  
  let query = {};
  if (gradeid){
    query = {"Grade.GradeID": {$eq : gradeid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Grade");
  let grade = doc.find(query)

  
return grade;
};
exports = function(payload, response){
  
  const {GradeID} = payload.query;
  
  let query = {};
  if (GradeID){
    query = {"Grade.GradeID": {$eq : GradeID}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Grade");
  let commentList = doc.find(query)

  
return commentList;
};
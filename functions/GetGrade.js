exports = function(payload, response){
  
  const {ClassID} = payload.query;
  
  let query = {};
  if (ClassID){
    query = {"Class.ClassID": {$eq : ClassID}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Class");
  let commentList = doc.find(query)

  
return commentList;
};
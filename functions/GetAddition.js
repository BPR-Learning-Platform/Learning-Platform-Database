exports = function(payload, response){
  
  const {TaskID} = payload.query;
  
  let query = {};
  if (TaskID){
    query = {"Addition.TaskID": {$eq : userid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("fAddition");
  let commentList = doc.find(query)

  
return commentList;
};
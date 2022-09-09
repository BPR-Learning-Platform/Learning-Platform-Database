exports = function(payload, response){
  
  const {TaskID} = payload.query;
  
  let query = {};
  if (TaskID){
    query = {"Subtraction.TaskID": {$eq : userid}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Subtraction");
  let commentList = doc.find(query)

  
return commentList;
};
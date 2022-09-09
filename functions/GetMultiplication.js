exports = function(payload, response){
  
  const {TaskID} = payload.query;
  
  let query = {};
  if (TaskID){
    query = {"Multiplication.TaskID": {$eq : TaskID}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Multiplication");
  let commentList = doc.find(query)

  
return commentList;
};
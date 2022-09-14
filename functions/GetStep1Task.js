exports = function(payload, response){
  
  const {TaskID} = payload.query;
  
  let query = {};
  if (TaskID){
    query = {"Step1.TaskID": {$eq : TaskID}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Step1");
  let commentList = doc.find(query)

  
return commentList;
};
exports = function(payload, response){
  
  const {TaskID} = payload.query;
  
  let query = {};
  if (TaskID){
    query = {"Addition.TaskID": {$eq : TaskID}
      
} }

  const doc = context.services.get("mongodb-atlas").db("PBRDB").collection("Addition");
  let commentList = doc.find(query)

  
return commentList;
};
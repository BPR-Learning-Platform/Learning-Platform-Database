exports = function(payload, response){
  
  const {Step} = payload.query;

  let query = {};
  let taskList;
  if (Step == 1){
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Step1");
  taskList = doc.find(query)
}  else if (Step == 2){
  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Step2");
  taskList = doc.find(query)
}
  return taskList;
};
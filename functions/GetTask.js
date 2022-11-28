exports = function(payload, response){
  
  const {step} = payload.query;

  let query = {};
  let taskList;
  if (step == 1){
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Step1");
  taskList = doc.find(query)
}  else if (step == 2){
  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Step2");
  taskList = doc.find(query)
}
  return taskList;
}; 
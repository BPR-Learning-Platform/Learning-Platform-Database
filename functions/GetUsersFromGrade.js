//Skal bruge AssignedGradeID for at finde userne
exports = function(payload, response){
  
  const {AssignedGradeID} = payload.query;
  
  let userList = [];
  
  if (AssignedGradeID){
    
    let query =  {"User.AssignedGradeID": {$eq : AssignedGradeID}}  
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.AssignedGradeID":0} );
  
  }

return userList;

};
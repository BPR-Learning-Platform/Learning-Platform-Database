//Skal bruge AssignedGradeIDs for at finde brugerne
exports = function(payload, response){
  
  const {AssignedGradeIDs} = payload.query;
  
  let userList = [];
  
  if (AssignedGradeIDs){
    
    let query = {"User.AssignedGradeIDs.0": {$eq : AssignedGradeIDs}}
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.AssignedGradeIDs":0} );
  
  }

return userList;

};
//Skal bruge AssignedGradeIds for at finde brugerne
exports = function(payload, response){
  
  const {AssignedGradeIds} = payload.query;
  
  let userList = [];
  
  if (AssignedGradeIds){
    
    let query = {"User.AssignedGradeIds": {$eq : AssignedGradeIds}}
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.AssignedGradeIds":0} );
  
  }

return userList;

};
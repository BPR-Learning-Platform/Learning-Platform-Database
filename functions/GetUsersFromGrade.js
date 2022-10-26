//Skal bruge AssignedGradeIDs for at finde brugerne
exports = function(payload, response){
  
  const {assignedgradeid} = payload.query;
   
  let userList = [];
  
  if (assignedgradeid){
    let query = { "User.AssignedGradeIDs": assignedgradeid }
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query );
  
  }

return userList;

};    
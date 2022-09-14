//Skal bruge ClassID for at finde userne
exports = function(payload, response){
  
  const {GradeID} = payload.query;
  
  let userList = [];
  
  if (GradeID){
    
    let query =  {"User.GradeID": {$eq : GradeID}}  
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.GradeID":0} );
  
  }

return userList;

};
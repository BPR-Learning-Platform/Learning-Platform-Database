//Skal bruge ClassID for at finde userne
exports = function(payload, response){
  
  const {ClassID} = payload.query;
  
  let userList = [];
  
  if (ClassID){
    
    let query =  {"User.ClassID": {$eq : ClassID}}  
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.ClassID":0} );
  
  }

return userList;

};
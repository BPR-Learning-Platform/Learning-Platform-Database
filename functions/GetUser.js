exports = function(payload, response){
  
  const {Email} = payload.query;
  const {Password} = payload.query;
  
  let userList = [];
  
  if (Email && Password){
    
    let query = { $and: [ {"User.Email": {$eq : Email}}, {"User.Password": {$eq : Password}}]} 
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query , {"User.Password":0} );
  
  }

return userList;

};
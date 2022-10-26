//Skal bruge userid for at finde brugerne
exports = function(payload, response){
  
  const {userid} = payload.query;
   
  let userList = [];
  
  if (userid){
    let query = { "UserID": parseInt(userid) }
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( query );
  
  }

return userList;

};    
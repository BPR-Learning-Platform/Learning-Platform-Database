exports = async function (payload, response) {

   const collection = context.services.get("mongodb-atlas")
                      .db("BPRDB")
                      .collection("User");
 const data = JSON.parse(payload.body.text())

  const {Email} = bodyJson;
  const {Password} = bodyJson;
  
  let userList = [];
  
  if (Email && Password){
    
    let bodyJson = { $and: [ {"User.Email": {$eq : Email}}, {"User.Password": {$eq : Password}}]} 
    
    const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
    userList = doc.find( bodyJson );
  
}
return userList;

};
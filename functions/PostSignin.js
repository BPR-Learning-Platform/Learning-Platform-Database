exports = async function (payload, response) {

   const collection = context.services.get("mongodb-atlas")
                      .db("cards")
                      .collection("my collection");
 const data = JSON.parse(payload.body.text())
 
 result = await context.services

  const {Email} = bodyJson;
  const {Password} = bodyJson;
  
  let userList = [];
  
  if (Email && Password){
    
    let bodyJson = { $and: [ {"User.Email": {$eq : Email}}, {"User.Password": {$eq : Password}}]} 

    userList = doc.find( bodyJson );
  
}
return userList;

};
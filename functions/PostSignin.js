exports = async function (payload, response) {

   const result = await context.services.get("mongodb-atlas")
                      .db("cards")
                      .collection("my collection");
 const bodyJson = JSON.parse(payload.body.text())
 

  const {Email} = bodyJson;
  const {Password} = bodyJson;
  
  let userList = [];
  
  if (Email && Password){
    
    let bodyJson = { $and: [ {"User.Email": {$eq : Email}}, {"User.Password": {$eq : Password}}]} 

    result = doc.find( bodyJson );
  
}
return result;

};
exports = async function (request, response) {
 const bodyJson = JSON.parse(request.body.text())
  
  let userList = [];
    
    let query = { $and: [ {"User1.Email": {$eq : bodyJson.email.toString()}}, {"User1.Password": {$eq : bodyJson.password.toString()}}]} 

   return await context.services.get("mongodb-atlas").db("BPRDB").collection("User1").find( query, {"User1.Password":0} );

}; 
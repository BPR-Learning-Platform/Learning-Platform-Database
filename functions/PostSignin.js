exports = async function (request, response) {
 const bodyJson = JSON.parse(request.body.text())
  
  let userList = [];
    
    let query = { $and: [ {"User.Email": {$eq : bodyJson.email.toString()}}, {"User.Password": {$eq : bodyJson.password.toString()}}]} 

   return await context.services.get("mongodb-atlas").db("BPRDB").collection("User").find( query, {"User.Password":0} );

};
// Post metode for users
exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());

		 // 2. Run the endpoint logic
	result = await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("User").updateOne(
   { $or: [{"User.Name": bodyJson.userName.toString()}, {"User.Email": bodyJson.userId.toString()}] }, //do NOT insert new user if username OR userid already exists
   { $setOnInsert: { "User.Name" : bodyJson.uName.toString(), //"Name" from angular
                      "User.Email" : bodyJson.Email.toString(), //Email ("Email" from angular)
                      "User.Password" : bodyJson.Password.toString(), //Pasword ("Password" from angular)
                      //"User.AssignedClassID" : bodyJson.AssignedClassID.toString(), //ClassID ("ClassID" from angular)
                      "User.Type" : bodyJson.Type.toString(), //Type ("Type" from angular)
   } },
   { upsert: true }
)
  // 3. Configure the response
 response.setBody(JSON.stringify(result)); 
} 

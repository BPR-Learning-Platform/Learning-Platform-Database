//Put user
exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());

		 // 2. Run the endpoint logic
	result = await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("User1").updateOne(
   { "User.Email": bodyJson.email.toString() }, //do NOT insert new user if email already exists
   { $set: {  "User.AssignedGradeIDs" : bodyJson.assignedgradeids.toString().split(","),
                      "User.Name" : bodyJson.name.toString(),
                      "User.Type" : bodyJson.type.toString(),
                      "User.Score" : bodyJson.score,

   } },
   { upsert: true }
)
  // 3. Configure the response
 response.setBody(JSON.stringify(result)); 
} 

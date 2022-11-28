//Post user
exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());

		 // 2. Run the endpoint logic

      	result = await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("User")
    .updateOne( { "User.Email": bodyJson.email.toString() }, 
    {$setOnInsert: { User : {     
                      AssignedGradeIDs : bodyJson.assignedgradeids.toString().split(","),
                      Email : bodyJson.email.toString().toLowerCase(),
                      Name : bodyJson.name.toString(), 
                      Password : bodyJson.password.toString(), 
                      Type : bodyJson.type.toString(), 
                      Score : bodyJson.score}}},
    { upsert: true } );
  // 3. Configure the response
  if (result.matchedCount == 1){return 403
  }
  else{
 response.setBody(JSON.stringify(result)); }
    }
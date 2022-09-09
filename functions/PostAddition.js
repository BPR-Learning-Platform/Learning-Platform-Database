//Post addition 
exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  // 2. Run the endpoint logic
  await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("Addition")
    .insertOne({ Addition: {
      TaskID: bodyJson.TaskID.toString(),
      Exercise: bodyJson.Exercise.toString(),
      Answer: bodyJson.Answer.toString()
      
    }});
  // 3. Configure the response
  response.setBody("Request was successful");
} 
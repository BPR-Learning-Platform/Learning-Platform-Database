//Post grade
exports = async function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  // 2. Run the endpoint logic
  await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("Grade")
    .insertOne({ Grade: {
      Step: bodyJson.step.toString(),
      GradeName: bodyJson.gradename.toString()
      
    }});
  // 3. Configure the response
  response.setBody("Request was successful");
} 
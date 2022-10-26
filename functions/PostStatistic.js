//Post Statistic
exports = function (request, response) {

  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
//return bodyJson
  // 2. Run the endpoint logic

  context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("Statistic")
    .insertOne(
{ timestamp: new Date(), Statistic :{ 
  Score: bodyJson.score.toString(),
  GradeID: bodyJson.gradeid.toString(),
  StudentID: bodyJson.studentid.toString()

    }});
  // 3. Configure the response
  response.setBody("Request was successful");
} 
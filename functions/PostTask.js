//Post task
exports = function (request, response) {
  // 1. Parse the incoming request
  const bodyJson = JSON.parse(request.body.text());
  // 2. Run the endpoint logic
  if (bodyJson.step == 1){
   context.services.get("mongodb-atlas").db("BPRDB").collection("Step1")
    .insertOne({ Task: {
      Step: bodyJson.step.toString(),
      Difficulty: bodyJson.difficulty.toString(),
      Exercise: bodyJson.exercise.toString(),
      Answer: bodyJson.answer.toString(),
      Type: bodyJson.type.toString()
      }});
  }
    else if (bodyJson.step == 2){
  context.services.get("mongodb-atlas").db("BPRDB").collection("Step2")
  .insertOne({ Task: {
      Step: bodyJson.step.toString(),
      Difficulty: bodyJson.difficulty.toString(),
      Exercise: bodyJson.exercise.toString(),
      Answer: bodyJson.answer.toString(),
      Type: bodyJson.type.toString()
      }});
    }
  // 3. Configure the response
  response.setBody("Request was successful");
  
} 


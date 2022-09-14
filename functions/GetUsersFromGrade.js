//Skal bruge AssignedGradeIDs for at finde users
exports = function(payload, response){
  
  const {AssignedGradeIDs} = payload.query;
  
  let query = {};
  if (AssignedGradeIDs){
    query = {"User.AssignedGradeIDs.": {$eq : AssignedGradeIDs}
      
} }

  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("User");
  let userList = doc.find(query)

  
return userList;
};
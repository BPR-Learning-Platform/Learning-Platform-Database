exports = function(){
  const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Grade");
  let grades = doc.find()

  
return grades;
}; 
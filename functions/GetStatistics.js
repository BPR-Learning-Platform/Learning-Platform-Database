//score, time stamp, gradeid, studentid, logid timestamp: new Date(),

exports = function(payload, response){
  
  const {gradeid} = payload.query;
  const {studentid} = payload.query;
  const {step} = payload.query;
 
  let statisticList;
  
 if (gradeid){
     let query = {"Statistic.AssignedGradeIDs": gradeid}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query);
} else if (studentid){
     let query = {"UserID": parseInt(studentid)}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query);
}else if (step){
     let query = {"Statistic.Step": (step)}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query);
}
  return statisticList;
};


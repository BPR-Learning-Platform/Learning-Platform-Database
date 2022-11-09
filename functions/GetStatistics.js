//score, time stamp, gradeid, studentid, logid timestamp: new Date(),

exports = function(payload, response){
  
  const {gradeid} = payload.query;
  const {studentid} = payload.query;

  let statisticList;
  
 if (gradeid){
     let query = {"Statistic.AssignedGradeIDs": {$eq : gradeid}}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query);
} else if (studentid){
     let query = {"UserID": parseInt(studentid)}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query);
}
  return statisticList;
};


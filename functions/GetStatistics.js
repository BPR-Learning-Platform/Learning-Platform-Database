//score, time stamp, gradeid, studentid, logid timestamp: new Date(),

exports = function(payload, response){
  
  const {gradeid} = payload.query;
  const {studentid} = payload.query;

  let query = {}
  let satisticList;
  if (gradeid == null && studentid){
      query = {"Statistic.StudentID": {$eq : studentid}}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query)
}  else if (studentid == null && gradeid){
     query = {"Statistic.GradeID": {$eq : gradeid}}
       const doc = context.services.get("mongodb-atlas").db("BPRDB").collection("Statistic");
  statisticList = doc.find(query)
}
  return statisticList;
};


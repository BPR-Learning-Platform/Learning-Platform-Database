exports = async function(arg){
  let thing = await context.services
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("User")
    .aggregate([{
 $match: {        //Makes sure that it only matches on students
  'User.Type': 'S'
 }
},
    { //Unwinds the array so the gradeids are easier to work with 
 $unwind: "$User.AssignedGradeIDs" 
      
    },
{        //Removes the specific types that is not needed! _id is removed so it gets a new _id in the Statistic collection
 $project: {
   '_id': 0,
  'User.Type': 0,
  'User.Email': 0,
  'User.Password': 0,
  'User.Name': 0
 }
}, {          //Adds timestamp to the documents
 $addFields: {
  timestamp: '$$NOW'
 }
},]).toArray();

context.services      //inserts the snapshot of students to the Statistic collection
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("Statistic").insertMany(thing);
    
    context.services        //Renames things to match what is needed for statistics
    .get("mongodb-atlas")
    .db("BPRDB")
    .collection("Statistic").updateMany({}, {$rename: {"User": "Statistic"}});


return thing;
};
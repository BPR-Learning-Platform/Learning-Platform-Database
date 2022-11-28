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
{
    $project: { //Takes the first element in the array and creates an object with the users in it. After that it passes on score, userID and removes _id
        firstProject: {
            $arrayElemAt: [
                '$User.AssignedGradeIDs',
                0
            ]
        },
        'User.Score': 1,
        UserID: 1,
        _id: 0
    }
}, {
    $addFields: { // Passes assignedgradeid to int so it can be compared to UserID from user
        'User.AssignedGradeIDs': {
            $toInt: '$firstProject'
        }
    }
}, {
    $lookup: { // Compares user and grade on GradeID/AssignedGradeIDs
        from: 'Grade',
        localField: 'User.AssignedGradeIDs',
        foreignField: 'GradeID',
        as: 'ID'
    }
}, {
    $project: { // Creates new object with the users on AssignedGradeIDs and passes on needed elements
        secondProject: {
            $arrayElemAt: [
                '$ID',
                0
            ]
        },
        'User.Score': 1,
        IDtoString: '$User.AssignedGradeIDs',
        UserID: 1
    }
}, {
    $addFields: { // Adds timestamp and step to User object and transforms AssignedGradeIDs back to a string
        'User.AssignedGradeIDs': {
            $toString: '$IDtoString'
        },
        'User.Step': '$secondProject.Grade.Step',
        timestamp : '$$NOW'
        //timestamp: new Date("2022-11-09T11:24:13.222+00:00")
    }
}, {
    $project: { // Removes unused objects
        secondProject: 0,
        IDtoString: 0
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


//When submit button is clicked
$("#submit").on("click", function(event) {

//prevents page from refreshing when button is clicked
event.preventDefault();


//Grab user input
var newTrainName = $("#train-name").val();
var newDestination = $("#destination").val();
var newFirstTrainTime = $("#first-train-time").val();
var newFrequency = $("#frequency").val();

console.log(newTrainName);
console.log(newDestination);
console.log(newFirstTrainTime);
console.log(newFrequency);



//creates temporary object to store user data

var newUserData = {

    name: newTrainName,
    destination: newDestination,
    firstTrainTime: newFirstTrainTime,
    frequency: newFrequency

};

//uploads user data to the database
database.ref().push(newUserData);


//clears all of the textboxes
$("#train.name").val("");
$("#destination").val("");
$("#first-train-time").val("");
$("#frequency").val("");

});


//see the most recent object submitted to the database
database.ref().on("child_added", function(childSnapshot) {

console.log(childSnapshot.val());

//store everything into a variable
var trainName = childSnapshot.val().name;
var destination = childSnapshot.val().destination;
var firstTrainTime = childSnapshot.val().firstTrainTime;
var frequency = childSnapshot.val().frequency;

console.log(trainName);
console.log(destination);
console.log(firstTrainTime);
console.log(frequency);




//To calculate when the next train will arrive:


//Find the difference between the current time and the first train time

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);


//current time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);


//divide that difference by the frequency
var tRemainder = diffTime % frequency;
console.log(tRemainder);


//Take the remainder and subtract it from the frequency -- this is the minutes away
var tMinutesTillTrain = frequency - tRemainder;
console.log("MINUTES AWAY: " + tMinutesTillTrain);


//Add the minutes away to the current time -- this is the next train arrival time

var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm A"));

var trainNameData = $("<td>").text(trainName);

var destinationData = $("<td>").text(destination);

var frequencyData = $("<td>").text(frequency);

var nextTrainData = $("<td>").text(moment(nextTrain).format("hh:mm A"));

var minutesAwayData = $("<td>").text(tMinutesTillTrain);

var tRow = $("<tr id='t-row'>");

tRow.append(trainNameData, destinationData, frequencyData, nextTrainData, minutesAwayData);

$("#tbody").prepend(tRow);


});
$(document).ready(function () {

    // Checks the local storage and prints it to the page 
    var toDoArray=[0,1,2,3,4,5,6,7,8]
    var toDoList = [];
for(var i = 0; i< toDoArray.length; i++){
    if(localStorage.getItem("toDO"+ i) !== null){
$("#" + i).attr("placeholder", JSON.parse(localStorage.getItem("toDO" + i)))

    }
}

    



// Gets time 
    var now = moment().format("dddd, MMMM Do YYYY");;
    $("#currentDay").text(now);

    var currentHour = parseInt(moment().format("H"));
    // console.log(currentHour);

    // Getting the id's from each div, comparing them to the hour,  and then giving them a color accordingly
    $(".time").each(function () {
        var hour = parseInt($(this).attr("id"));
        var hourDiv = $(this).attr("id")
        // console.log(hour);

        if (currentHour < hour) {
            $("#" + hourDiv).attr("class", "row p-3 mb-2 text-white bg-success");
        } else if (currentHour > hour) {
            $("#" + hourDiv).attr("class", "row p-3 mb-2 text-white bg-secondary");
        } else {
            $("#" + hourDiv).attr("class", "row p-3 mb-2 text-white bg-danger");
        };

    });


// Click event for the save button saves the input to local storage
    $(".btn").on("click", function (event) {
        event.preventDefault();
        toDoList=[]
        console.log(event.target.previousElementSibling.previousElementSibling.value)
        //var inputInfo = event.target.previousElementSibling.previousElementSibling;
        var info = event.target.previousElementSibling.previousElementSibling.value;
        $(event.target.previousElementSibling.previousElementSibling).attr("placeholder", info);
        toDoList.push(info)

        localStorage.setItem("toDO"+$(event.target.previousElementSibling.previousElementSibling).attr("id"),JSON.stringify(toDoList))

    })
    



});



  
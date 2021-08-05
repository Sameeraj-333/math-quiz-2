player_1_score = 0;
player_2_score = 0;
player_1_name = localStorage.getItem('player1_name');
document.getElementById("player1_name").innerHTML = player_1_name + ": ";
player_2_name = localStorage.getItem('player2_name')
document.getElementById("player2_name").innerHTML = player_2_name + ": ";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
function send(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    answer = parseInt(num1) * parseInt(num2);
    document.getElementById("output").innerHTML = "<h3>" + "Question:" + "</h3>" + "<br>"  + "<p>" + num1 + "</p>"  + "<p>" + " X " + "</p> " + "<p>" + num2 + "</p>"+ "<br>" + "<h3>Answer: "  + "<input type='number'>" +  "<h3>" + "Answer" + "</h3>" + "</input>" + "<button class='btn btn-success'>" + "<h3>" + "Submit" + "</h3>" + "</button>";
}
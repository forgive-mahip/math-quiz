player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1+":";
document.getElementById("player2name").innerHTML=player2+":";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="quesstionturn-"+player1;
document.getElementById("playeranswer").innerHTML="answerturn-"+player2;
function send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;

question="<h4 id='worddisplay'>Q-"+number1+"X"+number2+"</h4>";
input="<br>answer:<input type='text' id='inputbox'>";
check1="<br> <br> <button class='btn btn-info' onclick='check()'> check </button>";;
row=question+input+check1;
document.getElementById("output").innerHTML=row;

}
question="player1"
answer="player2"
function check(){

 answer=document.getElementById("inputbox").value
 answerfinal=number1*number2
 console.log(answerfinal)
if(answerfinal==answer){
  if(answer=="player1")  
  {
player1score=player1score+1

document.getElementById("player1score").innerHTML=player1score;



  }
  else
  {
player2score=player2score+1

document.getElementById("player2score").innerHTML=player2score;

  }



}
if(question=="player1"){
question="player2"
answer="player1"
document.getElementById("playerquestion").innerHTML="question turn :"+player2
document.getElementById("playeranswer").innerHTML="answer turn :"+player1

}
else
{
    question="player1"
    answer="player2"
    document.getElementById("playerquestion").innerHTML="question turn :"+player1
    document.getElementById("playeranswer").innerHTML="answer turn :"+player2
}
}
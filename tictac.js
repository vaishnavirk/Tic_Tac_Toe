var cell=document.getElementsByTagName('td')

var start = document.querySelector('#b');
// enter player names one chooses X, other chooses O
// two players names
var name1 = prompt("enter the name of player1");
var name2 = prompt("enter the name of player2");

var maxpoint = prompt("what is your game point?");
alert("Player who gets "+maxpoint+" first will be the winner");
// assigning names in header h3
$('#p1').text("X is - "+name1);
$('#p2').text("O is - "+name2);

// x is assigned as 1 and O is assigned as 0
var playerx=0;
var playery=0;
// restart code
start.addEventListener("click",function(){
  for(var i=0; i<cell.length; i++)
  {
    cell[i].textContent='';
  }
    name1 = prompt("enter the name of player1");
    name1 = prompt("enter the name of player1");
    maxpoint = prompt("what is your game point?");
    alert("Player who gets "+maxpoint+" first will be the winner");
    $('#p1').text("X is - "+name1);
    $('#p2').text("O is - "+name2);
});
//
for(var i=0; i<cell.length; i++)
{
  cell[i].addEventListener("click",function(){
    console.log("clicked is: "+i);
  });
}
var turn =1;
for(var i=0; i<cell.length; i++)
{
  cell[i].addEventListener("click",function(){
     if(turn===1 && this.textContent==='')
     {
       this.textContent='X';
       turn=0;
     }
     else if(turn==0 && this.textContent==='')
     {
       this.textContent='O';
       turn=1;
     }
     else{
       alert("game over, restart to play again");
     }


     if((cell[0].textContent==='O' && cell[1].textContent==='O' && cell[2].textContent==='O')|| (cell[0].textContent==='O' && cell[3].textContent==='O' && cell[6].textContent==='O') || (cell[2].textContent==='O' && cell[5].textContent==='O' && cell[8].textContent==='O') || (cell[6].textContent==='O' && cell[7].textContent==='O' && cell[8].textContent==='O')|| (cell[2].textContent==='O' && cell[4].textContent==='O' && cell[7].textContent==='O')|| (cell[8].textContent==='O' && cell[0].textContent==='O' && cell[4].textContent==='O') )
     {
        playery++;
        $('#two').text(name2 +" is O: " + playery);
        alert(name2 + " is the winner!!, please click restart to start a new game ");

     }
     if((cell[0].textContent==='X' && cell[1].textContent==='X' && cell[2].textContent==='X')|| (cell[0].textContent==='X' && cell[3].textContent==='X' && cell[6].textContent==='X') || (cell[2].textContent==='X' && cell[5].textContent==='X' && cell[8].textContent==='X') || (cell[6].textContent==='X' && cell[7].textContent==='X' && cell[8].textContent==='X')|| (cell[2].textContent==='X' && cell[4].textContent==='X' && cell[7].textContent==='X')|| (cell[8].textContent==='X' && cell[0].textContent==='X' && cell[4].textContent==='X') )
     {
        playerx++;
        $('#one').text(name1 +" is X: " + playerx);
        console.log("playerx is"+playerx);
        alert(name1 + " is the winner!!, please click restart to start a new game");
      }
      if(playerx===maxpoint)
      {
        alert(playerx+" is the winner!!");

      }
      if(playery===maxpoint)
      {
        alert(playery +" is the winner!!");
      }
 });
}

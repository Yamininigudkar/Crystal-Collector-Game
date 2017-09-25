

$(document).ready(function()
{

//Variable declaration//0
//Setting computer choice to a random number between 19-120
 var computerChoice = Math.floor(Math.random() * 120) +19;
  //Setting cystal value to a random number between 1-12
 var buttonValue1 = Math.floor(Math.random() * 12) +1;
 var buttonValue2 = Math.floor(Math.random() * 12) +1;
 var buttonValue3 = Math.floor(Math.random() * 12) +1;
 var buttonValue4 = Math.floor(Math.random() * 12) +1;
 var totalPoints = 0;
 var win=0;
 var loss=0;
 
console.log(computerChoice);

$("#computer-pick").html(computerChoice);

//Adding eventhandlers to the buttons

$("#button-1").on("click", function() 
{
    var res=0;
	
    $("#button-1").val(buttonValue1);
    totalPoints=totalPoints+buttonValue1
    console.log(buttonValue1)
    console.log("totalPoints" + totalPoints)
    $("#totalPoints").html(totalPoints);
    res = checkResult();
    if (res==0)
     {

        reInitialise()

    }

    else if(res==1)
        {
            reInitialise();
        }

});

$("#button-2").on("click", function() 
{
	var res=0;
	totalPoints= totalPoints+buttonValue2;
    $("#button-2").val(buttonValue2);
    console.log(buttonValue2)
    console.log("totalPoints" + totalPoints)
    $("#totalPoints").html(totalPoints);
    res = checkResult();

if (res==0)
     {

        reInitialise()

    }
    
    else if(res==1)
    {
        reInitialise();
    }

});

$("#button-3").on("click", function() 
{
	var res=0;
	totalPoints = totalPoints + buttonValue3;
    $("#button-3").val(buttonValue3);
    console.log(buttonValue3)
    console.log("totalPoints" + totalPoints)
    $("#totalPoints").html(totalPoints);
    res = checkResult();

    if (res==0)
    {

        reInitialise();

    }
    
    else if(res==1)
    {
        reInitialise();
    }
        

});

$("#button-4").on("click", function() 
{
	var res=0;
	totalPoints = totalPoints + buttonValue4
    $("#button-4").val(buttonValue4);
    console.log(buttonValue4)
    console.log("totalPoints" + totalPoints)
    $("#totalPoints").html(totalPoints);
    res = checkResult();

    if (res==0)
     {

        reInitialise()

    }
    
    else if(res==1)
    {
        reInitialise();
    }


});


 

//Conditional statement to decide win or lose

function checkResult()
{
    var result =0;
    if(totalPoints==computerChoice)
    {

        win=win+1;
         $("#wins").html(win);
         console.log("wins"+ win)
         alert("You Won !!!!!!")
         result = 1;
         

    }
    else if (totalPoints>computerChoice)

    {
       
        loss=loss+1;
         $("#losses").html(loss);
         console.log("loss" + loss)
         alert("You lose!! Try Again")
         //return result;
    }
    else
    {
        result=2;
        //return result;
    }

    return result;
}

//reInitializing the values when you win or lose
function reInitialise()
{
     computerChoice = Math.floor(Math.random() * 120) +19;
  //Setting cystal value to a random number between 1-12
     buttonValue1 = Math.floor(Math.random() * 12) +1;
     buttonValue2 = Math.floor(Math.random() * 12) +1;
     buttonValue3 = Math.floor(Math.random() * 12) +1;
     buttonValue4 = Math.floor(Math.random() * 12) +1;
     totalPoints = 0;
     $("#computer-pick").html(computerChoice);
     $("#totalPoints").html(totalPoints);    
}

});




 

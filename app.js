//task no 1
//Alerts
// qnustion no 1. Write a script to greet your website visitor using JS alert box.

//qustion no 2. Write a script to display following message on your web page:
alert("Erorr! Please Enter a valid password");
//question no 3. Write a script to display following message on your web page:
alert("Welcome To JS Land..\n Happy Coding!");

////Question_5
alert("Hello... I can run JS through my web browser's console")
////Question_4
alert("Welcome to js Land...")
alert("Happy Coding!")

// // // // // //CHAPTER 2
//QUESTION 1
var username;
//QUESTION 2
var myname = "Noor Fatima";
//QUESTION_3
var message;
var message ="Hello World";
alert("message")
//QUESTION_6
var email="email@email.com"
alert("my email address is "+email);
//QUESTION_4
var std=["Jhone Doe","15 year old","Cerfied mobile Application and development"]
alert(std[0])
alert(std[1])
alert(std[2])
UESTION_5
var x="pizza";
for(var i=5; i>0; i--)
{
    for(var j=0; j<i;j++)
    {
        document.write(x[j])
    }
    document.write("<br>")  
}
//QUESTION_9
alert("                   ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
//QUESTION_8
document.write("Yah! I can write HTML content through JavaScript")
//QUESTION_7
var book="A smarter way to learn JavaScript"
alert("I am trying to learn from the Book "+book);

// // //CHAPTER 3
//QUESTION_3
var birthyear=prompt("Enter your birth year")
document.write("My birth year is "+ birthyear +"<br>"+"Data type of my declared variable is number")
//QUESTION_1
var age=15
alert("I am "+age+" year old")
//QUESTION_4
var name=prompt("Enter your name")
var product=prompt("Enter your product")
var quantity=prompt("Enter your Quantity")
document.write(name+" ordered "+quantity+" "+product+" on XYZ online shopping store")
//CHAPTER 4
//QUESTION_2
var b!,n1,ali,bA,U_a //legal
var !b,1n,a3s,#,%li; //illegal
 //QUESTION_1
 var var1=1;
 var var2=2;
 var var3=3;
 alert(var1+var2+var3)
 //QUESTION_3
 document.write("<h1> Rules for naming JS variables </h1>")    
 document.write("Variable names can only contain $ and _. for exaxmple: $my_1stVariable")
 document.write("<br> Variables must begin with a letter, $ or_. For example $name, _name or name <br>Variable names are case sensitive<br>Variable names should not be JS keyword")
//CHAPTER 5
//QUESTION_2
var n=+prompt("enter 1st number")
var c=prompt("choose any operator from - + * %")
var u=+prompt("enter 2st number")
if(c==="+")
{
document.write("Sum of "+n+" and "+u+" is  "+(n+u))
}
else if(c==="-")
{
    document.write("Subtraction of "+n+" and "+u+" is  "+(n-u))
    }
else if(c==="*")
{
    document.write("Multiplication of "+n+" and "+u+" is  "+(n*u))
}
else if(c==="%")
{
    document.write("Mod of "+n+" and "+u+" is  "+(n%u))
     }
     //QUESTION_1
var l=+prompt("enter 1st number")
var n=+prompt("enter 2st number")
var u=l+n;
document.write("Sum of "+l+" and "+n+" is  "+u)

//QUESTION_4
var n=+prompt("Enter a number to display a table")
for(var u=1;u<=10;u++)
{
    document.write(n+" x "+u+" = "+n*u+"<br>")
}

//QUESTION_3
var n=prompt("cost of ont movie ticket is 600pkr","how many tickets do you want")
 var c=n*600;
 document.write("total cost to buy "+(+n)+" tickets to a movie is "+c+" PKR")



//CHAPTER 9-11 

//QUESTION_2
var gender=prompt("Enter Your Gender")
gender=gender.toLowerCase();
if(gender==="male")
{
    alert("Good Morning Sir")
}
else if(gender==="female")
{
    alert("Good Morning Ma'am")
}
else
{
    alert("Warning! try again")
}

//QUESTION_4
var fuel=prompt("Enter Your Remaining fuel in liter")
if(fuel<0.25)
{alert("Please refill the fuel in your car")}
else{alert("fuel is enough for car")}

//QUESTION_6
var history=+prompt("Enter Your Marks in history")
var physiyology=+prompt("Enter Your Marks in physiyology")
var phsycology=+prompt("Enter Your Marks in phsycology")
var marks=history+physiyology+phsycology;
var per=(marks/300) *100;
document.write("Total marks: 300"+"<br>Marks obtained: "+marks+" <br>Percentage "+per)
if(per>=80)
{ document.write("<br>Grade: A-one <br>Remarks: Excellent")}
else if(per>=70)
{ document.write("<br>Grade: A <br>Remarks: Good")}
else if(per>=60)
{ document.write("<br>Grade: B <br>Remarks: You need to improve")}
else if(per<60)
{ document.write("<br>Grade: Fail <br>Remarks: Sorry")}
//QUESTION_7
var hidden=prompt("Enter a number from 1-10");
if(hidden==4)
{alert("Bingo! Correct answer")}
 else if(hidden==3 ||hidden==5)
{alert("Close enough to the correct answer");}
else
{     alert("Please Try again! you guess a wrong number ")
    }
 

    //QUESTION_5
  var n = 4;
  if (++n === 5){
  alert("given condition for variable a is true");
  }
  User Input & Conditional Statement | JAVASCRIPT
  Page 2 of 4
  B. var b = 82;
   if (++b === 83){
  alert("given condition for variable b is true");
  }
  c. var c = 12;
  if (c++ === 13){
  alert("condition 1 is true");
  }
  if (c === 13){
  alert("condition 2 is true");
  }
  if (++c < 14){
  alert("condition 3 is true");
  }
  if(c === 14){
  alert("condition 4 is true");
  }
  d. var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
  alert("The cost equals");
  }
  e. if (true){
  alert("True");
  }
  if (false){
  alert("False");
  }
  User Input & Conditional Statement | JAVASCRIPT
  Page 3 of 4
  f. if("car" < "cat"){
  alert("car is smaller than cat");
  }
   //QUESTION_3
 var hill=prompt("Please enter the color of road traffic signals")
 hill=hill.toLowerCase();
 if(hill==="red")
 {alert("Must Stop")}
 else if(hill==="yellow")
 {alert("Ready to Move")}
 else
 {alert("Move now")}
//QUESTION_1
var place=prompt("Enter the name of city")
if(place==="karachi")
{
    alert("Welcome to city of lights")
}
//CHAPTER 12-13
//QUESTION_3
var n=prompt("Enter 1ST integer");
if(n<0)
{alert(n+" is negative")}
else if(n>0)
{alert(n+" is positive")}
else
{alert("zero")}

//QUESTION_5
var greeting;
var hour = 13;
if (hour < 18) 
    {alert("Good DAY")}
else
{alert("Good evening")}

//QUESTION_3
1var n=prompt("Enter an alphabet i will tell you it is vowel or consonant ")
1if(n=="n"||n=="e"||n=="i"||n=="o"||n=="u")
1{alert("vowel true")}
1else
1{alert("consonant false")}
/ //QUESTION_2
var n=prompt("Enter two integer and i will display which number is larger","Eneter 1st number");
var u=prompt("Enter 2nd integer");
if(n<u)
{alert(u+" is largest")}
else{alert(n+" is largest")}

//QUESTION_4
 var n=prompt("Enter A PASSWORD ","Please enter a password")
 var u=prompt("Enter again")
 if(n==u){alert("Correct! The password you entered matches the original password")}
 else{alert("Incorrect password")}
//CHAPTER 14-15
//QUESTION_1
var student=[];
//QUESTION_2
var names=["noor","usama","fatima"]
//QUESTION_3
var a=["SSC", "HSC", "BCS","BS", "BCOM", "MS","M. Phil", "PhD"]
document.write("Qualification <br><br>")
 for (var i=0;i<=7;i++)
 {document.write(+i+" "+a[i]+"<br>")}
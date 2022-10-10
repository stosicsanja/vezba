// CONDITIONS HOMEWORK

//1

x = 3
y = -7
z = 2

if ((x*y*z)>0) {
    result = "The sign is +"
    } else {
        result = "The sign is -"
    }

    console.log(result)
//2

num1 = -5
num2 = -2
num3 = -6
num4 = 0
num5 = -1

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    largest = num2;
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    largest = num3;
}
else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    largest = num4;
}

else {
    largest = num5;
}

console.log("The largest number is " + largest);


//3// Nejasan rezultat

 var a = 0
var b = -1
var c = 4


    if(a>b && b>c ) {
      result = a,b,c
    } else if (b>a  && a>c) {
      result = "b, a, c"
    } else if (c>a && a>b) {
        result = "c, a, b"
    } else if(a>c && c>b) {
        result = a, c, b
    } else if(b>c && c>a) {
        result = "b, c, a"
    } else {
        result = "c, b , a"
    }
  

console.log(result);

//4

a=7

if ( typeof a === "number" && a/2) {
    result = 10/2
} else {
    result = X
}
console.log(result)


b=7
if ( typeof b === "number" && b/2) {
    result2 = "X"
}
console.log(result2)


//5
var c = 3
var d = 6

if (c>d)
 {result = "c>d"}
else(d>c)
{result = "d>c"}

console.log(result)


//6

var cel = 60
var fah;

if ( fah=(9*cel/5)+32 ) {
    console.log( cel + "C"+  " is " + fah + "F")
}



//7  Nejasan rezutat 102

var numBer = 32;
var thisNumber = 13;

if (numBer>thisNumber) {
    result = 2*(numBer - thisNumber)
}
else if(numBer<thisNumber)
{
    result = (thisNumber-numBer)
}
console.log(result)


//8 

var numberOne = 8
var numberTwo = 8

if ( numberOne==numberTwo ) {
result = 3*(numberOne+numberTwo)   }
 else if (numberOne!==numberTwo)
{
    result = "Not equal"  }
console.log(result)


//9


number1 = 6
number2 = 50

if ( (number1+number2) ==50 || number1==50 || number2==50) {
    result=true
} else 
{result=false}

console.log(result)


//10 


numberOne1 = 34;

if (numberOne1<20) {
    result = numberOne1 +  "is less than 20"
} else if (20<numberOne1 && numberOne1<100) {
    result = numberOne1 +  " is within 20 and 100"
} else (100<numberOne1 && numberOne1<400)
{
    result =  numberOne1  +  " is within 100 and 400"
}


console.log(result)

let br = 405;


if (br < 20) {
  result = "-";
} 
else if (br >= 20 && br <= 100) {
  result = "20 <=> 100";
} 
else if (br > 100 && br <= 400) { 
  result = "100 <=> 400";
}
else { result = br + "  is not belongs that range";}


console.log(result);

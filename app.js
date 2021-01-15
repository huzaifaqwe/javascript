//changing case Q.1

//  var str ="pak army"
//  var uppercase =str.toUpperCase();
//  alert(uppercase)

//changing case queueMicrotask.2

// var str ="ali khan"
// var str2 = str.split(' ') ;
//  var str3;
//  var str4 = []
//  for(var i = 0 ; i <  str2.length ; i++){
//       str3 = str2[i].slice(0,1).toUpperCase() +str2[i].slice(1).toLowerCase()
//       str4.push(str3)     
//  }
//  alert(str4.join(' '))

// Strings: measuring length and extracting parts Q.1

// var mobile =prompt("enter your mobile name");
// var mobilelength =mobile.length;
// document.write("my favourite mobile is :" +" " + mobile + "<br/>")
// document.wrie("length :" +" " + mobilelength)

 // Strings: measuring length and extracting parts Q.2

//  var input1 = prompt('write something')

//  alert(input1.charAt(input1.length-1))

// Strings: finding segments.Q.1

// var country ="pakistani"
// var letter =country.lastIndexOf("n");
// document.write(letter)

// Strings: finding segments.Q.2

// var username = prompt('enter username')
// for(var i = 0; i<username.length;i++ ){
//         if(username[i] === '@' )
//                alert('enter valid username')
// }

// Strings: finding segments.question 2


// var paragraph = prompt('enter paragraph')
// var paragraph1 = paragraph.toLowerCase()
// var a = 0
// // console.log(paragraph.length)
// for(var i = 0 ; i < paragraph1.length -1 ; i++){
//      if(paragraph1.slice(i,i+3) === 'the'){
//           a = a + 1
//      }
// }
// alert('the is present ' + a + 'times')

// Strings: finding a character at a location. Q.1

// var country ="pakistani"
// var index =country.charAt(3);
// document.write(index)


// Strings: replacing characters Q.1

// var city ="hyderabad"
// var replace =city.replace("hyder","islam")
// document.write(replace)

//  Strings: finding a character at a location. Q.2

// var message ="Ali and Sami are best friends. They play cricket and fotball togather"
// var change =message.replace(/and/g,"&")
// document.write(change)

// Rounding numbers. question 1 part A


//  var num =  9.4557778


                                // Rounding numbers. question 1 part B

//  document.write(Math.round(num)) 



                                // Rounding numbers. question 1 part C


//  document.write(Math.floor(num))

                                // Rounding numbers. question 1 part D

//  document.write(Math.ceil(num))

 // Rounding numbers. question 2 part A


//  var num = "-2.678"




                                // Rounding numbers. question 2 part B


//   document.write(Math.round(num))



                                // Rounding numbers. question 2 part C

//  document.write(Math.floor(num))





                                // Rounding numbers. question 2 part D

//  document.write(Math.ceil(num))


 // Generating random numbers Q.1


//  var a= random;
//  var random =Math.ceil(Math.random()*6);
//  document.write(random)



                                // Generating random numbers Q.2

// var headuser=prompt("Enter head username")
// var tailuser=prompt("Enter tail username")

// var toss=Math.random()*2;
// var floor=Math.floor(toss);
//  if(floor===1){
//      alert("head"+ " " + headuser + " " + "Win the toss")
//  }else{
//     alert("Tail"+ " " + tailuser +" " + "Win the toss")
// }






// Converting strings to integers and decimals


// var weight = prompt("What is the net weight in ounces?");
// var pounds = weight/16;
// var response = "That weight in pounds is " + pounds + ".";
// document.write(response)



 // Converting strings to numbers, numbers to strings Q.1



// var num = 472;
// document.write("Type of value is" + " " +(472)+" " + typeof(472) + "<br/>");
// var b=num.toString();
// document.write("Type of value is" + " " +(472)  + " " + typeof(b))



// Converting strings to numbers, numbers to strings Q.2

// var numbers=35.36
// var change =numbers.toString()
// alert(change)
// var spli = change.split('')
// for(var i=0;i<spli.length-1;i++){
//     if(spli[i]==='.'){
//         spli.splice(i,1)
//     }
// }
// var joi = spli.join('')
// document.write(Number(joi))

// Controlling the length of decimals


// var total =66.66666
// var control =total.toFixed(2);
// document.write(control)

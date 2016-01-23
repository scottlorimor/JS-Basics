//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
  	name = name.toLowerCase();
  	if (name === "tyler") {
  		return true;
  	}
  	return false;
  }

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
  	userName = prompt("What is your name?");
  	return userName;
  }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function welcome() {
  	user = getName();
  	alert("Welcome, "+user);
  }

var welcome = function(getName) {
  	user = getName;
  	alert("Welcome, "+user);
  }

  // which is more semantically correct for javaScript? 1 or 2...




//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

// params are the placeholders for the arguments to be passed in

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // false; 
  // null;
  // 0;
  // NaN;
  // '';
  // undefined;

  // boolean; 


//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var myName = function () {
  	return "Scott";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  newMyName = myName();

//Now alert the result of invoking newMyName
  alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn() {
  var name = function() {
    return "Scott";
}
    return name();
}

outerFn();

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  innerFn = outerFn();


//Now invoke innerFn.
	innerFn;


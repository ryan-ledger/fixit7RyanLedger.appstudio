//2a. Creates a variable with the following string
var quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'
//2b. Renames the variable and turns the previous string to all Upper Case
var upperCaseString = quoteString.toUpperCase();
alert('Upper case string is: ' + upperCaseString);
//2c. Creating a new variable to add to the end of the previous variable
var authorString = ' - Henry Ford'
//2d. Adding the author string to the end of the quote string using a concat
var completeString = quoteString.concat(authorString);
alert('Added - Henry Ford to end of quote: ' + completeString);
//2e. Creating a second quote
var secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
//2f. Renames the variable and turns the string to all lower case
var lowerCaseString = secondQuote.toLowerCase();
alert('Lower case string is: ' + lowerCaseString);
//2g. Finds the character at the 3rd position of secondQuote
var secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'
alert('Character in quote at location 3: ' + secondQuote.charAt(3));
//2h. Create a new variable and remove a part of secondQuote and put it in this new variable
var findString = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work.", "");
alert(findString); 

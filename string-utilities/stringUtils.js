function stringValidation(str){

    if (typeof str !== "string" || str.trim() === "" || !isNaN(Number(str))) {

        throw new Error("No String provided.");
    }
}

function capitalize(str){

    stringValidation(str);
    return str[0].toUpperCase() + str.slice(1);
}

function reverse(str){

    stringValidation(str);

    if (str.length === 1) {
       return str;
   }
   // Recursive Case: Start with string's last character then continually add the next character to reversval
   return str[str.length - 1] + reverse(str.slice(0, -1));
    
}

function contains(str, substr){

    stringValidation(str);
    stringValidation(substr);


    return str.toUpperCase().includes(substr.toUpperCase());

}


module.exports = {capitalize, reverse, contains};
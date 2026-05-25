const stringUtils = require('./stringUtils');

function testRunner(testCase){

    try{
        testCase();
    }catch(err){
        console.log(err.message);
    }finally{
        console.log(`Test Case completed.`);
    }
}

testRunner(() => console.log(stringUtils.capitalize("quimeka")));
testRunner(() => console.log(stringUtils.capitalize("Queen")));
testRunner(() => console.log(stringUtils.capitalize("")));
testRunner(() => console.log(stringUtils.capitalize(8)));
testRunner(() => console.log(stringUtils.capitalize(-8)));
testRunner(() => console.log(stringUtils.capitalize(undefined)));

testRunner(() => console.log(stringUtils.reverse("quimeka")));
testRunner(() => console.log(stringUtils.reverse("Queen")));
testRunner(() => console.log(stringUtils.reverse("")));
testRunner(() => console.log(stringUtils.reverse(8)));
testRunner(() => console.log(stringUtils.reverse(-8)));
testRunner(() => console.log(stringUtils.reverse(undefined)));

testRunner(() => console.log(stringUtils.contains("Hello", "hell")));
testRunner(() => console.log(stringUtils.contains("Bye", "By")));
testRunner(() => console.log(stringUtils.contains("Bye", "by")));
testRunner(() => console.log(stringUtils.contains("Apple", "Pear")));
testRunner(() => console.log(stringUtils.contains("", "Pear")));
testRunner(() => console.log(stringUtils.contains("Apple", "A")));
testRunner(() => console.log(stringUtils.contains("Apple", "")));
testRunner(() => console.log(stringUtils.contains(1, "Apple")));




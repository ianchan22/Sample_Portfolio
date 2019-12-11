function fizzbuzz() {
    const inputNum = prompt('Enter a Number between 1 & 100')

    if (isNaN(inputNum)) {
        // alert('this is a not a number')
        // return "Not A Number" }
           alert("Not A Number" + "\n" 
           + "inputNum = " + inputNum + " is no a number" + "\n") }

    else {
        if(inputNum == 0) {
            alert("Is Zero" + "\n" 
            + "inputNum = " + inputNum + " is Zero" + "\n") }
        else {
            const calNum3 = inputNum % 3
            const calNum5 = inputNum % 5

            if (calNum3 == 0 && calNum5 == 0) {
                // return "FizzBuzz" }
                window.alert("FizzBuzz" + "\n"
                + "inputNum = " + inputNum + "\n"
                + "calNum3  = " + calNum3 + " if %3 = Fizz" + "\n"
                + "calNum5  = " + calNum5 + " if %5 = Buzz" + "\n"
                + "if both %3 && %5 = FizzBuzz") }
            else if (calNum3 == 0) {
                    // return "Fizz"}
                    alert("Fizz" + "\n"
                    + "inputNum = " + inputNum + "\n"
                    + "calNum3  = " + calNum3 + " if %3 = Fizz" + "\n"
                    + "calNum5  = " + calNum5 + " if %5 = Buzz" + "\n"
                    + "if both %3 && %5 = FizzBuzz") }
                else if (calNum5 == 0) {
                        // return "Buzz" }
                        alert("Buzz" + "\n"
                        + "inputNum = " + inputNum + "\n"
                        + "calNum3  = " + calNum3 + " if %3 = Fizz" + "\n"
                        + "calNum5  = " + calNum5 + " if %5 = Buzz" + "\n"
                        + "if both %3 && %5 = FizzBuzz") }
                    else {
                        // return inputNum }}}
                        alert(inputNum + "\n"
                        + "inputNum = " + inputNum + "\n"
                        + "calNum3  = " + calNum3 + " if %3 = Fizz" + "\n"
                        + "calNum5  = " + calNum5 + " if %5 = Buzz" + "\n"
                        + "if both %3 && %5 = FizzBuzz") }}}}

var text = "";
var i = 0;
while (i < 5) {
    text += "The number is " + i;
    i++;
    fizzbuzz()
    }



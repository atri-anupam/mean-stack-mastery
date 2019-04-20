//For writing in js.do
//document.write(", ");

//Constants and Variables

//changing a variable
function function1 () {
    var a = 'Hi I am a variable';
    a = 'Changed';
    document.write(a);
}

//changing a constant
function function2 () {
    const a ="I am a constant";
    a = 'Changed constant';
    document.write(a);
}

var globalVar = 'I am global variable';
const globalConst = 'I am global constant';

function function3 () {
    var funcVar = globalVar
    const funcConst = globalConst;

    funcVar = 'Hello';
    funcConst = 'World';

    document.write(funcVar);
    document.write(funcConst);

}

<input type="button" onClick="function1()" value="execute function 1" />
<input type="button" onClick="function2()" value="execute function 2" />
<input type="button" onClick="function3()" value="execute function 3" />

//Let vs var

function function4() {
    var var1 = 'Temp 1 in var';
    let temp1 = 'Temp 1 in let';
    {
        let temp1 = 'Temp1 in inner scope';
        console.log('Themp1 in the inner scope'+ temp1);
        consolelog('var1 in the inner scope is'+ var1);

    }
    console.log('Temp1 in the outer scope'+ temp1);
    console.log('var1 in the outer scope is'+ var1);
}

<input type="button" onClick="function4()" value="execute function 4" />

//Arrow functions

//in ES5
var multipy = function(x, y) {
    return x*y;
};

//in ES6 using arrow functions
const multiply = (x,y) => {document.write (x*y)};

<input type="button" onClick="multiply(2,6)" value="execute multiply" />


//Functions with default parameter value
function multiply(x, y=2) {
    return x*y;
}
multiply(6); // this will return 12

<input type="button" onClick="multiply(6)" value="execute multiply" />

//rest function parameters
function countArgs(x, y, ...args) {
    document.write(' x is'+ x);
    document.write('y is'+ y);
    document.write('The remaining argumets are'+ args.length);
}

<input type="button" onClick="countArgs(1,2)" value="execute multiply" />
<input type="button" onClick="countArgs(1,2,3,4,5)" value="execute multiply" />

//String templating

function testInterpolation() {
    var string = 'Sam';
    var tempalteString = `Hello ${string}`;
    document.write(tempalteString);
}

<input type="button" onClick="testInterpolation()" value="execute multiply" />

// Class declaration
class car {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        document.write(this.color);
    }
    setColor(color) {
        this.color = color;
    }
}

var c1 = new car(red);
var c2 = new car(blue);

c1.getColor();
c2.getColor();
c1.setColor('Purple');
c1.getColor();
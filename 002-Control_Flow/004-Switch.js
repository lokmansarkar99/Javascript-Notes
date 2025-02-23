// switch statement in JavaScript
// Used when you have multiple possible conditions for a variable

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Example with strings
let fruit = "apple";

switch (fruit.toLowerCase()) {
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Example without break (fall-through behavior)
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
    case "C":
        console.log("Good job!");
        break;
    case "D":
        console.log("You passed.");
        break;
    case "F":
        console.log("Better luck next time.");
        break;
    default:
        console.log("Invalid grade.");
}

// If else statement
let hour = 3;
if (hour == 0) {
    console.log('closed');
} else if (hour > 5) {
    console.log('opened');
} else {
    console.log('preparing');
}

hour = 2;

switch (hour) {
    case 0:
    case 1:
    case 2:
        console.log('closed');
        break;
    case 5:
    case 6:
    case 7:
        console.log('opened');
        break;
    default:
        console.log('preparing');
}
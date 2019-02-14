// VARIABLES
const car = {
    make: 'Audi',
    model: 'R8',
    color: 'green',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.milage + 8;
        alert(`New Mileage: ${this.mileage}`);
    },
}

// FUNCTIONS
// Logs all of our car's current stats to the console
/*
function reWriteStats(){

}
*/

// MAIN PROCESS
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = (event) => {
    // Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === "d") {
        car.driveToWork();
        reWriteStats();
    }

}
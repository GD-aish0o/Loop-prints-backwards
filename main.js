// Write a for loop to print the elements of an array in reverse.
var FamousCitiesPK = ["Karachi", "Islambad", "quetta", "Lahore", "Murree", "Faisalabad", "Rawalpindi", "Multan", "Swat", "Peshawer"];
// For loop:
// the decrement sign forces the loop to go backwards.
// & i >= 0 runs the loop until it reach the index 0
for (var i = FamousCitiesPK.length - 1; i >= 0; i--) {
    console.log(FamousCitiesPK[i]);
}

//Counter Logic
var displayCount = document.querySelector(".showValue");
var plus = document.querySelector(".more");
var minus = document.querySelector(".less");

let countClick = 0; //Counter starting point
showCount(); //call the fx to work
plus.addEventListener("click", () => {
    countClick++; //add one number to countClick when the trigger is on w button click
    showCount(); //update the display
})
minus.addEventListener("click", () => {
    countClick++; //add one number to countClick when the trigger is on w button click
    showCount(); //update the display
})
function showCount() {
    displayCount.innerHTML = countClick; //show the logic value in the HTML
}

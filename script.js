//your JS code here. If required.
// Select the line element
const line = document.getElementById('line');

// Initialize rotation angle
let angle = 0;

// Function to update the rotation angle and apply the transformation
function rotateLine() {
    angle += 2; // Increment angle by 2 degrees
    if (angle >= 360) {
        angle = 0; // Reset the angle to prevent overflow
    }
    
    // Apply the rotation using CSS transform property
    line.style.transform = `rotate(${angle}deg)`;
}

// Set interval to continuously rotate the line every 20 milliseconds
setInterval(rotateLine, 20);

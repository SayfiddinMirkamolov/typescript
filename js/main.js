// Function to calculate the area of different shapes
function calculateArea(shape) {
    var dimensions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dimensions[_i - 1] = arguments[_i];
    }
    switch (shape) {
        case 'square':
            if (dimensions.length === 1) {
                var side = dimensions[0];
                return side * side;
            }
            break;
        case 'rectangle':
            if (dimensions.length === 2) {
                var length_1 = dimensions[0], width = dimensions[1];
                return length_1 * width;
            }
            break;
        case 'circle':
            if (dimensions.length === 1) {
                var radius = dimensions[0];
                return Math.PI * radius * radius;
            }
            break;
        default:
            return null;
    }
    return null; // Return null if input is invalid
}
// Example usage:
console.log(calculateArea('square', 5)); // 25
console.log(calculateArea('rectangle', 10, 5)); // 50
console.log(calculateArea('circle', 7)); // 153.93804002589985

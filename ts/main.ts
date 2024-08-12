
type Shape = 'square' | 'rectangle' | 'circle';

function calculateArea(shape: Shape, ...dimensions: number[]): number | null {
    switch (shape) {
        case 'square':
            if (dimensions.length === 1) {
                const [side] = dimensions;
                return side * side;
            }
            break;
        case 'rectangle':
            if (dimensions.length === 2) {
                const [length, width] = dimensions;
                return length * width;
            }
            break;
        case 'circle':
            if (dimensions.length === 1) {
                const [radius] = dimensions;
                return Math.PI * radius * radius;
            }
            break;
        default:
            return null;
    }
    return null; 
}


console.log(calculateArea('square', 5)); // 25
console.log(calculateArea('rectangle', 10, 5)); // 50
console.log(calculateArea('circle', 7)); // 153.93804002589985

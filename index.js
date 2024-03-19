const { createCanvas } = require('canvas');

/**
 * Generates a placeholder image as a buffer.
 * @param {number} width The width of the image.
 * @param {number} height The height of the image.
 * @param {string} color The background color of the image in hexadecimal format.
 * @returns {Buffer} The generated image as a buffer.
 */
function generatePlaceholderImage(width, height, color = 'cccccc') {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Set background color
    ctx.fillStyle = `#${color}`;
    ctx.fillRect(0, 0, width, height);

    // Set text
    ctx.fillStyle = '#000000'; // Text color
    ctx.font = 'bold 20px Arial';
    const text = `${width} x ${height}`;
    const textWidth = ctx.measureText(text).width;
    const textHeight = 20; // Approximate height of the font
    ctx.fillText(text, (width - textWidth) / 2, (height + textHeight) / 2); // Center the text

    return canvas.toBuffer();
}

module.exports = generatePlaceholderImage;
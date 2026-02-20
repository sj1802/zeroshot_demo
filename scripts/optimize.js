const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
    try {
        console.log("Optimizing After.png...");
        await sharp('public/assets/After.png')
            .resize(1920) // max width 1920
            .webp({ quality: 80 })
            .toFile('public/assets/After_optimized.webp');
        console.log("Optimized After.png to After_optimized.webp");

        console.log("Optimizing Before.jpg...");
        await sharp('public/assets/Before.jpg')
            .resize(1920) // max width 1920
            .webp({ quality: 80 })
            .toFile('public/assets/Before_optimized.webp');
        console.log("Optimized Before.jpg to Before_optimized.webp");

    } catch (err) {
        console.error("Error optimizing images:", err);
    }
}

optimizeImages();

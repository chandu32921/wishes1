document.addEventListener("DOMContentLoaded", function () {
    // Add glitter effect to "Wishes"
    glitterText("wishes", "gold");

    // Generate and display 6 images with links
    generateImagesWithLinks("imageContainer", [
        "page1.html",
        "page2.html",
        "page3.html",
        "page4.html",
        "page4.html",
        "abhinaya.html",
        "jyo.html",
        "page5.html",
       // Updated to link to abhinaya.html
    ]);
});

// Function to add glitter effect to text
function glitterText(elementId, color) {
    const wishesText = document.getElementById(elementId);

    wishesText.innerHTML = wishesText.textContent
        .split('')
        .map(letter => `<span class="glitter-letter" style="color: ${color};">${letter}</span>`)
        .join('');
}

// Function to generate and display images with links
function generateImagesWithLinks(containerId, links) {
    const imageContainer = document.getElementById(containerId);

    for (let i = 1; i <= links.length; i++) {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-item');

        const link = document.createElement('a');
        link.href = links[i - 1];

        const img = document.createElement('img');
        img.src = `img${i}.jpg`; // Update with your image file names and extensions
        img.alt = `Image ${i}`;
        img.classList.add('image-content');

        link.appendChild(img);
        imgDiv.appendChild(link);
        imageContainer.appendChild(imgDiv);
    }
}

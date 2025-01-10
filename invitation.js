//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
} 
// Preload images
const images = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
];

const preloadedImages = [];
images.forEach((image) => {
    const img = new Image();
    img.src = image;
    preloadedImages.push(img);
});

// Cycling banner
let currentIndex = 0;
const bannerImage = document.getElementById('banner-image');

function cycleBanner() {
    currentIndex = (currentIndex + 1) % images.length;
    bannerImage.src = images[currentIndex];
}

setInterval(cycleBanner, 3000); // Change image every 3 seconds

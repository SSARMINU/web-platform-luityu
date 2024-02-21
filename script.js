// Get the header element
const header = document.querySelector('header');

// Add event listener for mouseover event
header.addEventListener('mouseover', function() {
    // Change background color to red when mouse hovers over header
    header.style.backgroundColor = 'red';
});

// Add event listener for mouseout event
header.addEventListener('mouseout', function() {
    // Change background color back to its original color when mouse moves out of header
    header.style.backgroundColor = '#333';
});

// Function to open extension.html in a new tab when the button is clicked
function handleButtonClick() {
    chrome.tabs.create({ url: 'extension.html' });
}

// Add event listener to button
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('viewTorButton').addEventListener('click', handleButtonClick);
});

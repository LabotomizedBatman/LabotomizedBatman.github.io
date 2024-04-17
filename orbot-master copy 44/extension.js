// Function to load Google in a new tab
function loadGoogle() {
    chrome.tabs.create({ url: 'https://www.google.com/' });
}

// Add event listener to button
document.getElementById('loadGoogleButton').addEventListener('click', loadGoogle);

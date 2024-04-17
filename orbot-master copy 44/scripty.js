document.addEventListener('DOMContentLoaded', function () {
    // Get the connect button element
    var connectButton = document.getElementById('connectButton');

    // Add click event listener
    connectButton.addEventListener('click', function () {
        // Perform connect to Tor functionality
        alert('Connecting to Tor...');
        // Example: You can use chrome.runtime.sendMessage() to communicate with your extension background script
        // chrome.runtime.sendMessage({ action: 'connectToTor' });
    });
});

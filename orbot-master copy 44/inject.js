// Function to replace the current page content with an iframe loading google.com
function replacePageContentWithGoogleIframe() {
    // Create an iframe element
    const iframe = document.createElement('iframe');
    // Set the source URL to google.com
    iframe.src = 'https://www.google.com';
    // Set the iframe to occupy the entire viewport
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    // Remove any existing content from the page
    document.body.innerHTML = '';
    // Append the iframe to the body
    document.body.appendChild(iframe);
}

// Listen for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', replacePageContentWithGoogleIframe);

const crypto = require('crypto');

// Function to generate a random nonce value
function generateNonce() {
  // Generate a random buffer
  const buffer = crypto.randomBytes(16);
  // Convert buffer to base64 string
  const nonce = buffer.toString('base64');
  return nonce;
}

// Generate nonce value
const nonce = generateNonce();
console.log(nonce);

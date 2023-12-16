const fs = require('fs');
const pdf = require('pdf-parse');

// Function to extract text from a PDF file
function extractTextFromPDF(pdfPath) {
  return new Promise((resolve, reject) => {
    try {
      const dataBuffer = fs.readFileSync(pdfPath);
      pdf(dataBuffer).then(data => {
        resolve(data.text);
      }).catch(err => {
        reject("Something went wrong: " + err);
      });
    } catch (err) {
      reject("Error reading the file: " + err);
    }
  });
}

module.exports.extractTextFromPDF = extractTextFromPDF;

const fs = require('fs');
const pdf = require('pdf-parse');
const utf8 =require('utf8')
const { getFormalLanguageCode } = require('./detectLang');

// Function to extract text from a PDF file
function extractTextFromPDF(pdfPath) {
  return new Promise((resolve, reject) => {
    try {
      const dataBuffer = fs.readFileSync(pdfPath);
     
      pdf(dataBuffer).then(data => {
        resolve(Buffer.from(data.text,'binary').toString('utf-8'));
      }).catch(err => {
        reject("Something went wrong: " + err);
      });
    } catch (err) {
      reject("Error reading the file: " + err);
    }
  });
}
// extractTextFromPDF('./testing/test-ar.pdf').then(data=>{
//   console.log(data)
// })
module.exports.extractTextFromPDF = extractTextFromPDF;

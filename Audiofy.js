const fs = require('fs');
const pdf = require('pdf-parse');
const english_words = require('english-words')
// Function to extract text from a PDF file
async function extractTextFromPDF(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
   
    return   data;
  }
  const pdfFilePath = './test-std.pdf';
//   const outputAudioFilePath = 'output/audio.mp3';
 // extractTextFromPDF(pdfFilePath).then(data=>console.log(data.text))

  
  //console.log(english_words.getWords(data))
const fs = require('fs');
const pdf = require('pdf-parse');
const gTtsApi = require('google-tts-api');

// // Function to extract text from a PDF file
// async function extractTextFromPDF(pdfPath) {
//   const dataBuffer = fs.readFileSync(pdfPath);
//   const data = await pdf(dataBuffer);

//   return data.text;
// }

// Function to convert text to speech using Google Text-to-Speech API
async function convertTextToSpeech(text, outputAudioPath) {
  const audioBuffer = await gTtsApi.textToSpeech(text, {
    lang: 'en',
    slow: false,
    host: 'https://translate.google.com',
  });

  fs.writeFileSync(outputAudioPath, audioBuffer);
}

// Example usage
const pdfFilePath = 'test-std.pdf';
const outputAudioFilePath = 'output/audio.mp3';

// async function convertPdfToAudio() {
//   try {
//     const text = await extractTextFromPDF(pdfFilePath);
//     await convertTextToSpeech(text, outputAudioFilePath);
//     console.log('Conversion completed successfully!');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

convertPdfToAudio();

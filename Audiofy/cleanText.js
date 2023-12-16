// const { extractTextFromPDF } = require("./pdfToText");

function cleanEnglishText(text = '') {
  // Remove HTML tags and their content, including tag names
  const textWithoutHtml = text.replace(/<[^>]+>/g, '');

  // Remove non-alphabetic characters, except for spaces and newlines
  const cleanedText = textWithoutHtml.replace(/[^a-zA-Z\s\n]/g, '');

  // Remove consecutive spaces
  const trimmedText = cleanedText.replace(/\s{2,}/g, ' ');

  // Trim leading and trailing spaces
  const finalText = trimmedText.trim();

  return finalText;
}


module.exports ={
  cleanEnglishText
}

// extractTextFromPDF('../test-std.pdf').then(data=>{
  
//   console.log(data)
//   console.log( '---ouput -------');
//   console.log(cleanEnglishText(data))
// })

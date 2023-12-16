const readline = require("readline");
const { extractTextFromPDF } = require("./pdfToText");
const path = require("path");
const { textToSpeech } = require("./textToAudio");
const { cleanText } = require("./cleanText");
const { getFormalLanguageCode } = require("./detectLang");

const main = async () => {
    console.log(
      "Welcome to Audiofy, a tool that helps you convert PDF files into audio MP3 files"
    );
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    try {
      const pdfPath = await new Promise((resolve) => {
        rl.question(
          "Please enter the path to the targeted PDF file: ",
          (path) => {
            resolve(path);
          }
        );
      });
  
      // Now 'pdfPath' contains the user input
      console.log("You entered:", pdfPath);



      let slow = await new Promise((resolve) => {
        rl.question(
          "slow(y/n): ",
          (slow) => {
            resolve(slow);
          }
        );
      });
  
     
  

      const data = await extractTextFromPDF(path.join(__dirname, pdfPath));
  
      
      
        const result = await textToSpeech(
          cleanText(data),
           slow === "n" ? false : true,
           getFormalLanguageCode(data)
        );

        console.log(result)
      
    } finally {
      rl.close();
    }
  };
  
  main();
  

//   function askForOtherOptions() {
//     return new Promise((resolve) => {
//       const r2 = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });
  
//       let options = {};
  
//       const handleSlowAnswer = (slow) => {
//         options["slow"] = slow === "y" ? true : slow === "n" ? false : true;
//         r2.question("gender(m/f): ", handleGenderAnswer);
//       };
  
//       const handleGenderAnswer = (gender) => {
//         options["gender"] = gender === "f" ? "female" : gender === "m" ? "male" : "female";
//         r2.close();
//         resolve(options);
//       };
  
//       r2.question("slow(y/n): ", handleSlowAnswer);
//     });
//   }
  

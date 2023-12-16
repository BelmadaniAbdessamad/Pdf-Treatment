
const fs = require("fs");
const googleTTS = require("google-tts-api");
const path = require("path");


const textToSpeech = async (text, slow = false , folder = "output") => {
  if (text.length <= 200) {
    try {
      const base64Audio = await googleTTS.getAudioBase64(text, {
        lang: "en",
        slow: slow,
        host: "https://translate.google.com",
        timeout: 10000,
      });

      return saveAudioFile(base64Audio,folder);

    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const dataArr = await googleTTS .getAllAudioBase64(text, {
        lang: 'en',
        slow: slow,
        host: 'https://translate.google.com',
        timeout: 10000,
        splitPunct: ',.?',
      })

     return saveAudioFile(joinBase64Strings(dataArr),folder);
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

function saveAudioFile(buffer, folder) {
    // Ensure the folder exists
    const folderPath = path.join(__dirname, '..', folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  
    // Save the audio to a file
    const fileName = `audio${Date.now()}.mp3`;
    const filePath = path.join(folderPath, fileName);
    fs.writeFileSync(filePath, Buffer.from(buffer, 'base64'));
  
    console.log('Saved successfully:', filePath);
  
    // Return the absolute path of the saved file
    return filePath;
  }


// textToSpeech('In the tranquil embrace of the night, the moon casts its silvery glow upon the world below. A gentle breeze whispers through the trees, carrying with it the secrets of the stars. The celestial dance unfolds in the vast expanse of the cosmos, where galaxies twirl in an eternal waltz. Each constellation tells a story written in the language of the universe, a story of creation, of love, and of endless possibilities. As the night deepens, the symphony of the night sky envelops the Earth, inviting all to gaze upon the beauty that transcends time and space.')
// .then(data=>{
//     console.log(data)
// })


function joinBase64Strings(base64Array = []) {
    let resultBase64 = ''; // Initialize with an empty string
    for (const base64Data of base64Array) {
        resultBase64 += Buffer.from(base64Data['base64'], 'base64').toString('binary');
    }
    const joinedBase64Result = Buffer.from(resultBase64, 'binary').toString('base64');
   // console.log('joinedBase64Result', joinedBase64Result);
    return joinedBase64Result;
}

module.exports = {
    textToSpeech
}



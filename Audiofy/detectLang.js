const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

function detectLang(text){

     return lngDetector.detect(text);
}


function getFormalLanguageCode(text) {
    const result = detectLang(text);
  
    if (result && result.length > 0) {
      const detectedLanguage = result[0][0].toLowerCase();
      
      // Define a hashmap of formal language codes
    const languageMap = {
        english: 'en',
        french: 'fr',
        spanish: 'es',
        chinese: 'zh',
        arabic: 'ar',
        german: 'de',
        italian: 'it',
        japanese: 'ja',
        korean: 'ko',
        russian: 'ru',
        portuguese: 'pt',
        hindi: 'hi',
        dutch: 'nl',
        swedish: 'sv',
        turkish: 'tr',
        hebrew: 'he',
        greek: 'el',
        finnish: 'fi',
        norwegian: 'no',
        danish: 'da',
        polish: 'pl',
        vietnamese: 'vi',
        indonesian: 'id',
        thai: 'th',
        malay: 'ms',
        swahili: 'sw',
        tagalog: 'tl',
        // Add more languages as needed
      };
  
      // Check if the detected language is in the hashmap
      if (languageMap[detectedLanguage]) {
        return languageMap[detectedLanguage];
      }
    }
  
    // Default to 'en' (English) if no language is detected or not in the hashmap
    return 'en';
  }

module.exports ={
    getFormalLanguageCode
}
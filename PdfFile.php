<?php

class PdfFile{


    public static function extractPdfData($file)
    {
       // Include autoloader file 
       include 'vendor/autoload.php'; 
             
       // Initialize and load PDF Parser library 
       $parser = new \Smalot\PdfParser\Parser(); 
        
     
        
       // Parse pdf file using Parser library 
       $pdf = $parser->parseFile($file); 
        
       // Extract text from PDF 
       $pdfText = $pdf->getText(); 
       
       return $pdfText;
    }

    public static function extractLinks($data){

      
          
        // Convert $data to a string if it's an array
     

          
            // Define the regular expression pattern for various protocols
            // $pattern = '/\b(?:https?|ftp|tcp|udp):\/\/\S+\b/';
        
            // // Perform the regular expression match
            // preg_match_all($pattern, $data, $matches);
            preg_match_all('/URI\(([^,]*?)\)\/S\/URI/', $data, $matches);
        
            // Return the array of matched URLs
           
        
        
           // Example usage
        
        
          return $matches;
    }
}
// Example usage
 $pdf_content = file_get_contents('test.pdf', true);

 $foundLinks = PdfFile::extractLinks($pdf_content);

// // // Output the found URLs
// // //echo "Found URLs:\n";
print_r($foundLinks);
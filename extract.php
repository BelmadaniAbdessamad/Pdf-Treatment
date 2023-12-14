<?php



$pdfText = ''; 
if(isset($_POST['submit'])){ 
    // If file is selected 
    if(!empty($_FILES["pdf_file"]["name"])){ 
        // File upload path 
        $fileName = basename($_FILES["pdf_file"]["name"]); 
        $fileType = pathinfo($fileName, PATHINFO_EXTENSION); 
       
        // Allow certain file formats 
        $allowTypes = array('pdf'); 
        if(in_array($fileType, $allowTypes)){ 
            // Include autoloader file 
            include 'vendor/autoload.php'; 
             
            // Initialize and load PDF Parser library 
            $parser = new \Smalot\PdfParser\Parser(); 
             
            // Source PDF file to extract text 
            $file = $_FILES["pdf_file"]["tmp_name"]; 
             
            // Parse pdf file using Parser library 
            $pdf = $parser->parseFile($file); 
             
            // Extract text from PDF 
            $text = $pdf->getText(); 
             
            // Add line break 
            $pdfText = nl2br($text); 
        }else{ 
            $statusMsg = '<p>Sorry, only PDF file is allowed to upload.</p>'; 
        } 
    }else{ 
        $statusMsg = '<p>Please select a PDF file to extract text.</p>'; 
    } 
} 
 
// Display text content 
$jsonData = json_encode($pdfText, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
header('Content-Disposition: attachment; filename="generated_data.json"');

// Output the JSON data
echo $jsonData;


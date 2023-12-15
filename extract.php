<?php

require_once "PdfFile.php";

$pdfText = '';
if (isset($_POST['submit'])) {
    // If file is selected 
    if (!empty($_FILES["pdf_file"]["name"])) {
        // File upload path 
        $fileName = basename($_FILES["pdf_file"]["name"]);
        $fileType = pathinfo($fileName, PATHINFO_EXTENSION);

        // Allow certain file formats 
        $allowTypes = array('pdf');
        if (in_array($fileType, $allowTypes)) {
            // Source PDF file to extract text 
            $file = $_FILES["pdf_file"]["tmp_name"];
          $data = PdfFile::extractPdfData($file);
           // $resultData = ["text" => $data];
           
            $resultData['links'] = PdfFile::extractLinks($data);
            // if (isset($_POST["options_arr"]) && is_array($_POST["options_arr"])) {
            //     $selectedOptions = $_POST["options_arr"];

            //     // Validate each selected option
            //     if (in_array("links", $selectedOptions)) {
            //         $resultData['links'] = PdfFile::extractLinks($pdfText);
            //     }
            // }
        } else {
            $statusMsg = '<p>Sorry, only PDF file is allowed to upload.</p>';
        }
    } else {
        $statusMsg = '<p>Please select a PDF file to extract text.</p>';
    }
}

// Display text content 
$jsonData = json_encode($resultData, JSON_PRETTY_PRINT);
//  header('Content-Type: application/octet-stream');
// header('Content-Disposition: attachment; filename="generated_data.txt"');

// Output the JSON data
echo $jsonData;

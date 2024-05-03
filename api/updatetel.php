<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postData = file_get_contents("php://input");
    $data = json_decode($postData);

    // Extract 'objectif' and 'mail' from the JSON data
    $tel = $data->tel; 
    $mail = $data->mail;

    include 'connect.php';

    // Prepare SQL statement using prepared statements
    $sql = "UPDATE profil SET tel=? WHERE mail=?";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $tel, $mail); // Assuming 'objectif' and 'mail' are both strings

    // Execute SQL statement
    if ($stmt->execute()) {
        $response = array('status' => 'success', 'message' => 'Abonne updated successfully');
        echo json_encode($response);
    } else {
        $response = array('status' => 'error', 'message' => 'Error updating abonne: ' . $stmt->error);
        echo json_encode($response);
    }

    // Close statement
    $stmt->close();
    $conn->close();
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

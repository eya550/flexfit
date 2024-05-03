<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    include 'connect.php';

    // Prevent SQL Injection
    $mail = $conn->real_escape_string($_GET['mail']);

    $sql = "SELECT * FROM abonne,profil WHERE abonne.mail='$mail'";
    
    // Execute the query
    $result = $conn->query($sql);
    
    // Check if query execution failed
    if (!$result) {
        die("Query failed: " . $conn->error);
    }

    // Fetch and process the results
    if ($result->num_rows > 0) {
        $a = array();
        while ($row = $result->fetch_assoc()) {
            $a[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($a);
    } else {
        echo json_encode(array());
    }

    // Close the database connection
    $conn->close();
}

?>

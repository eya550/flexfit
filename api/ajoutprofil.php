<?php
// Get the raw POST data
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the raw POST data
    $postData = file_get_contents("php://input");

    // Convert JSON string to PHP object
    $profil = json_decode($postData);

    // Include database connection
    include 'connect.php';

    // Check if email already exists
    $existing_email_query = "SELECT * FROM profil WHERE mail='$profil->mail'";
    $existing_email_result = $conn->query($existing_email_query);

    if ($existing_email_result->num_rows > 0) {
        // Email already exists, return an error
        
        $response = array('status' => 'error', 'message' => 'Email already exists');
        echo json_encode($response);

    } else {
        // Email does not exist, proceed with insertion
        // Prepare SQL statement to insert data into the profil table using prepared statements
        $sql = "INSERT INTO profil (mail, pass, fullname, tel) VALUES ('$profil->mail', '$profil->pass', '$profil->fullname', '$profil->tel')";
        if ($conn->query($sql) === TRUE) {
            $profil_query = "SELECT * FROM profil WHERE mail='$profil->mail'";
            $profil_result = $conn->query($profil_query);
            $profil_data = $profil_result->fetch_assoc();

            $response = array('status' => 'success', 'profil' => $profil_data);
            echo json_encode($response);
        } else {
            $response = array('status' => 'error', 'message' => 'Error inserting data: ' . $conn->error);
            echo json_encode($response);
        }
    }
    
    // Close database connection
    $conn->close();
} else {
    // If the request method is not POST, return an error
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>


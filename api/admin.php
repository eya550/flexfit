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
    
    // Prevent SQL injection by using prepared statements
    $stmt = $conn->prepare("SELECT * FROM admin WHERE mail = ?");
    $stmt->bind_param("s", $profil->mail);
    $stmt->execute();
    $existing_email_result = $stmt->get_result();

    if ($existing_email_result->num_rows > 0) {
        $user = $existing_email_result->fetch_assoc(); // Fetch user details
        // Check if the password matches
        if ($profil->password == $user['password']) {
            $userDetails = [
                'mail' => $user['mail'],
            ];
            $response = array('status' => 'success', 'admin' => $userDetails);
            echo json_encode($response);
        } else {
            $response = array('status' => 'error', 'message' => 'Incorrect password');
            echo json_encode($response);
        }
    } else {
        $response = array('status' => 'error', 'message' => 'Email not found');
        echo json_encode($response);
    }
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

<?php
// suppression.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Check if the request method is DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    
    // Get the email from the URL parameters
    $mail = $_GET['mail'];

    // Assuming you have a database connection established
    // Connect to your database (replace with your actual database connection code)
    include 'connect.php';

    // Prepare a DELETE statement to delete the entry with the provided email
    $sql = "DELETE FROM profil WHERE mail = ?";
    $stmt = $conn->prepare($sql);
    
    // Bind the email parameter
    $stmt->bind_param("s", $mail);
    
    // Execute the statement
    if ($stmt->execute()) {
        // If deletion is successful, return a success message
        $response = array('status' => 'success', 'message' => 'Record deleted successfully');
        echo json_encode($response);
    } else {
        // If deletion fails, return an error message
        $response = array('status' => 'error', 'message' => 'Error deleting record: ' . $conn->error);
        echo json_encode($response);
    }
    
    // Close the statement and database connection
    $stmt->close();
    $conn->close();
    
} else {
    // If the request method is not DELETE, return an error message
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

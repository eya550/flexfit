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
    $objectif = $data->objectif; 
    $mail = $data->mail;

    include 'connect.php';

    // Prepare SQL statement using prepared statements
    $sql = "UPDATE abonne SET objectif=? WHERE mail=?";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $objectif, $mail); // Assuming 'objectif' and 'mail' are both strings
   
    // Execute SQL statement
    if ($stmt->execute()) {
        // Fetch 'genre' from 'abonne' table
        $sql2 = "SELECT genre FROM abonne WHERE mail=?";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bind_param("s", $mail);
        $stmt2->execute();
        $stmt2->bind_result($genre);
        $stmt2->fetch();
        $stmt2->close();

        $type = "";
        $nomw = "";

        if ($genre == 'femme') {
            if ($objectif == 'perte_poids') {
                $type = 'calories2';
                $nomw = 'bulkw';
            } else if ($objectif == 'gain_muscle') {
                $type = 'calories3';
                $nomw = 'cutw';
            }
        } else if ($genre == 'homme') {
            if ($objectif == 'gain_muscle') {
                $type = 'calories5';
                $nomw = 'bulkm';
            } else if ($objectif == 'perte_poids') {
                $type = 'calories4';
                $nomw = 'cutm';
            }
        }

        // Prepare SQL statement for updating 'compte' table
        $sql3 = "UPDATE compte SET type=?, nomw=? WHERE mail=?";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->bind_param("sss", $type, $nomw, $mail);

        // Execute SQL statement for updating 'compte' table
        if ($stmt3->execute()) {
            $response = array('status' => 'success', 'message' => 'Abonne and compte updated successfully');
            echo json_encode($response);
        } else {
            $response = array('status' => 'error', 'message' => 'Error updating compte: ' . $stmt3->error);
            echo json_encode($response);
        }
    } else {
        $response = array('status' => 'error', 'message' => 'Error updating abonne: ' . $stmt->error);
        echo json_encode($response);
    }

    // Close statements and connection
    $stmt->close();
    $conn->close();
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

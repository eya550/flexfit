<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postData = file_get_contents("php://input");
    $abonne = json_decode($postData);

    include 'connect.php';

    // Prepare and execute the SQL statement to insert data into the 'abonne' table
    $sql = "INSERT INTO abonne (nom, prenom, age, genre, taille, poids, objectif, mail) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssisddss", $abonne->nom, $abonne->prenom, $abonne->age, $abonne->genre, $abonne->taille, $abonne->poids, $abonne->objectif, $abonne->mail);

    if ($stmt->execute()) {
        // Data inserted successfully into the 'abonne' table

        // Determine values for 'type' and 'nomw' based on 'genre' and 'objectif'
        $type = "";
        $nomw = "";

        if ($abonne->genre == 'femme') {
            if ($abonne->objectif == 'perte_poids') {
                $type = 'calories2';
                $nomw = 'bulkw';
            } else if ($abonne->objectif == 'gain_muscle') {
                $type = 'calories3';
                $nomw = 'cutw';
            }
        } else if ($abonne->genre == 'homme') {
            if ($abonne->objectif == 'gain_muscle') {
                $type = 'calories5';
                $nomw = 'bulkm';
            } else if ($abonne->objectif == 'perte_poids') {
                $type = 'calories4';
                $nomw = 'cutm';
            }
        }

        // Insert data into the 'compte' table
        $sql_compte = "INSERT INTO compte (mail, type, nomw) VALUES (?, ?, ?)";
        $stmt_compte = $conn->prepare($sql_compte);
        $stmt_compte->bind_param("sss", $abonne->mail, $type, $nomw);

        if ($stmt_compte->execute()) {
            // Both 'abonne' and 'compte' records inserted successfully

            // Fetch the inserted 'abonne' and 'compte' data
            $response = array(
                'status' => 'success',
                'abonne' => $abonne,
                'compte' => array('mail' => $abonne->mail, 'type' => $type, 'nomw' => $nomw)
            );
            echo json_encode($response);
        } else {
            // Error inserting data into 'compte' table
            $response = array('status' => 'error', 'message' => 'Error inserting data into compte table: ' . $stmt_compte->error);
            echo json_encode($response);
        }
    } else {
        // Error inserting data into 'abonne' table
        $response = array('status' => 'error', 'message' => 'Error inserting data into abonne table: ' . $stmt->error);
        echo json_encode($response);
    }

    // Close statements and database connection
    $stmt->close();
    $stmt_compte->close();
    $conn->close();
} else {
    // Invalid request method
    $response = array('status' => 'error', 'message' => 'Invalid request method');
    echo json_encode($response);
}
?>

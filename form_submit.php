<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = nl2br(htmlspecialchars($_POST['message']));
    $created_at = date("Y-m-d H:i:s");

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit(); // Stop further execution
    }

    // Database connection parameters
    $servername = "localhost"; // Change this if your database is hosted elsewhere
    $username = "root"; // Change this to your database username
    $password = ""; // Change this to your database password
    $dbname = "portfolio_user_data";

    try {
        // Create connection using PDO (more secure than mysqli)
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare SQL statement using prepared statement
        $stmt = $conn->prepare("INSERT INTO users (name, email, subject, message, created_at) VALUES (:name, :email, :subject, :message, :created_at)");
        
        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':subject', $subject);
        $stmt->bindParam(':message', $message);
        $stmt->bindParam(':created_at', $created_at);

        // Execute the statement
        if ($stmt->execute()) {
            echo "New record created successfully";
        } else {
            echo "Error: Unable to execute the statement";
        }
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    // Close connection
    $conn = null;
} else {
    echo "Method not allowed"; // If the form isn't submitted via POST
}
?>
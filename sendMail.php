<?php
// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS Request (Preflight) beenden
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// POST Request verarbeiten
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // JSON Payload auslesen
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    // Felder aus JSON extrahieren
    $email = isset($params->email) ? $params->email : '';
    $name = isset($params->name) ? $params->name : '';
    $messageText = isset($params->message) ? $params->message : '';

    // Mail vorbereiten
    $recipient = 'marbach.a@gmx.net';
    $subject = "Contact From <$email>";
    $message = "From: " . htmlspecialchars($name) . "<br>" . htmlspecialchars($messageText);

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = "From: noreply@mywebsite.com";

    // Mail senden
    $success = mail($recipient, $subject, $message, implode("\r\n", $headers));

    // JSON Response zurückgeben
    header('Content-Type: application/json; charset=utf-8');
    if ($success) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error"]);
    }
    exit;
}

// Alle anderen Methoden ablehnen
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
exit;

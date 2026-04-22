<?php

// =========================
// CORS + Headers
// =========================
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// =========================
// Preflight Request (OPTIONS)
// =========================
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// =========================
// Nur POST erlauben
// =========================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// =========================
// JSON lesen
// =========================
$json = file_get_contents("php://input");
$params = json_decode($json);

// Validierung
if (!$params) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
}

// =========================
// Daten extrahieren
// =========================
$email   = $params->email ?? '';
$name    = $params->name ?? '';
$message = $params->message ?? '';

// Pflichtfelder prüfen
if (!$email || !$name || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

// =========================
// Mail Inhalt
// =========================
$recipient = "marbach.a@gmx.net";
$subject   = "Contact From <$email>";

$body = "
    <h2>Neue Nachricht</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Nachricht:</strong><br>$message</p>
";

// =========================
// Headers
// =========================
$headers = [
    "MIME-Version: 1.0",
    "Content-type: text/html; charset=utf-8",
    "From: noreply@artur-marbach.de"
];

// =========================
// Mail senden
// =========================
$success = mail($recipient, $subject, $body, implode("\r\n", $headers));

// =========================
// Response
// =========================
if ($success) {
    echo json_encode(["status" => "sent"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "mail_failed"]);
}

exit;
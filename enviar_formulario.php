<?php
header('Content-Type: application/json');

// Valida os campos
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$cidade = filter_input(INPUT_POST, 'cidade', FILTER_SANITIZE_STRING);
$assunto = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);
$destino = filter_input(INPUT_POST, 'destino', FILTER_SANITIZE_STRING);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

if (!$nome || !$email || !$telefone || !$cidade || !$assunto || !$destino || !$mensagem) {
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
    exit;
}

// Configurações de e-mail
if ($assunto == '2') {
    $to = 'qualidade@marquespan.com.br';
} else {

    switch ($destino) {
        case '1':
            $to = 'atendimentosp@marquespan.com';
            break;
        case '2':
            $to = 'atendimentors@marquespan.com.br';
            break;
        case '3':
            $to = 'atendimentosc@marquespan.com.br';
            break;
        case '4':
            $to = 'atendimentomg@marquespan.com.br';
            break;
        default:
            $to = 'atendimentosp@marquespan.com';
            break;
    }
}

$subject = "[SITE] - {$assunto}";
$message = "
Nome: $nome\n
Email: $email\n
Telefone: $telefone\n
Cidade: $cidade\n
Assunto: $assunto\n
Destino: $destino\n
Mensagem: $mensagem
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Não foi possível enviar a mensagem.']);
}
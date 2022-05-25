<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_regex_encoding('UTF-8');
try {
    list($db, $user, $pass) = explode('#', file_get_contents('../.ht-pdo'));
    $dsn = "mysql:host=127.0.0.1;dbname=$db;charset=utf8";
    $opt = [PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
    $pdo = new PDO($dsn, $user, $pass);
} catch(PDOException $e) {
    die(json_encode(['res' => 0, 'error' => 'Cant connect to database']));
}

$regex = '/^https?:\/\/([a-z1-9\.-])+\//';
$banlist = ['coderoad.ru', 'quabr.com', 'programqa.com', 'thinbug.com', 'profikoder.com', 'progexact.com', 'bestecode.com', 'bonprog.com', 'progaide.com', 'coderquestion.ru', 'coredump.biz', 'issue.life', 'qaru.tech', 'xbuba.com'];
$allowed = ['habr.com', 'stackoverflow.com', 'stackexchange.com', 'wikipedia.org', 'askubuntu.com', 'coderanch.com', 'codeproject.com', 'github.com'];
if(!isset($_GET['q'])) die(json_encode(['res' => 0, 'error' => 'Type isnt set']));
$url = isset($_GET['url']) ? $_GET['url'] : '';

try {
    switch ($_GET['q']) {
        case 'get':
            if (preg_match($regex, $url)) {
                $rd = implode('.', array_slice(explode('.', parse_url($url) ['host']) , -2, 2));
                if (in_array($url, $banlist)) die(json_encode(['res' => 0, 'error' => 'Clone address has id from source, it makes no sense to read from the database']));
                $stmt = $pdo->prepare('SELECT `redir` FROM `b2s` WHERE `url` = ? AND `redir` IS NOT NULL LIMIT 1');
                $stmt->execute([$url]);
                $result = $stmt->fetchColumn();
                if (!$result) die(json_encode(['res' => 0, 'error' => 'No items']));
                $rd = implode('.', array_slice(explode('.', parse_url($result) ['host']) , -2, 2));
                if (!in_array($rd, $allowed)) die(json_encode(['res' => 0, 'error' => 'Link in database is suspicious']));
                die(json_encode(['res' => 1, 'error' => 0, 'response' => $result]));
            } else {
                die(json_encode(['res' => 0, 'error' => 'URL doesnt look like link']));
            }
            break;
        case 'set':
            $redir = isset($_GET['redir']) ? $_GET['redir'] : '';
            if (preg_match($regex, $url) && preg_match($regex, $redir)) {
                $rd = implode('.', array_slice(explode('.', parse_url($redir) ['host']) , -2, 2));
                if (!in_array($rd, $allowed)) die(json_encode(['res' => 0, 'error' => 'Redirect URL not allowed']));

                $rd = implode('.', array_slice(explode('.', parse_url($url) ['host']) , -2, 2));
                if (in_array($rd, $banlist)) die(json_encode(['res' => 0, 'error' => 'Clone address has id from source, it makes no sense to write to the database']));
                $stmt = $pdo->prepare('SELECT `id` FROM `b2s` WHERE `url` = ? AND `redir` IS NOT NULL LIMIT 1');
                $stmt->execute([$url]);
                $result = $stmt->fetchColumn();
                if ($result) $stmt = $pdo->prepare('UPDATE `b2s` SET `url` = ?, `redir` = ? WHERE `id` = ?')->execute([$url, $redir, $result]);
                else $stmt = $pdo->prepare('INSERT INTO `b2s` SET `url` = ?, `redir` = ?')->execute([$url, $redir]);
            } else {
                die(json_encode(['res' => 0, 'error' => 'One of URLs doesnt look like link']));
            }
            break;
    }
} catch(PDOException $e) {
	die(json_encode(['res' => 0, 'error' => $e->getMessage() ]));
}

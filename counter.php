<?php
function updateClickCount($filename)
{
  if (!file_exists($filename)) {
    file_put_contents($filename, '0');
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $clickCount = (int) file_get_contents($filename);
    $clickCount++;
    file_put_contents($filename, (string) $clickCount);
    echo json_encode(['clickCount' => $clickCount]);
    exit();
  }

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $clickCount = (int) file_get_contents($filename);
    echo json_encode(['clickCount' => $clickCount]);
    exit();
  }
}

$filename1 = 'click_count_1.txt';
$filename2 = 'click_count_2.txt';

if (isset($_GET['button']) && $_GET['button'] === '1') {
  updateClickCount($filename1);
} elseif (isset($_GET['button']) && $_GET['button'] === '2') {
  updateClickCount($filename2);
}

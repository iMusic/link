<?php
$call = $_GET['cb'];
$id = $_GET['id'];
$arr = array('aaa', 'bbb', 'ccc');
echo $call.'("'. $arr[$id] .'")';
?>
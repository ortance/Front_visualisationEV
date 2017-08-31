<?php
ini_set('display_errors', 1);

//database login info
$host = 'localhost';
$port = '5432';
$dbname = 'test_NS';
$user = 'postgres';
$password = 'perretho';

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$conn) {
	echo "Not connected : " . pg_error();
	exit;
}

//get the table and fields data
$table = $_GET['table'];
$fields = $_GET['fields'];

//turn fields array into formatted string
$fieldstr = "";
foreach ($fields as $i => $field){
	$fieldstr = $fieldstr . "l.$field, ";
}

//get the geometry as geojson in WGS84
$fieldstr = $fieldstr . "ST_AsGeoJSON(ST_Transform(l.geom,4326))";

//create basic sql statement
$sql = "SELECT $fieldstr FROM $table l";
// $sql = "SELECT l.gid, l.createdby, l.featname, l.feattype, l.status, l.acres, ST_AsGeoJSON(ST_Transform(l.geom,4326)) FROM sites";

//send the query
if (!$response = pg_query($conn, $sql)) {
	echo "A query error occured.\n";
	exit;
}

//echo the data back to the DOM
while ($row = pg_fetch_row($response)) {
	foreach ($row as $i => $attr){
		echo $attr.", ";
	}
	echo ";";
}

?>

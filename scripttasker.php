<?php
// Vérifiez si des données sont envoyées par la méthode POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérez les données envoyées
    $key1 = isset($_POST['key1']) ? $_POST['key1'] : '';
    $key2 = isset($_POST['key2']) ? $_POST['key2'] : '';

    // Traitez les données comme nécessaire (par exemple, les enregistrer dans une base de données)
    echo "Données reçues en POST : key1 = $key1, key2 = $key2";
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Récupérez les données envoyées par la méthode GET
    $key1 = isset($_GET['key1']) ? $_GET['key1'] : '';
    $key2 = isset($_GET['key2']) ? $_GET['key2'] : '';

    // Traitez les données comme nécessaire
    echo "Données reçues en GET : key1 = $key1, key2 = $key2";
} else {
    echo "Aucune donnée reçue.";
}
?>

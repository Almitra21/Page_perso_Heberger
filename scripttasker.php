//<?php
// Vérifiez si des données sont envoyées par la méthode POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérez les données envoyées
    $cle1 = isset($_POST['clé1']) ? $_POST['clé1'] : '';
    $cle2 = isset($_POST['clé2']) ? $_POST['clé2'] : '';

    // Traitez les données comme nécessaire (par exemple, les enregistrer dans une base de données)
    echo "Données reçues en POST : clé1 = $cle1, clé2 = $cle2";
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Récupérez les données envoyées par la méthode GET
    $cle1 = isset($_GET['clé1']) ? $_GET['clé1'] : '';
    $cle2 = isset($_GET['clé2']) ? $_GET['clé2'] : '';

    // Traitez les données comme nécessaire
    echo "Données reçues en GET : clé1 = $cle1, clé2 = $cle2";
} else {
    echo "Aucune donnée reçue.";
}
?>//

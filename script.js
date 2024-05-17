function ajouterPhoto() {
    var divPhotos = document.getElementById("photos");
    var nouvellePhoto = document.createElement("img");
    nouvellePhoto.src = "nouvelle_photo.jpg"; // Remplacez "nouvelle_photo.jpg" par le chemin de votre nouvelle photo
    nouvellePhoto.alt = "Description de la nouvelle photo";
    divPhotos.appendChild(nouvellePhoto);
}
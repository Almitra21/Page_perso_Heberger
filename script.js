function ajouterPhoto() {
    var divPhotos = document.getElementById("photos");
    var nouvellePhoto = document.createElement("img");
    nouvellePhoto.src = "nouvelle_photo.jpg"; // Remplacez "nouvelle_photo.jpg" par le chemin de votre nouvelle photo
    nouvellePhoto.alt = "Description de la nouvelle photo";
    divPhotos.appendChild(nouvellePhoto);
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'responsive';
            document.getElementById('photoContainer').appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});
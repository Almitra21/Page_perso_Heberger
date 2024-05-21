document.addEventListener('DOMContentLoaded', () => {
  fetch('https://anthonyburchard.netlify.app/.netlify/functions/recevoir_donnees')
    .then(response => response.json())
    .then(data => {
      if (data.storedData.length > 0) {
        const latestData = data.storedData[data.storedData.length - 1];
        document.getElementById('nom').value = latestData.nom;
        document.getElementById('age').value = latestData.age;
      } else {
        alert("Aucune donnée disponible.");
      }
    })
    .catch(error => console.error('Erreur:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://anthonyburchard.netlify.app/.netlify/functions/recevoir_donnees')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);
        const tableBody = document.querySelector('#dataTable tbody');
        tableBody.innerHTML = ''; // Clear the table
        data.storedData.forEach(item => {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          idCell.textContent = item.id;
          const dateCell = document.createElement('td');
          dateCell.textContent = item.date;
          const joursCell = document.createElement('td');
          joursCell.textContent = item.jours;
          const debutCell = document.createElement('td');
          debutCell.textContent = item.debut;
          const finCell = document.createElement('td');
          finCell.textContent = item.fin;
          const dureesCell = document.createElement('td');
          dureesCell.textContent = item.durees;
          row.appendChild(idCell);
          row.appendChild(dateCell);
          row.appendChild(joursCell);
          row.appendChild(debutCell);
          row.appendChild(finCell);
          row.appendChild(dureesCell);
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Erreur:', error));
  });
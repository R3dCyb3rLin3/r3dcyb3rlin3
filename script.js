fetch('https://spreadsheets.google.com/feeds/cells/  1rxAr0_2TPeoaecOMw5ytLhA70BTJPA5Jecp0YQAY8xc/1/public/full?alt=json')
  .then(response => response.json())
  .then(data => console.log(data)) // Aquí puedes manejar los datos como prefieras
  .catch(error => console.error('Error:', error));

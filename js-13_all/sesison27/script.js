fetch('https://random-data-api.com/api/v2/appliances?size=100') 
.then(response => response.json()) 
.then(data => console.log(data)) 
.catch(error => console.error('error:', error));

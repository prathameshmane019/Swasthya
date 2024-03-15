import axios from 'axios';
axios.get('http://localhost:5000/api')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
const axios = require('axios');

// Define the data to be sent in the POST request
const data = {
    //data: ["M", "1", "334", "4", "B", "Z", "a"]
    data: ["2", "4", "5", "92"]
};

// Send POST request to the server
axios.post('http://localhost:5000/bfhl', data)
    .then(response => {
        // Handle the response from the server
        console.log('Response:', response.data);
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    });

const form = document.getElementById('registration-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const aadhar = document.getElementById('aadhar').value;

  // Send data to server-side script usin AJAX or Fetch API
  const data = {
    name: name,
    dob: dob,
    address: address,
    email: email,
    aadhar: aadhar,
  };

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(responseData => {
    message.textContent = responseData.message;
  })
  .catch(error => {
    console.error(error);
    message.textContent = 'Regestration complete';
  });
});
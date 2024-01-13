import axios from 'axios'

function generateJoke() {
  document.getElementById("joke").innerText = "Loading..."
  const options = {
    headers: {
      Accept: 'application/json'
    }
  }

  axios.get('https://icanhazdadjoke.com', options).then(res => {
    document.getElementById("joke").innerText = res.data.joke
  }).catch(e => {
    console.error(e);
    document.getElementById("joke").innerText = "Something went wrong! Try again!"
  })
}

export default generateJoke;

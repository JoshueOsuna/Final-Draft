import { createVendiaClient } from '@vendia/client';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Your app is running!!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
  <p>Your Uni's blocks should load below once you've replaced the dummy apiUrl/apiKey with your Uni's values...</p>
`

const client = createVendiaClient({
  apiUrl: 'https://arimkqyeak.execute-api.us-west-2.amazonaws.com/graphql/',
  apiKey: '413K6uKaD5V4QKoV3SRFo3RagGmz6qj3MK8ESei98uD6'
});

client.blocks.list().then(data => {
  const pre = document.createElement('pre')
  pre.innerHTML = JSON.stringify(data, null, 2)
  document.querySelector('#app').appendChild(pre)
})

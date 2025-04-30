import './style.css'
import { setupCounter } from './counter.js'
import { setupFitnessWebsite } from './js/fitness.js'

// Initialize fitness website functionality
setupFitnessWebsite()

// Keep the original counter functionality for demonstration
const appDiv = document.createElement('div')
appDiv.id = 'counter-app'
appDiv.style.display = 'none' // Hide the counter app

appDiv.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
   

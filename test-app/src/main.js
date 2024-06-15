import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import BarChart6 from './assets/BarChart6.png'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

var dataElement = document.createElement('div')
dataElement.innerHTML = `
  <h1> Below we'll be displaying some visanatomy charts</h1>
  <div class="container">
    <div id="checkboxes">
      <div id="browserFrom">
        <form action="#" id="facetedbrowsingform">
          <div class="criteriagroup">
            <ul class="collapsible">
              <!-- Visualization elements -->
              <h3>Visualization Elements</h3>
                <div class="collapsible-body">
                  <div class="row">
                    <div class="col s6">
                      <p>
                        <label>
                          <input type="checkbox" name="line" value="line" />
                          <span>Line Graph</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" name="bar" value="bar" />
                          <span>Bar Chart</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" name="dot" value="dot" />
                          <span>Dot Plot</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input
                            type="checkbox"
                            name="marimekko"
                            value="marimekko"
                          />
                          <span>Marimekko Chart</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input
                            type="checkbox"
                            name="grouped"
                            value="grouped"
                          />
                          <span>Grouped Bar Chart</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
            </ul>
          </div>
        </form>
      </div>  
    </div>
    <div id="chart-image">
      <img src="${BarChart6}"/>
    </div>
  </div>
`

document.querySelector('#app').appendChild(dataElement);


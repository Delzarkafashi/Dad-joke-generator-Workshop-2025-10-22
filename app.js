/* ===== Pseudokod för skämt-appen =====
1. Hitta elementet med id "joke" → jokeElement
2. Hitta knappen med id "jokeBtn" → jokeBtn

3. Kör funktionen generateJoke direkt när sidan startar

4. I generateJoke:
   - Skapa inställningar (config)
     • JSON-version: Accept = 'application/json'
     • Text-version: Accept = 'text/plain'
   - Hämta skämt från 'https://icanhazdadjoke.com'
   - När svaret kommer:
       → Om JSON: res.json()
       → Om text: res.text()
   - Visa skämtet i jokeElement

5. När man klickar på knappen → kör generateJoke igen
=============================================== */

const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
  const useJson = true; 

  const config = {
    headers: {
      Accept: useJson ? 'application/json' : 'text/plain',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = useJson ? await res.json() : await res.text();

    jokeElement.textContent = useJson ? data.joke : data;
  } 
  catch (error) {
    jokeElement.textContent = 'Något gick fel, försök igen.';
    console.error(error);
  }
}

jokeBtn.addEventListener('click', generateJoke);



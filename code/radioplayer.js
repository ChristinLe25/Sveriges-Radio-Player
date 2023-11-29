// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const radioElement = document.getElementById("channels");

async function radioApi() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);

  data.channels.forEach((x) => {
    const aNewDiv = document.createElement("div");
    aNewDiv.innerHTML = `
    <div class="channel-name" style="background:#${x.color}">
    <img src="${x.image}"alt="radio kanalen">
        <h2>${x.name}</h2>  
        <audio controls>
        <source src="${x.liveaudio.url}" type="audio/mpeg" />
        </audio>
    </div>
    `;

    
    radioElement.appendChild(aNewDiv);
  });
}

radioApi();

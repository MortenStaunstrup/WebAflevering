
// Henter data fra albums.json filen med Thomas' magiske kode

fetchData("albums.json").then((data) => {
  

// declaration af tableContent : indholdet af tabellen (som er givet id'et table)

let tableContent = document.getElementById("table")

// et for-loop til indsætningen af data, baseret på indeks i data
// Hver knap får sit eget 'onclick' attribut, som har funktionen 'toggleTrackList' med samme parameter eller argument (idk hvilken) som den tilsvarende div med tracks har som id
for (i = 0; i < data.length; i++){

  let nyAlbum = '<tr>' + '<td>' + data[i].albumName + '</td>' + '<td>' + data[i].artistName + 
  '</td>' + '<td>' + data[i].productionYear + '</td>' + '<td class = "buttons"> ' + '<button id =' + '"' + data[i].id + '"' + '" class="show_hide" onclick="toggleTrackList(' + data[i].id + ')">' + 
  'Show/Hide</button>' + '</td>' + '</tr>';

// Sætter de nye albums sammen
  tableContent.innerHTML = tableContent.innerHTML + nyAlbum;
  
};



// variabel som referencer div'en hvor mine andre div'er med tracklisten for hvert album skal være 
let divContent = document.getElementById("trackLister")


// Et for-loop igen, til at gennemgå alle albums igen
for(i = 0; i < data.length; i++){
  
 let trackListen = data[i].trackList  // For hvert album, skal trackListen være lig med 'trackList fra albums.json

 let trackDiv = document.createElement("div")  // Lav et 'div'
 trackDiv.setAttribute('id', `tracklist-${i}`)  // Giver et Id' tilsvarende indekset på albummet til hvert div med tracks
 trackDiv.style.display = "none"   //Display er sat til none, så div'en er gemt til at begynde med
 trackDiv.setAttribute('class', 'trackDiv') // Giver alle trackDiv's en universal class så man senere hen kan 'hide' dem alle

 // Laver en header til tracklisten
 let trackDivHeader = document.createElement("h3")
 trackDivHeader.innerHTML = "Tracks from: " + data[i].albumName

 let ol = document.createElement("ol")  // Lav et ordered list element

 console.log(trackListen)  // Så jeg kunne se, at alle tracks pr. album blev printet ud


 // Nyt for-loop inde i andet for-loop til at gå igennem 'trackListen' variabel som er listen af tracks pr. album
 for(j = 0; j < trackListen.length; j++){

  let trackTitle =  trackListen[j].trackTitle  // Variabel 'trackTitle' som er samme navn som trackTitle i json dokumentet
  
  let listItem = document.createElement("li")  // Lav et ny element: li til vores ordered list for hvert track title
  listItem.innerHTML = trackTitle  // Teksten inde i <li></li> skal være 'trackListen[j].trackTitle'

  ol.appendChild(listItem) // Gør "listItem" til et child-element af vores variabel 'ol'

 }

 trackDiv.appendChild(trackDivHeader)
 trackDiv.appendChild(ol)  // Gør vores 'ol' til et child-element af variablen 'trackDiv'

 divContent.appendChild(trackDiv)  // Gør 'trackDiv' (og dermed vores ordered list af alle tracks på det specifikke album) til et child-element af 'divContent'
  
 };



});


// Funktionen i hver button, som tager sidste del af 'tracklist-' som argument
function toggleTrackList(nogetVariabelNoget) {
  let variabel = document.getElementById(`tracklist-${nogetVariabelNoget}`); // Definerer tilfældig variabel som elementet med samme id som som knappens parameter (toggleTracklist())
  let variabel2 = document.getElementsByClassName('trackDiv') // Variabel til at vælge alle div med classen 'trackDiv'

  for (k = 0; k < variabel2.length; k++){   // Looper igennem alle 'trackDiv' for at 'gemme' dem

    if (variabel2[k] !== variabel){
    variabel2[k].style.display = 'none';    // Kun 'gem' den, hvis værdien IKKE er det samme som den knap vi klikker (Ergo laver den ikke den knap vi klikker om til 'none')
    }
  }

  if (variabel.style.display === "none") {
    variabel.style.display = "block";  //Hvis display-stilen er lig med 'none' (som den er by default), lav den om til 'block' så den kan ses
  } else {
    variabel.style.display = "none"; // Hvis den ikke er 'none' må den jo være 'block' (ergo er den allerede shown), derfor 'none' så den bliver hidden igen
  }
}


//Din magi Thomas, som jeg ikke aner hvad gør men koden virker ikke uden
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
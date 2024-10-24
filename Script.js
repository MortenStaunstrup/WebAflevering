
// Henter data fra albums.json filen med Thomas magiske kode

fetchData("albums.json").then((data) => {
  

// declaration af tableContent : indholdet af tabellen (som er givet id table)

let tableContent = document.getElementById("table")

// et for-loop til indsætningen af data
for (i = 0; i < data.length; i++){
  let nyAlbum = '<tr>' + '<td>' + data[i].albumName + '</td>' + '<td>' + data[i].artistName + '</td>' + '<td>' + data[i].productionYear + '</td>' + '<td> ' + data[i].trackList.length + '</td>' + '</tr>';

  tableContent.innerHTML = tableContent.innerHTML + nyAlbum;
  
};


});
//Din magi Thomas, som jeg ikke aner hvad gør men koden virker ikke uden
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
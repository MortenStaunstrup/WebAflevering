
// Henter data fra albums.json filen med Thomas magiske kode

fetchData("albums.json").then((data) => {
  console.log(data);

console.log(data[0].albumName)

// Starter table i html med en predefineret 'html tags' blok

document.getElementById("table").innerHTML = `<tr>
            <th>Album</th>
            <th>Artist</th>
            <th>Release year</th>
       </tr>`

// et for-loop til indsætningen af data
for (i = 0; i < data.length; i++){

}


});
//Din magi Thomas, som du ikke fik snakket om
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
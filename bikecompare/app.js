let selectedBikes = [];
const maxBikes = 4;
const bikeData = {
    "Honda CBR600RR": { power: "120 HP", weight: "194 kg", engine: "599 cc", type: "Sport" },
    "Yamaha R1": { power: "200 HP", weight: "200 kg", engine: "998 cc", type: "Sport" },
    "Kawasaki Ninja ZX-10R": { power: "203 HP", weight: "207 kg", engine: "998 cc", type: "Sport" },
    "Ducati Panigale V4": { power: "214 HP", weight: "198 kg", engine: "1103 cc", type: "SuperSport" }
};

const searchInput = document.getElementById('search-bar');
const addButton = document.getElementById('add-bike');
const comparisonTableBody = document.getElementById('bike-specs');

// Autocomplete functionality (simple version)
searchInput.addEventListener('input', function () {
    let inputVal = searchInput.value.toLowerCase();
    let matches = Object.keys(bikeData).filter(bike => bike.toLowerCase().includes(inputVal));
    console.log(matches); // Optional: Display suggestions here.
});

// Add bike to comparison
addButton.addEventListener('click', function () {
    const bikeModel = searchInput.value;
    if (bikeData[bikeModel] && selectedBikes.length < maxBikes) {
        selectedBikes.push(bikeModel);
        updateComparisonTable();
    } else {
        alert("Invalid bike model or maximum bikes reached!");
    }
    searchInput.value = ''; // Clear input field
});

// Update the comparison table
function updateComparisonTable() {
    comparisonTableBody.innerHTML = '';
    const attributes = ["power", "weight", "engine", "type"];
    attributes.forEach(attr => {
        let row = `<tr><td>${attr}</td>`;
        selectedBikes.forEach(bike => {
            row += `<td>${bikeData[bike][attr]}</td>`;
        });
        row += '</tr>';
        comparisonTableBody.innerHTML += row;
    });
}

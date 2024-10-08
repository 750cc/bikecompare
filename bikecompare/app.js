// app.js

const bikes = [
    "Honda CBR500R",
    "Kawasaki Ninja 650",
    "Yamaha YZF-R3",
    "KTM RC 390",
    "BMW S1000RR",
    "Suzuki GSX-R750",
    "Ducati Panigale V2",
    "Triumph Street Triple",
    "Harley Davidson Sportster",
    "Kawasaki Z900"
];

const searchInput = document.getElementById('search');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (query) {
        // Filter the bike models based on user input
        const suggestions = bikes.filter(bike => bike.toLowerCase().includes(query));

        suggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.textContent = suggestion; // Set the suggestion text
            div.addEventListener('click', () => {
                searchInput.value = suggestion; // Set the input to the clicked suggestion
                suggestionsContainer.innerHTML = ''; // Clear suggestions after selection
            });
            suggestionsContainer.appendChild(div); // Add suggestion to the container
        });
    }
});

// Optional: Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        suggestionsContainer.innerHTML = ''; // Clear suggestions
    }
});

// Travel data organized by countries and cities
const travelData = {
    countries: [
        { id: "NP", name: "Nepal", color: "#2973ff" },
        { id: "IN", name: "India", color: "#ff6b35" },
        { id: "CN", name: "China", color: "#ff4757" },
        { id: "TH", name: "Thailand", color: "#3742fa" },
        { id: "KH", name: "Cambodia", color: "#ff9ff3" },
        { id: "MY", name: "Malaysia", color: "#54a0ff" },
        { id: "VN", name: "Vietnam", color: "#5f27cd" },
        { id: "US", name: "United States", color: "#00d2d3" },
        { id: "MA", name: "Morocco", color: "#ff6348" },
        { id: "IS", name: "Iceland", color: "#2ed573" },
        { id: "SV", name: "El Salvador", color: "#ffa502" },
        { id: "GT", name: "Guatemala", color: "#ff4757" },
        { id: "NI", name: "Nicaragua", color: "#1e90ff" },
        { id: "CO", name: "Colombia", color: "#ff3838" },
        { id: "PE", name: "Peru", color: "#ff6b35" },
        // Add in a medium grey the following extra countries:  Belgium, France, Netherlands, UK, Germany, Poland, Spain, Portugal, Italy, Switzerland, Hungary, Slovakia, Oman, UAE, Qatar, Honduras, Mexico
        { id: "BE", name: "Belgium", color: "#b0b0b0" },
        { id: "FR", name: "France", color: "#b0b0b0" },
        { id: "NL", name: "Netherlands", color: "#b0b0b0" },
        { id: "GB", name: "United Kingdom", color: "#b0b0b0" },
        { id: "DE", name: "Germany", color: "#b0b0b0" },
        { id: "PL", name: "Poland", color: "#b0b0b0" },
        { id: "ES", name: "Spain", color: "#b0b0b0" },
        { id: "PT", name: "Portugal", color: "#b0b0b0" },
        { id: "IT", name: "Italy", color: "#b0b0b0" },
        { id: "CH", name: "Switzerland", color: "#b0b0b0" },
        { id: "HU", name: "Hungary", color: "#b0b0b0" },
        { id: "SK", name: "Slovakia", color: "#b0b0b0" },
        { id: "OM", name: "Oman", color: "#b0b0b0" },
        { id: "AE", name: "United Arab Emirates", color: "#b0b0b0" },
        { id: "QA", name: "Qatar", color: "#b0b0b0" },
        { id: "HN", name: "Honduras", color: "#b0b0b0" },
        { id: "MX", name: "Mexico", color: "#b0b0b0" }
    ],
    cities: [
        // Nepal
        { name: "Pokhara", country: "Nepal", latitude: 28.2096, longitude: 83.9856, image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Beautiful lakeside city with stunning mountain views" },
        { name: "Annapurna Base Camp", country: "Nepal", latitude: 28.5312, longitude: 83.8920, image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Epic trekking adventure through the Himalayas" },
        { name: "Ghandruk", country: "Nepal", latitude: 28.3894, longitude: 83.8103, image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Traditional Gurung village with mountain panoramas" },
        
        // India
        { name: "Rishikesh", country: "India", latitude: 30.0869, longitude: 78.2676, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Yoga capital of the world on the Ganges" },
        { name: "Agra", country: "India", latitude: 27.1767, longitude: 78.0081, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Home of the magnificent Taj Mahal" },
        { name: "Varanasi", country: "India", latitude: 25.3176, longitude: 82.9739, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Ancient spiritual city on the Ganges" },
        { name: "Udaipur", country: "India", latitude: 24.5854, longitude: 73.7125, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "City of Lakes with stunning palaces" },
        { name: "Jaipur", country: "India", latitude: 26.9124, longitude: 75.7873, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "The Pink City with magnificent forts" },
        { name: "Hampi", country: "India", latitude: 15.3350, longitude: 76.4600, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Ancient ruins of the Vijayanagara Empire" },
        { name: "Kochi", country: "India", latitude: 9.9312, longitude: 76.2673, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Queen of the Arabian Sea with colonial charm" },
        { name: "Mysore", country: "India", latitude: 12.2958, longitude: 76.6394, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "City of Palaces with rich heritage" },
        { name: "Munnar", country: "India", latitude: 10.0889, longitude: 77.0595, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Hill station famous for tea plantations" },
        
        // China
        { name: "Xi'an", country: "China", latitude: 34.3853, longitude: 109.2784, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Home of the Terracotta Warriors" },
        
        // Thailand
        { name: "Chiang Mai", country: "Thailand", latitude: 18.7883, longitude: 98.9853, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Cultural capital with beautiful temples" },
        { name: "Bangkok", country: "Thailand", latitude: 13.7563, longitude: 100.5018, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Vibrant capital with street food and temples" },
        
        // Cambodia
        { name: "Angkor Wat", country: "Cambodia", latitude: 13.4125, longitude: 103.8669, image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "UNESCO World Heritage temple complex" },
        
        // Malaysia
        { name: "Melaka", country: "Malaysia", latitude: 2.1896, longitude: 102.2501, image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Historic port city with colonial architecture" },
        
        // Vietnam
        { name: "Chau Doc", country: "Vietnam", latitude: 10.7008, longitude: 105.1119, image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Mekong Delta town near Cambodia border" },
        { name: "Ho Chi Minh City", country: "Vietnam", latitude: 10.8231, longitude: 106.6297, image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Bustling metropolis with rich history" },
        { name: "Ben Tre", country: "Vietnam", latitude: 10.2431, longitude: 106.3757, image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Coconut island in the Mekong Delta" },
        
        // USA
        { name: "Savannah", country: "USA", latitude: 32.0835, longitude: -81.0998, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Historic Southern charm and architecture" },
        { name: "Charleston", country: "USA", latitude: 32.7765, longitude: -79.9311, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Antebellum architecture and coastal beauty" },
        
        // Morocco
        { name: "Marrakech", country: "Morocco", latitude: 31.6295, longitude: -7.9811, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d68845?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Red city with vibrant souks and riads" },
        
        // Iceland
        { name: "Thingvellir", country: "Iceland", latitude: 64.2558, longitude: -21.1294, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Historic parliament site and national park" },
        { name: "Selfoss", country: "Iceland", latitude: 63.9339, longitude: -20.9971, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Town in South Iceland near geysers" },
        { name: "Vik", country: "Iceland", latitude: 63.4187, longitude: -19.0059, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Black sand beaches and dramatic coastline" },
        
        // El Salvador
        { name: "Santa Ana", country: "El Salvador", latitude: 13.9942, longitude: -89.5598, image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Colonial city near volcanoes" },
        { name: "Juayúa", country: "El Salvador", latitude: 13.8431, longitude: -89.7453, image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Coffee town with weekend food festival" },
        
        // Guatemala
        { name: "Antigua", country: "Guatemala", latitude: 14.5586, longitude: -90.7344, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Colonial UNESCO World Heritage city" },
        { name: "Lake Atitlán", country: "Guatemala", latitude: 14.6906, longitude: -91.2025, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Stunning volcanic lake with Mayan villages" },
        
        // Nicaragua
        { name: "Ometepe", country: "Nicaragua", latitude: 11.5000, longitude: -85.6333, image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Volcanic island in Lake Nicaragua" },
        { name: "León", country: "Nicaragua", latitude: 12.4348, longitude: -86.8779, image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Colonial city with revolutionary history" },
        { name: "Popoyo", country: "Nicaragua", latitude: 11.3833, longitude: -86.0167, image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "World-class surf break on Pacific coast" },
        
        // Colombia
        { name: "Bogotá", country: "Colombia", latitude: 4.7110, longitude: -74.0721, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "High-altitude capital with vibrant culture" },
        { name: "Salento", country: "Colombia", latitude: 4.6369, longitude: -75.5706, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Coffee region with colorful colonial architecture" },
        { name: "Medellín", country: "Colombia", latitude: 6.2442, longitude: -75.5812, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "City of eternal spring with urban innovation" },
        { name: "Guatapé", country: "Colombia", latitude: 6.2303, longitude: -75.1567, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Colorful town with famous El Peñón rock" },
        { name: "Cartagena", country: "Colombia", latitude: 10.3932, longitude: -75.4832, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Caribbean colonial fortress city" },
        { name: "Tayrona", country: "Colombia", latitude: 11.3167, longitude: -74.0833, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "National park with pristine beaches" },
        
        // Peru
        { name: "Huacachina", country: "Peru", latitude: -14.0875, longitude: -75.7639, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Desert oasis with sand dune adventures" },
        { name: "Nazca", country: "Peru", latitude: -14.8370, longitude: -74.9447, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Mysterious lines and geoglyphs in the desert" },
        { name: "Arequipa", country: "Peru", latitude: -16.4090, longitude: -71.5375, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "White City with colonial architecture" },
        { name: "Puno", country: "Peru", latitude: -15.8422, longitude: -70.0199, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Gateway to Lake Titicaca and floating islands" },
        { name: "Cusco", country: "Peru", latitude: -13.5319, longitude: -71.9675, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Ancient Inca capital and gateway to Machu Picchu" },
        { name: "Machu Picchu", country: "Peru", latitude: -13.1631, longitude: -72.5450, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Lost city of the Incas, Wonder of the World" }
    ]
};

// Create map instance using amCharts 4
am4core.ready(function() {
    // Themes
    am4core.useTheme(am4themes_animated);
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series - default appearance for non-visited countries
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#f0f0f0"); // Very subtle color for non-visited
    polygonTemplate.stroke = am4core.color("#ffffff");
    polygonTemplate.strokeWidth = 0.5;
    
    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];
    
    // Prepare data for visited countries
    var visitedCountriesData = travelData.countries.map(country => ({
        id: country.id,
        name: country.name,
        fill: am4core.color(country.color)
    }));
    
    // Add data for visited countries
    polygonSeries.data = visitedCountriesData;
    
    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";
    
    // Create hover state for visited countries only
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#1b9bff");
    
    // Make only visited countries interactive
    polygonTemplate.adapter.add("cursorOverStyle", function(cursor, target) {
        if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.fill) {
            return "pointer";
        }
        return "default";
    });
    
    // Create image series for cities
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    
    // Create a circle image in image series template
    var imageSeriesTemplate = imageSeries.mapImages.template;
    var circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 6;
    circle.fill = am4core.color("#ff6b35");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{name}";
    
    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    
    // Add hover state for city markers
    var circleHoverState = circle.states.create("hover");
    circleHoverState.properties.radius = 8;
    circleHoverState.properties.fill = am4core.color("#ff4757");
    
    // Add data for cities
    imageSeries.data = travelData.cities;
    
    // Add click event to city markers
    imageSeriesTemplate.events.on("hit", function(ev) {
        var data = ev.target.dataItem.dataContext;
        showLocationInfo(data);
    });
    
    // Add click event to countries
    polygonTemplate.events.on("hit", function(ev) {
        var data = ev.target.dataItem.dataContext;
        if (data && data.fill) { // Only if it's a visited country
            var countryData = travelData.countries.find(c => c.id === data.id);
            if (countryData) {
                var citiesInCountry = travelData.cities.filter(city => city.country === countryData.name);
                showCountryInfo(countryData, citiesInCountry);
            }
        }
    });
    
}); // end am4core.ready()

// Show city information
function showLocationInfo(cityData) {
    const panel = document.getElementById('info-panel');
    const image = document.getElementById('location-image');
    const name = document.getElementById('location-name');
    const country = document.getElementById('location-country');
    const description = document.getElementById('location-description');
    const date = document.getElementById('location-date');
    
    // Update panel content
    image.src = cityData.image;
    image.alt = cityData.name;
    name.textContent = cityData.name;
    country.textContent = cityData.country;
    description.textContent = cityData.description;
    date.textContent = ""; // Remove date for now
    
    // Show panel
    panel.classList.remove('hidden');
}

// Show country information
function showCountryInfo(countryData, cities) {
    const panel = document.getElementById('info-panel');
    const image = document.getElementById('location-image');
    const name = document.getElementById('location-name');
    const country = document.getElementById('location-country');
    const description = document.getElementById('location-description');
    const date = document.getElementById('location-date');
    
    // Update panel content
    image.src = cities[0]?.image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    image.alt = countryData.name;
    name.textContent = countryData.name;
    country.textContent = `Places visited: ${cities.map(c => c.name).join(', ')}`;
    description.textContent = `Explored ${cities.length} amazing ${cities.length === 1 ? 'place' : 'places'} in this incredible country.`;
    date.textContent = "";
    
    // Show panel
    panel.classList.remove('hidden');
}

// Close panel functionality
document.getElementById('close-panel').addEventListener('click', () => {
    document.getElementById('info-panel').classList.add('hidden');
});

// Close panel when clicking outside
document.getElementById('info-panel').addEventListener('click', (e) => {
    if (e.target.id === 'info-panel') {
        document.getElementById('close-panel').click();
    }
});

// Close panel with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('info-panel').classList.add('hidden');
    }
});
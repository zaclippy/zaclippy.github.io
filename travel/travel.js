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
        { id: "BE", name: "Belgium", color: "#b0b0b0" },
        { id: "FR", name: "France", color: "#b0b0b0" },
        { id: "NL", name: "Netherlands", color: "#5f27cd" },
        { id: "GB", name: "United Kingdom", color: "#b0b0b0" },
        { id: "DE", name: "Germany", color: "#b0b0b0" },
        { id: "PL", name: "Poland", color: "#b0b0b0" },
        { id: "ES", name: "Spain", color: "#b0b0b0" },
        { id: "PT", name: "Portugal", color: "#b0b0b0" },
        { id: "IT", name: "Italy", color: "#ff4757" },
        { id: "CH", name: "Switzerland", color: "#2ed573" },
        { id: "HU", name: "Hungary", color: "#1e90ff" },
        { id: "SK", name: "Slovakia", color: "#ffa502" },
        { id: "OM", name: "Oman", color: "#b0b0b0" },
        { id: "AE", name: "United Arab Emirates", color: "#b0b0b0" },
        { id: "QA", name: "Qatar", color: "#b0b0b0" },
        { id: "HN", name: "Honduras", color: "#b0b0b0" },
        { id: "MX", name: "Mexico", color: "#b0b0b0" },
        { id: "LI", name: "Liechtenstein", color: "#2ed573" },
    ],
    cities: [
        // Extra Cities in europe
        {
            name: "Den Haag",
            country: "Netherlands",
            latitude: 52.0983,
            longitude: 4.2681,
            description:
                "Cycling through the city with beautiful architecture and canals",
        },
        {
            name: "Scheveningen",
            country: "Netherlands",
            latitude: 51.9081,
            longitude: 4.1772,
        },
        {
            name: "Utrecht",
            country: "Netherlands",
            latitude: 52.0907,
            longitude: 5.1214,
            description: "Charming city with canals and historic architecture",
        },
        {
            name: "Annecy",
            country: "France",
            latitude: 45.8992,
            longitude: 6.1294,
            description:
                "Quick daytrip to this beautiful lakeside town full of canals during the rainy day",
        },
        {
            name: "Bratislava",
            country: "Slovakia",
            latitude: 48.1482,
            longitude: 17.1067,
            description: "Capital city with medieval architecture",
        },
        {
            name: "Budapest",
            country: "Hungary",
            latitude: 47.4979,
            longitude: 19.0402,
            description: "Stunning capital city with thermal baths",
        },
        {
            name: "Lucerne",
            country: "Switzerland",
            latitude: 47.0502,
            longitude: 8.3093,
            description: "Picturesque lakeside city with mountains",
        },
        {
            name: "Vaduz",
            country: "Liechtenstein",
            latitude: 47.1415,
            longitude: 9.5215,
            description: "Capital city with a medieval castle",
        },

        {
            name: "Amsterdam",
            country: "Netherlands",
            latitude: 52.3676,
            longitude: 4.9041,
            description: "Canal city with rich history and culture",
        },
        {
            name: "Cancún",
            country: "Mexico",
            latitude: 21.1619,
            longitude: -86.8515,
            description: "Quick layover on the beach for one night",
        },
        {
            name: "Philadelphia",
            country: "United States",
            latitude: 39.9526,
            longitude: -75.1652,
        },
        {
            name: "Venice",
            country: "Italy",
            latitude: 45.4408,
            longitude: 12.3155,
            description: "Unique city built on canals with rich history",
        },

        // Nepal
        {
            name: "Annapurna Base Camp",
            country: "Nepal",
            latitude: 28.5312,
            longitude: 83.392,
            description:
                "4000m in the himalayas, nice views of Annapurna range",
        },
        {
            name: "Pokhara",
            country: "Nepal",
            latitude: 28.0096,
            longitude: 84.1856,
            description: "Beautiful lakeside city with mountain views",
        },
        {
            name: "Ghandruk",
            country: "Nepal",
            latitude: 28.3894,
            longitude: 83.8103,
            description: "Traditional Gurung village with mountain panoramas",
        },
        {
            name: "Jhinu Danda",
            country: "Nepal",
            latitude: 28.7894,
            longitude: 83.8103,
            description: "Traditional Gurung village with mountain panoramas",
        },

        // India
        {
            name: "Rishikesh",
            country: "Uttarakhand, India",
            latitude: 30.0869,
            longitude: 78.2676,
            description: "Ganga river town, so amazing! Beatles visited here",
        },
        {
            name: "Agra",
            country: "UP, India",
            latitude: 27.1767,
            longitude: 78.0081,
            description: "Taj Mahal",
        },
        {
            name: "Varanasi",
            country: "UP, India",
            latitude: 25.3176,
            longitude: 82.9739,
            description: "Ancient city on the Ganges, most holy place in India",
        },
        {
            name: "Udaipur",
            country: "UP, India",
            latitude: 24.5854,
            longitude: 73.7125,
            description: "City of Lakes with stunning palaces",
        },
        {
            name: "Jaipur",
            country: "UP, India",
            latitude: 26.9124,
            longitude: 75.7873,
            description: "The Pink City with magnificent forts",
        },
        {
            name: "Hampi",
            country: "Karnataka, India",
            latitude: 15.335,
            longitude: 76.46,
            description:
                "Ruins of the ancient capital of the Vijayanagara Empire. 10/10 place to visit",
        },
        {
            name: "Kochi",
            country: "Kerala, India",
            latitude: 9.9312,
            longitude: 76.2673,
            description: "The best food I have ever eaten in my life",
        },

        {
            name: "Theni",
            country: "Tamil Nadu, India",
            latitude: 10.217,
            longitude: 77.7167,
            description: "Wild Elephants",
        },
        {
            name: "Chinnakanal",
            country: "Kerala, India",
            latitude: 9.7667,
            longitude: 76.7833,
            description: "Nice hill station with tea gardens",
        },
        {
            name: "Munnar",
            country: "Kerala, India",
            latitude: 10.0889,
            longitude: 77.0595,
            description:
                "Favourite place in india. Tea plantations, mountains, waterfalls, wild elephants",
        },
        {
            name: "Ahmedabad",
            country: "Gujarat, India",
            latitude: 23.0225,
            longitude: 72.5714,
            description: "Gandhi",
        },
        {
            name: "Mumbai",
            country: "Maharastra, India",
            latitude: 19.076,
            longitude: 72.8777,
            // description: "Financial capital and Bollywood hub",
        },
        {
            name: "Chandigarh",
            country: "Punjab, India",
            latitude: 30.7333,
            longitude: 76.7794,
            // description: "Planned city with modern architecture",
        },
        {
            name: "Kasol",
            country: "Himachal Pradesh, India",
            latitude: 32.0,
            longitude: 77.1833,
            description: "Himalayan village known for trekking and nature",
        },
        {
            name: "Manali",
            country: "Himachal Pradesh, India",
            latitude: 32.2396,
            longitude: 77.1887,
        },
        {
            name: "Spiti Valley",
            country: "Himachal Pradesh, India",
            latitude: 32.1153,
            longitude: 78.208,
            description: "Remote Himalayan valley with stunning landscapes",
        },
        {
            name: "Alappuzha",
            country: "India",
            latitude: 9.4981,
            longitude: 76.3388,
            description: "Backwaters and houseboat rides in Kerala",
        },

        // China
        {
            name: "Xi'an",
            country: "China",
            latitude: 34.3853,
            longitude: 109.2784,
            description: "Terracotta Warriors",
        },

        // Thailand
        {
            name: "Chiang Mai",
            country: "Thailand",
            latitude: 18.7883,
            longitude: 98.9853,
            description:
                "Cultural capital in the mountains of the north of thailand",
        },
        {
            name: "Bangkok",
            country: "Thailand",
            latitude: 13.7563,
            longitude: 100.5018,
        },

        // Cambodia
        {
            name: "Angkor Wat",
            country: "Cambodia",
            latitude: 13.4125,
            longitude: 103.8669,
            description: "Insane temple complex, the biggest in the world",
        },

        // Malaysia
        {
            name: "Melaka",
            country: "Malaysia",
            latitude: 2.1896,
            longitude: 102.2501,
            description: "Nice port city on the Malacca Strait",
        },

        // Vietnam
        {
            name: "Chau Ðoc",
            country: "Vietnam",
            latitude: 10.7008,
            longitude: 105.1119,
            description: "Mekong Delta town near Cambodia border",
        },
        {
            name: "Cu Chi Tunnels",
            country: "Vietnam",
            latitude: 10.8231,
            longitude: 106.6297,
            description: "Underground tunnels used during the Vietnam War",
        },
        {
            name: "Ben Tre",
            country: "Vietnam",
            latitude: 10.2431,
            longitude: 106.3757,
            description: "Island in the Mekong Delta",
        },

        // USA
        {
            name: "Newport",
            country: "Rhode Island, USA",
            latitude: 41.4901,
            longitude: -71.3128,
            description: "Historic coastal city with mansions",
        },
        {
            name: "Savannah",
            country: "Georgia, USA",
            latitude: 32.0835,
            longitude: -81.0998,
            description: "Historic Southern charm and architecture",
        },
        {
            name: "Charleston",
            country: "South Carolina, USA",
            latitude: 32.7765,
            longitude: -79.9311,
            // description: "Antebellum architecture and coastal beauty",
        },

        // Morocco
        {
            name: "Marrakech",
            country: "Morocco",
            latitude: 31.6295,
            longitude: -7.9811,
            description: "Red city with souks and riads",
        },
        {
            name: "Imlil",
            country: "Morocco",
            latitude: 31.1472,
            longitude: -6.814,
            description: "Berber village in the Atlas Mountains",
        },

        // Iceland
        {
            name: "Thingvellir",
            country: "Iceland",
            latitude: 64.2558,
            longitude: -21.1294,
            description: "Historic parliament site and national park",
        },
        {
            name: "Reykjavik",
            country: "Iceland",
            latitude: 64.1355,
            longitude: -21.8954,
            description: "Cold capital city",
        },
        {
            name: "Seljalandsfoss",
            country: "Iceland",
            latitude: 63.6156,
            longitude: -19.9925,
            description: "Iconic waterfall you can walk behind",
        },

        {
            name: "Selfoss",
            country: "Iceland",
            latitude: 63.9339,
            longitude: -20.9971,
            description: "Town in South Iceland near geysers",
        },
        {
            name: "Vik",
            country: "Iceland",
            latitude: 63.4187,
            longitude: -19.0059,
            description: "Black sand beaches and dramatic coastline",
        },

        // El Salvador
        {
            name: "Santa Ana",
            country: "El Salvador",
            latitude: 13.8942,
            longitude: -88.9598,
            description:
                "Colonial city with a big volcano that has a lake in the crater",
        },
        {
            name: "Juayúa",
            country: "El Salvador",
            latitude: 13.6431,
            longitude: -88.9453,
            description: "Coffee town with lots of waterfalls",
        },

        // Guatemala
        {
            name: "Volcan Del Fuego",
            country: "Guatemala",
            latitude: 14.5586,
            longitude: -90.7344,
            description: "Active volcano that erupts every 15 mins",
        },
        {
            name: "Lake Atitlán",
            country: "Guatemala",
            latitude: 14.6906,
            longitude: -91.5025,
            description: "Stunning volcanic lake with Mayan villages",
        },

        // Nicaragua
        {
            name: "Ometepe",
            country: "Nicaragua",
            latitude: 11.5,
            longitude: -85.6333,
            description: "Volcanic island in Lake Nicaragua",
        },
        {
            name: "León",
            country: "Nicaragua",
            latitude: 12.4348,
            longitude: -86.8779,
            description: "Volcano boarding",
        },

        // Colombia
        {
            name: "Guatapé",
            country: "Colombia",
            latitude: 6.2303,
            longitude: -75.1567,
            description: "Colorful town with famous El Peñón rock",
        },
        {
            name: "Bogotá",
            country: "Colombia",
            latitude: 4.711,
            longitude: -74.0721,
            description: "High-altitude capital with vibrant culture",
        },
        {
            name: "Salento",
            country: "Colombia",
            latitude: 4.6369,
            longitude: -75.5706,
            description:
                "Coffee region with colonial architecture and the tallest wax palm trees in the world \n You can also drink hot chocolate with cheese which is a bit weird",
        },
        {
            name: "Medellín",
            country: "Colombia",
            latitude: 6.2442,
            longitude: -75.5812,
            description:
                "City of eternal spring. \n the highlight was Comuna 13, once the most dangerous neighborhood in the world, now a cool community with street art and music",
        },
        {
            name: "Cartagena",
            country: "Colombia",
            latitude: 10.3932,
            longitude: -75.4832,
            description: "Caribbean colonial fortress city",
        },
        {
            name: "Tayrona",
            country: "Colombia",
            latitude: 11.3167,
            longitude: -74.0833,
            description: "National park with pristine beaches",
        },

        // Peru
        {
            name: "Huacachina",
            country: "Peru",
            latitude: -14.0875,
            longitude: -75.7639,
            description: "Desert oasis with sand dunes",
        },
        {
            name: "Arequipa",
            country: "Peru",
            latitude: -16.409,
            longitude: -71.5374,
            description: "Volcanic city",
        },
        {
            name: "Cusco",
            country: "Peru",
            latitude: -13.5319,
            longitude: -71.9675,
            description: "Ancient Inca capital",
        },
        {
            name: "Dead Womans Pass",
            country: "Peru",
            latitude: -13.1628,
            longitude: -73.5449,
            description: "Highest point on the Inca Trail",
        },
        {
            name: "Machu Picchu",
            country: "Peru",
            latitude: -13.1631,
            longitude: -72.545,
            description: "Lost city of the Incas",
        },
    ],
};
const countryFlags = {
    'Nepal': "🇳🇵",
    'India': "🇮🇳",
    'China': "🇨🇳",
    'Thailand': "🇹🇭",
    'Cambodia': "🇰🇭",
    'Malaysia': "🇲🇾",
    'Vietnam': "🇻🇳",
    "United States": "🇺🇸",
    'Morocco': "🇲🇦",
    'Iceland': "🇮🇸",
    "El Salvador": "🇸🇻",
    'Guatemala': "🇬🇹",
    'Nicaragua': "🇳🇮",
    'Colombia': "🇨🇴",
    'Peru': "🇵🇪",
    'Belgium': "🇧🇪",
    'France': "🇫🇷",
    "Netherlands": "🇳🇱",
    "United Kingdom": "🇬🇧",
    "Germany": "🇩🇪",
    "Poland": "🇵🇱",
    "Spain": "🇪🇸",
    "Portugal": "🇵🇹",
    "Italy": "🇮🇹",
    "Switzerland": "🇨🇭",
    "Hungary": "🇭🇺",
    "Slovakia": "🇸🇰",
    "Oman": "🇴🇲",
    "United Arab Emirates": "🇦🇪",
    "Qatar": "🇶🇦",
    "Honduras": "🇭🇳",
    "Mexico": "🇲🇽",
    "Liechtenstein": "🇱🇮",
    // Add regional flags for Indian states
    "Uttarakhand, India": "🇮🇳",
    "UP, India": "🇮🇳",
    "Karnataka, India": "🇮🇳",
    "Kerala, India": "🇮🇳",
    "Tamil Nadu, India": "🇮🇳",
    "Gujarat, India": "🇮🇳",
    "Maharastra, India": "🇮🇳",
    "Punjab, India": "🇮🇳",
    "Himachal Pradesh, India": "🇮🇳",
    // Add US state flags
    "Rhode Island, USA": "🇺🇸",
    "Georgia, USA": "🇺🇸",
    "South Carolina, USA": "🇺🇸",
};
function getCountryFlag(countryName) {
    // Try exact match first
    if (countryFlags[countryName]) {
        return countryFlags[countryName];
    }

    // Try to find a match for the main country name
    for (const [key, flag] of Object.entries(countryFlags)) {
        if (countryName.includes(key) || key.includes(countryName)) {
            return flag;
        }
    }

    return "🌍"; // Default world emoji if no flag found
}


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
                var citiesInCountry = travelData.cities.filter(city => city.country.includes(countryData.name));
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
    
    // Get country flag
    const flag = getCountryFlag(cityData.country);
    
    // Use local image based on exact city name (no formatting changes)
    const imageSrc = `images/${cityData.name}.jpg`;
    
    // Update panel content
    image.src = imageSrc;
    image.alt = cityData.name;
    name.textContent = cityData.name;
    country.textContent = `${flag} ${cityData.country}`;
    description.textContent = cityData.description || "Beautiful destination worth visiting.";
    date.textContent = "";
    
    // Add error handling for local images
    image.onerror = function() {
        // Fallback to a default image if local image doesn't exist
        this.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        this.alt = `${cityData.name} (image not available)`;
    };
    
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
    
    // Get country flag
    const flag = getCountryFlag(countryData.name);
    
    // Use local image for first city (no formatting changes)
    let imageSrc;
    if (cities.length > 0) {
        imageSrc = `images/${cities[0].name}.jpg`;
    } else {
        // Default fallback
        imageSrc = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
    
    // Update panel content
    image.src = imageSrc;
    image.alt = countryData.name;
    name.textContent = `${flag} ${countryData.name}`;
    
    if (cities.length == 0) {
        country.textContent = "Visited this country";
        description.textContent = "No photos uploaded for this country yet.";
    } else {
        country.textContent = `Places visited: ${cities.map(c => c.name).join(', ')}`;
        description.textContent = `Explored ${cities.length} amazing ${cities.length === 1 ? 'place' : 'places'} in this incredible country.`;
    }
    date.textContent = "";
    
    // Add error handling
    image.onerror = function() {
        this.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        this.alt = `${countryData.name} (image not available)`;
    };
    
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
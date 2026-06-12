// Language translations
const translations = {
    uz: {
        searchPlaceholder: "Shahar nomini kiriting...",
        currentDate: (date) => {
            const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
            const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
            return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        },
        feelsLike: "Hissiyat:",
        humidity: "Namlik:",
        windSpeed: "Shamol:",
        sunrise: "Chiqish",
        sunset: "Botish",
        forecast: "7 Kunlik Prognoz",
        prayers: "Ramazon Duolari",
        iftarTab: "Og'iz Ochar",
        sahurTab: "Og'iz Yopar",
        iftarTitle: "Og'iz Ochar Duosi",
        sahurTitle: "Og'iz Yopar Duosi"
    },
    ru: {
        searchPlaceholder: "Введите название города...",
        currentDate: (date) => {
            const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        },
        feelsLike: "Ощущается:",
        humidity: "Влажность:",
        windSpeed: "Ветер:",
        sunrise: "Восход",
        sunset: "Закат",
        forecast: "Прогноз на 7 дней",
        prayers: "Дуа Рамадана",
        iftarTab: "При разговении",
        sahurTab: "Перед постом",
        iftarTitle: "Дуа при разговении",
        sahurTitle: "Дуа перед постом"
    },
    tj: {
        searchPlaceholder: "Номи шахрро дохил кунед...",
        currentDate: (date) => {
            const days = ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Панҷшанба', 'Ҷума', 'Шанба'];
            const months = ['Январ', 'Февралӣ', 'Март', 'Апрел', 'Май', 'Июн', 'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'];
            return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        },
        feelsLike: "Ҳис мекунад:",
        humidity: "Намӣ:",
        windSpeed: "Бод:",
        sunrise: "Талуъ",
        sunset: "Ғуруб",
        forecast: "Пешгӯии 7 рӯзаи",
        prayers: "Дуои Рамазон",
        iftarTab: "Ифтор",
        sahurTab: "Саҳур",
        iftarTitle: "Дуои Ифтор",
        sahurTitle: "Дуои Саҳур"
    }
};

// Ramadan prayers data
const ramadanPrayers = {
    uz: {
        iftar: [
            {
                title: "Og'iz Ochar Duosi",
                text: "Алаахумма инни ли-ваджхика фасамту ва бика аманту ва алайка таваккалту ва бика хасамту, фағфир ли ма қаддамту ва ма аххарту ва ма асрарту ва ма алянту, Антал-Мухаддиму ва Антал-Му'аххиру, ла илаха илла Анта."
            }
        ],
        sahur: [
            {
                title: "Og'iz Yopar Duosi",
                text: "Нават-ту бисаввми ғадин мин шахри Рамазана ва-асбахту ала ниййати табаррукан ба-Аллахи та'ала ва-расулихи. Алаахумма яссирху ли ва-таҳаббаб-ху илайя ва-табаррак-ху ли."
            }
        ]
    },
    ru: {
        iftar: [
            {
                title: "Дуа при разговении",
                text: "О Аллах! Я постился ради Тебя, уверовал в Тебя, положился на Тебя и разговелся благодаря Твоему дару. Прости мне то, что я совершил раньше и позже, что я скрыл и что я открыл. Ты - Тот, Кто дает и Кто отнимает, Нет божества кроме Тебя."
            }
        ],
        sahur: [
            {
                title: "Дуа перед постом",
                text: "Я намереваюсь поститься завтра в месяц Рамадан и проснулся с намерением приблизиться к Аллаху и Его Посланнику. О Аллах! Облегчи мне пост, люби его для меня и благослови его для меня."
            }
        ]
    },
    tj: {
        iftar: [
            {
                title: "Дуои ифтор",
                text: "Алоҳумма инни ли-ваҷҳика фасамту ва бика аманту ва алайка таваккалту ва бика хасамту, фағфир ли ма қаддамту ва ма аххарту ва ма асрарту ва ма алянту, Антал-Мухаддиму ва Антал-Му'аххиру, ла илаҳа илла Анта."
            }
        ],
        sahur: [
            {
                title: "Дуои саҳур",
                text: "Навайту бисавми ғадин мин шахри Рамазана ва-асбахту ала ниййати табаррукан ба-Аллахи та'ала ва-расулихи. Алоҳумма яссирху ли ва-таҳаббаб-ху илайя ва-табаррак-ху ли."
            }
        ]
    }
};

// Mock weather data for initial load
const mockWeatherData = {
    location: {
        name: "Tashkent",
        country: "Uzbekistan",
        latitude: 41.2995,
        longitude: 69.2401
    },
    current: {
        temp: 24,
        feelsLike: 22,
        condition: "Sunny",
        humidity: 65,
        windSpeed: 12,
        icon: "☀️"
    },
    forecast: [
        { date: new Date(), maxTemp: 26, minTemp: 18, condition: "Sunny", icon: "☀️", humidity: 60, windSpeed: 10, sunrise: "06:30", sunset: "18:45" },
        { date: new Date(Date.now() + 86400000), maxTemp: 25, minTemp: 17, condition: "Cloudy", icon: "☁️", humidity: 70, windSpeed: 12, sunrise: "06:29", sunset: "18:46" },
        { date: new Date(Date.now() + 172800000), maxTemp: 23, minTemp: 16, condition: "Rainy", icon: "🌧️", humidity: 80, windSpeed: 15, sunrise: "06:28", sunset: "18:47" },
        { date: new Date(Date.now() + 259200000), maxTemp: 22, minTemp: 15, condition: "Cloudy", icon: "☁️", humidity: 75, windSpeed: 14, sunrise: "06:27", sunset: "18:48" },
        { date: new Date(Date.now() + 345600000), maxTemp: 24, minTemp: 17, condition: "Sunny", icon: "☀️", humidity: 65, windSpeed: 11, sunrise: "06:26", sunset: "18:49" },
        { date: new Date(Date.now() + 432000000), maxTemp: 27, minTemp: 19, condition: "Sunny", icon: "☀️", humidity: 60, windSpeed: 9, sunrise: "06:25", sunset: "18:50" },
        { date: new Date(Date.now() + 518400000), maxTemp: 28, minTemp: 20, condition: "Sunny", icon: "☀️", humidity: 55, windSpeed: 8, sunrise: "06:24", sunset: "18:51" }
    ],
    sun: {
        sunrise: "06:30",
        sunset: "18:45"
    }
};

let currentLanguage = 'uz';
let currentTab = 'iftar';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('uz');
    displayWeather(mockWeatherData);
    displayForecast(mockWeatherData.forecast);
    displayPrayers('iftar');
    setupEventListeners();
    
    // Auto-load weather for user's location
    loadUserLocation();
});

// Load weather for user's geolocation
function loadUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                console.log('Geolocation error:', error);
                // Use default location if geolocation fails
            }
        );
    }
}

// Fetch weather by coordinates
async function fetchWeatherByCoords(lat, lon) {
    try {
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=7`
        );
        
        if (!weatherResponse.ok) throw new Error('Ob-havo ma\'lumotlari topilmadi');
        
        const weatherData = await weatherResponse.json();
        
        // Get location name using reverse geocoding
        const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        
        let locationName = 'Unknown';
        if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            locationName = geoData.address?.city || geoData.address?.town || geoData.address?.village || 'Unknown';
        }
        
        const location = {
            name: locationName,
            lat: lat,
            lon: lon
        };
        
        const processedData = processWeatherData(location, weatherData);
        displayWeather(processedData);
        displayForecast(processedData.forecast);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Event Listeners
function setupEventListeners() {
    const languageSelect = document.getElementById('languageSelect');
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('locationInput');
    const tabButtons = document.querySelectorAll('.tab-btn');

    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage(currentLanguage);
    });

    searchBtn.addEventListener('click', () => {
        const location = locationInput.value;
        if (location.trim()) {
            searchWeather(location);
        }
    });

    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            displayPrayers(currentTab);
        });
    });
}

// Search weather by location
async function searchWeather(locationName) {
    try {
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.disabled = true;
        searchBtn.textContent = '⏳ Qidirilmoqda...';
        
        // Use OpenStreetMap Nominatim for geocoding
        const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`
        );
        
        if (!geoResponse.ok) throw new Error('Shahar topilmadi');
        
        const geoData = await geoResponse.json();
        if (!geoData || geoData.length === 0) {
            alert(`"${locationName}" shahar topilmadi. Boshqa nom bilan urinib ko'ring.`);
            searchBtn.disabled = false;
            searchBtn.textContent = '🔍';
            return;
        }
        
        const location = geoData[0];
        const lat = parseFloat(location.lat);
        const lon = parseFloat(location.lon);
        
        // Fetch weather data using Open-Meteo API
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=7`
        );
        
        if (!weatherResponse.ok) throw new Error('Ob-havo ma\'lumotlari topilmadi');
        
        const weatherData = await weatherResponse.json();
        
        // Process and display the data
        const processedData = processWeatherData(location, weatherData);
        displayWeather(processedData);
        displayForecast(processedData.forecast);
        
        searchBtn.disabled = false;
        searchBtn.textContent = '🔍';
    } catch (error) {
        console.error('Xatolik:', error);
        alert(`Xatolik: ${error.message}`);
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.disabled = false;
        searchBtn.textContent = '🔍';
    }
}

// Process weather data from Open-Meteo API
function processWeatherData(location, data) {
    const current = data.current;
    const daily = data.daily;
    
    // Get weather condition text
    const conditionText = getWeatherCondition(current.weather_code);
    const weatherIcon = getWeatherEmoji(current.weather_code);
    
    // Process forecast
    const forecast = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(daily.time[i]);
        const sunrise = new Date(daily.sunrise[i]);
        const sunset = new Date(daily.sunset[i]);
        
        forecast.push({
            date: date,
            maxTemp: Math.round(daily.temperature_2m_max[i]),
            minTemp: Math.round(daily.temperature_2m_min[i]),
            condition: getWeatherCondition(daily.weather_code[i]),
            icon: getWeatherEmoji(daily.weather_code[i]),
            humidity: current.relative_humidity_2m,
            windSpeed: Math.round(current.wind_speed_10m),
            sunrise: formatTimeFromDate(sunrise),
            sunset: formatTimeFromDate(sunset)
        });
    }
    
    return {
        location: {
            name: location.name || location.display_name.split(',')[0],
            country: location.address?.country || 'Unknown',
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lon)
        },
        current: {
            temp: Math.round(current.temperature_2m),
            feelsLike: Math.round(current.temperature_2m - 2),
            condition: conditionText,
            humidity: current.relative_humidity_2m,
            windSpeed: Math.round(current.wind_speed_10m),
            icon: weatherIcon
        },
        forecast: forecast,
        sun: {
            sunrise: formatTimeFromDate(new Date(daily.sunrise[0])),
            sunset: formatTimeFromDate(new Date(daily.sunset[0]))
        }
    };
}

// Get weather condition text from WMO code
function getWeatherCondition(code) {
    const conditions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Foggy',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with hail',
        99: 'Thunderstorm with hail'
    };
    return conditions[code] || 'Unknown';
}

// Get weather emoji from WMO code
function getWeatherEmoji(code) {
    if (code === 0) return '☀️';
    if (code === 1 || code === 2) return '🌤️';
    if (code === 3) return '☁️';
    if (code === 45 || code === 48) return '🌫️';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 86) return '❄️';
    if (code >= 95 && code <= 99) return '⛈️';
    return '🌤️';
}

// Format time from Date object
function formatTimeFromDate(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Update language
function updateLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    document.getElementById('locationInput').placeholder = t.searchPlaceholder;
    document.getElementById('currentDate').textContent = t.currentDate(new Date());
    
    // Update tab labels
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns[0]) tabBtns[0].textContent = t.iftarTab;
    if (tabBtns[1]) tabBtns[1].textContent = t.sahurTab;
    
    // Update section titles
    const titles = document.querySelectorAll('.section-title');
    if (titles[0]) titles[0].textContent = '☀️ Quyosh Vaqtlari';
    if (titles[1]) titles[1].textContent = `📅 ${t.forecast}`;
    if (titles[2]) titles[2].textContent = `🌙 ${t.prayers}`;
    
    // Update detail labels
    const detailLabels = document.querySelectorAll('.detail-label');
    if (detailLabels[0]) detailLabels[0].textContent = t.feelsLike;
    if (detailLabels[1]) detailLabels[1].textContent = t.humidity;
    if (detailLabels[2]) detailLabels[2].textContent = t.windSpeed;
    
    // Update sun time labels
    const sunTimeLabels = document.querySelectorAll('.sun-time-label');
    if (sunTimeLabels[0]) sunTimeLabels[0].textContent = t.sunrise;
    if (sunTimeLabels[1]) sunTimeLabels[1].textContent = t.sunset;
    
    // Redisplay prayers with new language
    displayPrayers(currentTab);
}

// Display current weather
function displayWeather(data) {
    document.getElementById('locationName').textContent = data.location.name;
    document.getElementById('currentTemp').textContent = `${data.current.temp}°C`;
    document.getElementById('weatherIcon').textContent = data.current.icon;
    document.getElementById('weatherCondition').textContent = data.current.condition;
    document.getElementById('feelsLike').textContent = `${data.current.feelsLike}°C`;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.current.windSpeed} km/h`;
    document.getElementById('sunriseTime').textContent = data.sun.sunrise;
    document.getElementById('sunsetTime').textContent = data.sun.sunset;
    document.getElementById('currentDate').textContent = translations[currentLanguage].currentDate(new Date());
}

// Display 7-day forecast
function displayForecast(forecast) {
    const forecastGrid = document.getElementById('forecastGrid');
    forecastGrid.innerHTML = '';

    forecast.forEach(day => {
        const dayOfWeek = getDayName(day.date, currentLanguage);
        const dateStr = day.date.getDate();
        
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${dayOfWeek}</div>
            <div class="forecast-date">${dateStr}</div>
            <div class="forecast-icon">${day.icon}</div>
            <div class="forecast-temps">
                <span class="forecast-max">${day.maxTemp}°</span>
                <span class="forecast-min">${day.minTemp}°</span>
            </div>
            <div class="forecast-condition">${day.condition}</div>
            <div class="forecast-details">
                <span>💧 ${day.humidity}%</span>
                <span>💨 ${day.windSpeed}km/h</span>
            </div>
        `;
        forecastGrid.appendChild(card);
    });
}

// Display prayers
function displayPrayers(tab) {
    const prayersContainer = document.getElementById('prayersContainer');
    prayersContainer.innerHTML = '';

    const prayers = ramadanPrayers[currentLanguage][tab] || [];
    
    prayers.forEach(prayer => {
        const card = document.createElement('div');
        card.className = 'prayer-card';
        card.innerHTML = `
            <div class="prayer-title">${prayer.title}</div>
            <div class="prayer-text">${prayer.text}</div>
        `;
        prayersContainer.appendChild(card);
    });
}

// Helper function to get day name
function getDayName(date, lang) {
    const daysUz = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    const daysRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const daysTj = ['Якш', 'Душ', 'Сеш', 'Чор', 'Панҷ', 'Ҷум', 'Шан'];
    
    const dayIndex = date.getDay();
    if (lang === 'ru') return daysRu[dayIndex];
    if (lang === 'tj') return daysTj[dayIndex];
    return daysUz[dayIndex];
}
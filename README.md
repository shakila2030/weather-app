# 🌤️ Simple Weather Reporter - Sri Lanka 🇱🇰

Welcome to **Simple Weather Reporter**, a user-friendly weather app designed for Sri Lanka! 🌴☀️⛅ This web application allows users to:

- 🔍 **Select a District** from all 25 districts in Sri Lanka  
- 🏙️ **Choose a City** under the selected district  
- 📡 **View Real-Time Weather Conditions** of that city  

---

## 🖼️ Features Overview

Once a city is selected, the app fetches and displays the following weather data in an engaging and icon-rich layout:

| Weather Info     | Description                              | Example Icon |
|------------------|------------------------------------------|--------------|
| ☁️ **Condition**     | Cloudy, Sunny, Rainy, etc.                | `☁️`, `🌞`, `🌧️` |
| 🌡️ **Temperature**  | Temperature in Celsius (`°C`)             | `🌡️`         |
| ☁️ **Cloud**        | Cloud coverage in percentage              | `☁️`         |
| 💧 **Humidity**     | Humidity level in percentage              | `💧`         |
| 🌫️ **Visibility**   | Visibility range in kilometers            | `🌫️`         |
| 🌞 **UV Index**     | UV radiation index                        | `🌞`         |
| 📈 **Pressure**     | Atmospheric pressure in hPa               | `📈`         |
| 🌬️ **Wind Speed**  | Wind speed in km/h                        | `🌬️`         |

---

## 🧠 How It Works

1. 🔽 User selects a **District** (e.g., *Colombo*, *Kandy*, *Galle*)
2. 🏙️ A list of **cities** under that district is populated
3. ☁️ User clicks **"Check Weather"** to view weather data for the selected city
4. 📊 Weather information is displayed with animated icons and a clean UI

---

## 🧩 Technologies Used

### 🔧 Backend (Spring Boot):
- Java + Spring Boot
- REST API to fetch weather data from **[WeatherAPI](https://www.weatherapi.com/)**
- JSON parsing with `org.json`
- CORS enabled for frontend connection

### 💻 Frontend (React):
- ReactJS
- `react-select` for stylish dropdowns
- `react-icons` for weather condition icons
- Axios for HTTP requests

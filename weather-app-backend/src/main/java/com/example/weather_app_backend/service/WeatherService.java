package com.example.weather_app_backend.service;

import com.example.weather_app_backend.dto.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.json.JSONObject;

@Service
public class WeatherService {

    @Value("${weather.api.url}")
    private String apiUrl;

    @Value("${weather.api.key}")
    private String apiKey;

    public WeatherResponse getWeatherForCity(String city) {
        try {
            String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("key", apiKey)
                    .queryParam("q", city)
                    .toUriString();

            RestTemplate restTemplate = new RestTemplate();
            String jsonResponse = restTemplate.getForObject(url, String.class);

            JSONObject obj = new JSONObject(jsonResponse).getJSONObject("current");

            WeatherResponse response = new WeatherResponse();
            response.setTemperature(obj.getDouble("temp_c"));
            response.setHumidity(obj.getInt("humidity"));
            response.setWindSpeed(obj.getDouble("wind_kph"));
            response.setUvIndex(obj.getDouble("uv"));
            response.setCondition(obj.getJSONObject("condition").getString("text"));
            response.setCloud(obj.getInt("cloud"));
            response.setVisibility(obj.getDouble("vis_km"));
            response.setPressure(obj.getInt("pressure_mb"));

            return response;
        } catch (Exception e) {
            throw new RuntimeException("Failed to get weather for city: " + city);
        }
    }


}


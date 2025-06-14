package com.example.weather_app_backend.controller;

import com.example.weather_app_backend.dto.WeatherResponse;
import com.example.weather_app_backend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*") // Allow frontend calls
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/{city}")
    public WeatherResponse getWeatherForCity(@PathVariable String city) {
        return weatherService.getWeatherForCity(city);
    }

}

package com.example.weather_app_backend.dto;

import lombok.Data;

@Data
public class WeatherResponse {
    private double temperature;
    private int humidity;
    private double windSpeed;
    private double uvIndex;
    private String condition;
    private int cloud;
    private double visibility;
    private int pressure;
}

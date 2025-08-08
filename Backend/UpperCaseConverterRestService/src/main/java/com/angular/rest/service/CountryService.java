package com.angular.rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.angular.rest.dto.CountryDto;

@Service
public class CountryService {

    public List<CountryDto> getCountries() {
        List<CountryDto> countries = new ArrayList<>();

        countries.add(new CountryDto("India", "Asia", "New Delhi", "IN"));
        countries.add(new CountryDto("Germany", "Europe", "Berlin", "DE"));
        countries.add(new CountryDto("Brazil", "South America", "Brasília", "BR"));
        countries.add(new CountryDto("Australia", "Oceania", "Canberra", "AU"));
        countries.add(new CountryDto("Canada", "North America", "Ottawa", "CA"));
        countries.add(new CountryDto("Japan", "Asia", "Tokyo", "JP"));
        countries.add(new CountryDto("South Africa", "Africa", "Pretoria", "ZA"));
        countries.add(new CountryDto("United States", "North America", "Washington, D.C.", "US"));
        countries.add(new CountryDto("France", "Europe", "Paris", "FR"));
        countries.add(new CountryDto("Russia", "Europe/Asia", "Moscow", "RU"));
        countries.add(new CountryDto("Mexico", "North America", "Mexico City", "MX"));
        countries.add(new CountryDto("Argentina", "South America", "Buenos Aires", "AR"));
        countries.add(new CountryDto("China", "Asia", "Beijing", "CN"));
        countries.add(new CountryDto("Egypt", "Africa", "Cairo", "EG"));
        countries.add(new CountryDto("Italy", "Europe", "Rome", "IT"));

        return countries;
    }
}

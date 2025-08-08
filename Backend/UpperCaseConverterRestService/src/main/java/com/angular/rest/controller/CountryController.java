package com.angular.rest.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.rest.dto.CountryDto;
import com.angular.rest.service.CountryService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 4800)
public class CountryController {

    private final CountryService countryService;

    // Constructor injection
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/countries")
    public List<CountryDto> getCountries() {
        return countryService.getCountries();
    }
}


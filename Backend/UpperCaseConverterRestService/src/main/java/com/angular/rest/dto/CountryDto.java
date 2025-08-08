package com.angular.rest.dto;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class CountryDto {
    private String name;
    private String region;
    private String capital;
    private String countryCode;
}

package com.angular.rest.dto;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String model;
    private Double price;
}

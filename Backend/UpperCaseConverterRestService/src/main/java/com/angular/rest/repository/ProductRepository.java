package com.angular.rest.repository;

import com.angular.rest.dto.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
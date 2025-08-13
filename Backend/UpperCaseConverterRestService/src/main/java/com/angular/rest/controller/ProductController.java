package com.angular.rest.controller;

import com.angular.rest.dto.Product;
import com.angular.rest.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // Optional: allow Angular frontend to access this API
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // GET all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // GET product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
    }

    // POST new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // PUT update product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer id, @RequestBody Product updatedProduct) {
        return productRepository.findById(id)
            .map(existingProduct -> {
                existingProduct.setName(updatedProduct.getName());
                existingProduct.setModel(updatedProduct.getModel());
                existingProduct.setPrice(updatedProduct.getPrice());
                Product savedProduct = productRepository.save(existingProduct);
                return ResponseEntity.ok(savedProduct);
            }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE product
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

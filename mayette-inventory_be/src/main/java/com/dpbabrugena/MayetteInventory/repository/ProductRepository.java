package com.dpbabrugena.MayetteInventory.repository;

import com.dpbabrugena.MayetteInventory.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

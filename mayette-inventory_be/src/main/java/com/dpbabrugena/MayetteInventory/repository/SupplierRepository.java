package com.dpbabrugena.MayetteInventory.repository;

import com.dpbabrugena.MayetteInventory.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}

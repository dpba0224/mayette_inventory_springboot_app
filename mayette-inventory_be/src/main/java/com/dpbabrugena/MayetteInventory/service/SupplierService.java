package com.dpbabrugena.MayetteInventory.service;

import com.dpbabrugena.MayetteInventory.dto.CategoryDTO;
import com.dpbabrugena.MayetteInventory.dto.Response;
import com.dpbabrugena.MayetteInventory.dto.SupplierDTO;

public interface SupplierService {

    Response addSupplier(SupplierDTO supplierDTO);
    Response updateSupplier(Long id, SupplierDTO supplierDTO);
    Response getAllSuppliers();
    Response getSupplierById(Long id);
    Response deleteSupplier(Long id);

}

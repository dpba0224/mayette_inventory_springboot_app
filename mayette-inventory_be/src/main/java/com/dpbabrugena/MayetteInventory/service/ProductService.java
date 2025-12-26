package com.dpbabrugena.MayetteInventory.service;

import com.dpbabrugena.MayetteInventory.dto.ProductDTO;
import com.dpbabrugena.MayetteInventory.dto.Response;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {
    Response saveProduct(ProductDTO productDTO, MultipartFile imageFile);
    Response updateProduct(ProductDTO productDTO, MultipartFile imageFile);
    Response getAllProducts();
    Response getProductById(Long id);
    Response deleteProduct(Long id);
}

package com.dpbabrugena.MayetteInventory.service;

import com.dpbabrugena.MayetteInventory.dto.CategoryDTO;
import com.dpbabrugena.MayetteInventory.dto.Response;

public interface CategoryService {

    Response createCategory(CategoryDTO categoryDTO);
    Response getAllCategories();
    Response getCategoryById(Long id);
    Response updateCategory(Long id, CategoryDTO categoryDTO);
    Response deleteCategory(Long id);

}

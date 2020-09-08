import { Request, Response } from "express";
import {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./ProductsService";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";

export const handleFindAllProducts = (request: Request, response: Response) => {
  try {
    const products = findAllProducts();
    return response.json(products);
  } catch (error) {
    return response.status(404).json({
      message: error.toString(),
    });
  }
};

export const handleFindProductById = (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const product = findProductById(id);
    return response.json(product);
  } catch (error) {
    return response.status(404).json({
      message: error.toString(),
    });
  }
};

export const handleCreateProduct = (request: Request, response: Response) => {
  const createProductDto: CreateProductDto = request.body;
  try {
    const product = createProduct(createProductDto);
    return response.json(product);
  } catch (error) {
    return response.status(404).json({
      message: error.toString(),
    });
  }
};

export const handleUpdateProduct = (request: Request, response: Response) => {
  const { id } = request.params;
  const updateProductDto: UpdateProductDto = request.body;
  try {
    const product = updateProduct(id, updateProductDto);
    return response.json(product);
  } catch (error) {
    return response.status(404).json({
      message: error.toString(),
    });
  }
};

export const handleDeleteProduct = (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    deleteProduct(id);
    return response.json();
  } catch (error) {
    return response.status(404).json({
      message: error.toString(),
    });
  }
};

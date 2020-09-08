import { Request, Response } from "express";
import { ProductsService } from "./ProductsService";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";

export class ProductsController {
  private productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  findAll(request: Request, response: Response) {
    try {
      const products = this.productsService.findAll();
      return response.json(products);
    } catch (error) {
      return response.status(404).json({
        message: error.toString(),
      });
    }
  }

  findById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const product = this.productsService.findById(id);
      return response.json(product);
    } catch (error) {
      return response.status(404).json({
        message: error.toString(),
      });
    }
  }

  create(request: Request, response: Response) {
    const createProductDto: CreateProductDto = request.body;
    try {
      const product = this.productsService.create(createProductDto);
      return response.json(product);
    } catch (error) {
      return response.status(404).json({
        message: error.toString(),
      });
    }
  }

  update(request: Request, response: Response) {
    const { id } = request.params;
    const updateProductDto: UpdateProductDto = request.body;
    try {
      const product = this.productsService.update(id, updateProductDto);
      return response.json(product);
    } catch (error) {
      return response.status(404).json({
        message: error.toString(),
      });
    }
  }

  delete(request: Request, response: Response) {
    const { id } = request.params;
    try {
      this.productsService.delete(id);
      return response.json();
    } catch (error) {
      return response.status(404).json({
        message: error.toString(),
      });
    }
  }
}

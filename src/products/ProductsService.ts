import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
import { Product } from "./interfaces/Product";

export class ProductsService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product {
    const product = this.findProductById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const product = {
      id: this.generateProductId(),
      ...createProductDto,
    };

    if (!product.name) {
      throw new Error('Property "name" is required.');
    }

    this.products.push(product);

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto): Product {
    const product = this.findProductById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    if (updateProductDto.name) {
      product.name = updateProductDto.name;
    }
    if (updateProductDto.description) {
      product.description = updateProductDto.description;
    }
    if (updateProductDto.quantity) {
      product.quantity = updateProductDto.quantity;
    }

    return product;
  }

  delete(id: string): void {
    const product = this.findProductById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    this.products = this.products.filter((product) => product.id !== id);
  }

  private findProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  private generateProductId() {
    return new Date().getTime().toString();
  }
}

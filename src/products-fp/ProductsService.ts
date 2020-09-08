import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
import { Product } from "./interfaces/Product";

let products: Product[] = [];

export const findAllProducts = (): Product[] => {
  return products;
};

export const findProductById = (id: string): Product => {
  const product = findById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  return product;
};

export const createProduct = (createProductDto: CreateProductDto): Product => {
  const product = {
    id: generateId(),
    ...createProductDto,
  };

  if (!product.name) {
    throw new Error('Property "name" is required.');
  }

  products.push(product);

  return product;
};

export const updateProduct = (
  id: string,
  updateProductDto: UpdateProductDto
): Product => {
  const product = findById(id);

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
};

export const deleteProduct = (id: string): void => {
  const product = findById(id);

  if (!product) {
    throw new Error("Product not found.");
  }

  products = products.filter((product) => product.id !== id);
};

const findById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

const generateId = () => {
  return new Date().getTime().toString();
};

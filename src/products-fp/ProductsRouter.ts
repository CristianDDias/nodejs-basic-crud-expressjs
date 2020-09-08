import { Router } from "express";
import {
  handleFindAllProducts,
  handleFindProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} from "./ProductsController";

const router = Router();

router.get("/products", handleFindAllProducts);
router.get("/products/:id", handleFindProductById);
router.post("/products", handleCreateProduct);
router.put("/products/:id", handleUpdateProduct);
router.delete("/products/:id", handleDeleteProduct);

export default router;

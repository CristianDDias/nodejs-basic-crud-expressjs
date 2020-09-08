import { Router } from "express";
import { ProductsService } from "./ProductsService";
import { ProductsController } from "./ProductsController";

const router = Router();

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

router.get("/products", (request, response) =>
  productsController.findAll(request, response)
);
router.get("/products/:id", (request, response) =>
  productsController.findById(request, response)
);
router.post("/products", (request, response) =>
  productsController.create(request, response)
);
router.put("/products/:id", (request, response) =>
  productsController.update(request, response)
);
router.delete("/products/:id", (request, response) =>
  productsController.delete(request, response)
);

export default router;

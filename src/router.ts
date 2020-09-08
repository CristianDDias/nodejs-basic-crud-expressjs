import { Router } from "express";
import productsRouter from "./products-fp/ProductsRouter";

const router = Router();
router.use(productsRouter);

export default router;

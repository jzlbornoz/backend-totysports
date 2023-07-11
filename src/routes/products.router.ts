import { Router, Response, Request, NextFunction, request } from "express";
import { ProductServices } from "../services/products.services";
import { JerseyModel } from "../interfaces/Jersey.model";
import { validatorHandler } from "../middlewares/validator.handler";
import { createProductSchema, getProductSchema, updateProductSchema } from "../schemas/product.schema";

const router = Router();
const services = new ProductServices();


// -- Get
router.get('/',
    async (req: Request, res: Response) => {
        const products = await services.getAllProducts();
        res.status(200).json(products);
    })

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const products = await services.findProduct(id);
        res.status(200).json(products);
    })

// -- Create
router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        const payload: JerseyModel = req.body;
        const newProduct = await services.addProduct(payload);
        if (newProduct) {
            res.status(201).json(newProduct);
        } else {
            res.status(404).json({
                message: "Fatal error"
            })
        }
    })

// -- Update
router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (request: Request, res: Response, next: NextFunction) => {
        const payload = request.body;
        const { id } = request.params;
        const productToUpdate = await services.findProduct(id);

        if (productToUpdate) {
            res.status(201).json(productToUpdate);
        }
    }

    // Falta por terminar
)

module.exports = router;
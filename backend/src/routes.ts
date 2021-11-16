import { Router } from "express";
import { CreateQuoteController } from "./controllers/CreateQuoteController";
import { FindQuoteController } from "./controllers/FindQuoteController";

const router = Router();

router.post("/quote/create", new CreateQuoteController().handle);
router.get("/quote/find/:id", new FindQuoteController().handle);

export { router }
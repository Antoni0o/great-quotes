import { Router } from "express";
import { CreateQuoteController } from "./controllers/CreateQuoteController";
import { FindQuoteController } from "./controllers/FindQuoteController";
import { GetRandomQuoteController } from "./controllers/GetRandomQuoteController";

const router = Router();

router.post("/quote/create", new CreateQuoteController().handle);
router.get("/quote/find/:id", new FindQuoteController().handle);
router.get("/quote/find", new GetRandomQuoteController().handle);

export { router }
import { Request, Response } from "express";
import { CreateQuoteService } from "../services/CreateQuoteService";

class CreateQuoteController {
  async handle(req: Request, res: Response) {
    const { quote, author } = req.body;
    
    const service = new CreateQuoteService;

    const result = await service.execute(quote, author);

    return res.status(201).json(result);
  }
}

export { CreateQuoteController };
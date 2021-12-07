import { Request, Response } from "express";
import { FindQuoteService } from "../services/FindQuoteService";

class GetRandomQuoteController { 
  async handle(req: Request, res: Response) {
    const id = Math.floor(Math.random() * 10);

    const service = new FindQuoteService;

    
    const result = await service.execute(id);
    
    if(!result) {
      return res.status(404).json({ error: "Quote not found" });
    }

    return res.json(result);
  }
}

export { GetRandomQuoteController }
import { Request, Response } from "express";
import { CountQuotesService } from "../services/CountQuotesService";

class CountQuotesController { 
  async handle(req: Request, res: Response) {
    const service = new CountQuotesService;
    
    const result = await service.execute();
    
    return res.json(result);
  }
}

export { CountQuotesController }
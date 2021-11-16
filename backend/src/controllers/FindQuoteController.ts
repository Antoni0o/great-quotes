import { Request, Response } from "express";
import { FindQuoteService } from "../services/FindQuoteService";

class FindQuoteController { 
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    let parsedId = parseInt(id);

    const service = new FindQuoteService;

    const result = await service.execute(parsedId);

    return res.json(result);
  }
}

export { FindQuoteController }
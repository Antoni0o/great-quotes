import { Request, Response } from "express";
import { GetQuoteService } from "../services/GetQuoteService";

class GetQuoteController { 
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    let parsedId = parseInt(id);

    const service = new GetQuoteService;

    const result = await service.execute(parsedId);

    return res.json(result);
  }
}

export { GetQuoteController }
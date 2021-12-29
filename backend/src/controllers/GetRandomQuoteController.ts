import axios from "axios";
import { Request, Response } from "express";

import { FindQuoteService } from "../services/FindQuoteService";

class GetRandomQuoteController { 
  async handle(req: Request, res: Response) {
    const url = "http://localhost:4000/quote/count"

    const { data } = await axios.get(url)

    const findQuoteService = new FindQuoteService;
    
    const id = Math.floor(Math.random() * data._all) + 1;
    
    const result = await findQuoteService.execute(id);
    
    return res.json(result);
  }
}

export { GetRandomQuoteController }
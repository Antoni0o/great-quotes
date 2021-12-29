import axios from "axios";
import { Request, Response } from "express";

import { GetQuoteService } from "../services/GetQuoteService";

class GetRandomQuoteController { 
  async handle(req: Request, res: Response) {
    const url = "http://localhost:4000/quote/count"
  
    const { data } = await axios.get(url)

    const findQuoteService = new GetQuoteService;
    
    const id = Math.floor(Math.random() * data._all) + 1;
    
    const result = await findQuoteService.execute(Number(id));
    
    return res.json(result);
  }
}

export { GetRandomQuoteController }
import { AppError } from "../errors/AppError";
import prismaClient from "../prisma";

class CreateQuoteService {
  async execute(quote: string, author: string) {
    const text = await prismaClient.quote.create({
      data: {
        quote, 
        author
      }
    });

    if(!text) {
      throw new AppError("Something wrong! Quote not created!", 400);
    }

    return text;
  }
}

export { CreateQuoteService };
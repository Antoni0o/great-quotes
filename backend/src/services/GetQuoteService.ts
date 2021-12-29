import { AppError } from "../errors/AppError";
import prismaClient from "../prisma";

class GetQuoteService {
  async execute(id: number) {
    const quote = await prismaClient.quote.findFirst({
      where: {
        id: id,
      },
    });

    if(!quote) {
      throw new AppError("Quote not found!", 404)
    }

    return quote;
  }
}

export { GetQuoteService };
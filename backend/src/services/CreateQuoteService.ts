import prismaClient from "../prisma";

class CreateQuoteService {
  async execute(quote: string, author: string) {
    const text = await prismaClient.quote.create({
      data: {
        quote, 
        author
      }
    });

    return text;
  }
}

export { CreateQuoteService };
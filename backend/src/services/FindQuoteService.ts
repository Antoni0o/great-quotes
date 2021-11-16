import prismaClient from "../prisma";

class FindQuoteService {
  async execute(id: number) {
    const quote = await prismaClient.quote.findFirst({
      where: {
        id: id,
      },
    });

    return quote;
  }
}

export { FindQuoteService };
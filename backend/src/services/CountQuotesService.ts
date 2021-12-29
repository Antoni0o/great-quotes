import prismaClient from "../prisma";

class CountQuotesService {
  async execute() {
    const quotes = await prismaClient.quote.count({
      select: {
        _all: true
      }
    });

    return quotes;
  }
}

export { CountQuotesService };
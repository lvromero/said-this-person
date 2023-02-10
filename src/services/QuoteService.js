const quoteRepository = import("../repositories/QuoteRepository")

function getServiceQuote() {
    quoteRepository.getRepositoryQuote()
}

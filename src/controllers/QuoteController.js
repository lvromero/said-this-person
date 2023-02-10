const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {
  res.send(getServiceQuote())
})

router.post("/", (req, res) => {//this is for post//
  console.log(req.body)
  res.send({result: "Saved"})
})

router.get("/:id", (req, res) => {//this is with id//
  console.log(req.params.id)
  res.send(getServiceQuote())
})

function getServiceQuote() {
  return getRepositoryQuote()
}

function getRepositoryQuote() {
  const quote = {
      id:1,
      quote:"i love my sisters",
      creationDate: "2023-01-14"
  }
  return quote
}

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}


module.exports = router
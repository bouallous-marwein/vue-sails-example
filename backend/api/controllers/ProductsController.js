module.exports = {

  /**
   * @param req
   * @param res
   */
  get: (req, res) => {
    Product.find().populate('user').exec((error, products) => {
      if (error) return res.serverError(error)

      if (products) return res.json(products)
    })
  }
}

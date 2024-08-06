function validationMiddleware(schema) {
  return (req, res, next) => {
    let result = schema.validate(req.body);

    if (result?.error) {
      const message = result.error?.details?.[0]?.message;

      return res.status(400).json({ status: false, message });
    }

    next();
  };
}

module.exports = {
  validationMiddleware,
};

function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({
    ok: false,
    error: "erro_interno"
  });
}

module.exports = errorHandler;
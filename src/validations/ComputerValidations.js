const yup = require("yup");

module.exports = {
  store(req, res, next) {
    const schema = yup.object().shape({
      /* name: yup.string().required(),
      login: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      shutdownDate: yup.date(), */
    });

    schema
      .validate(req.body)
      .then(() => {
        next();
      })
      .catch((error) => {
        return res.status(401).json({
          status: error.name,
          data: error.errors,
        });
      });
  },
};

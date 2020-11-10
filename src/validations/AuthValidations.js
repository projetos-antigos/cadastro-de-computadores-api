const yup = require("yup");

module.exports = {
  login(req, res, next) {
    const schema = yup.object().shape({
      login: yup.string().required(),
      password: yup.string().required(),
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

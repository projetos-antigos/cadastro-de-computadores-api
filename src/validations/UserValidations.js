const yup = require("yup");

module.exports = {
  store(req, res, next) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      login: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      shutdownDate: yup.date(),
    });

    const { name, login, email, password, shutdownDate } = req.body;
    console.log(req.body);

    schema
      .validate({ name, login, email, password, shutdownDate })
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

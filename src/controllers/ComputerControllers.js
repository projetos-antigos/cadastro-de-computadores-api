const ComputerRepositories = require("../repositories/ComputerRepositories");

module.exports = {
  async store(req, res) {
    try {
      const computer = await ComputerRepositories.store(req.body);
      return res.status(200).json({ status: "success", data: computer });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },

  async index(req, res) {
    try {
      const computer = await ComputerRepositories.find();
      return res.status(200).json({ status: "success", data: computer });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },

  async show(req, res) {
    try {
      const computers = await ComputerRepositories.findById(req.params.id);
      return res.status(200).json({ status: "success", data: computers });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },

  async delete(req, res) {
    try {
      const computers = await ComputerRepositories.delete(req.params.id);
      return res.status(200).json({ status: "success", data: computers });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },

  async update(req, res) {
    try {
      const computers = await ComputerRepositories.update(
        req.params.id,
        req.body
      );
      return res.status(200).json({ status: "success", data: computers });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },
};

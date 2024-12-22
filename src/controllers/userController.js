import Users from "../models/Users.js";

class UserController {
    constructor() {}

    async createUser(req, res) {
      const { name, email, password, age } = req.body;
      const user = await Users.create({
        name,
        email,
        password,
        age
      });

      return res.status(201).json({ message: 'User created successfully', user });
    }

    async getAllUsers(req, res) {
      const users = await Users.findAll() 
      return res.status(200).json({ users});
    }

    async deleteUser(req, res) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
}

export default UserController;
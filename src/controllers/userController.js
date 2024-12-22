class UserController {
    constructor() {}

    async createUser(req, res) {
      return res.status(200).json({ message: 'User created successfully' });
    }

    async getAllUsers(req, res) {
      return res.status(200).json({ message: 'All users retrieved successfully' });
    }

    async deleteUser(req, res) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
}

export default UserController;
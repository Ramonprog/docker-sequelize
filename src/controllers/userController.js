class UserController {
    constructor() {}

    async createUser(req, res) {
      return res.status(200).json({ message: 'User created successfully' });
    }
}

export default UserController;
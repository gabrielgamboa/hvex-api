const User = require("../models/User");

class UserController {
    async create(request, response) {
        const { name, username, password } = request.body;

        const userAlreadyExists = await User.findOne({username});

        if (userAlreadyExists) {
            return response.status(403).json({erro: "User already exists"});
        }
    
        const user = new User({
            name,
            username,
            password,
            last_access: null
        });
    
        await user.save();
        return response.status(201).json(user);
    }

    async find(request, response) {
        const { id } = request.params;
        const user = await User.findById({_id: id});

        if (!user) return response.status(404).json({error: "User not found."});

        user.last_access = new Date();
        await user.save();

        return response.json(user);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, username, password } = request.body;

        const user = await User.findByIdAndUpdate({_id: id});

        if (!user) return response.status(404).json({error: "User not found."});

        if (name) user.name = name;
        if (username) user.username = username;
        if (password) user.password = password;

        user.last_access = new Date();

        await user.save();
        return response.json(user);

    }

    async delete(request, response) {
        const { id } = request.params;
        const user = await User.findByIdAndDelete({_id: id});

        if (!user) return response.status(404).json({error: "User not found."});

        return response.json(user);
    }
}

module.exports = UserController;
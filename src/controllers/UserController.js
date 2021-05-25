const user = require("../models/UserModel");


module.exports = {

    async create(request, response) {
        try {
            const user = request.body;

            const result = await user.create(user);

            return response.status(200).json(result);
        
        } catch (error) {
            console.warn("note creation failed:", console.error);
            return response.status(500).json({notification: "Internal server Error while trying to create category",})
        }

    },

    async getById(request, response) {

    },

    async update(request, response) {

    },

    async delete(request, response) {

    },

}
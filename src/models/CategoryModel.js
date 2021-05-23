const {v4: uuidv4} = require('uuid');
const connection = require ("../database/connection");

module.exports = {
    async create(category) {
        const user_id = uuidv4();
        user.user_id = user_id;
        
        await connection ("category").insert(category);
        
        return user_id;
    },

    async getByFields({ category_id, user_id }) {
        const result = await connection ("user")
            .where({ category_id, user_id })
            .select("*");
        return result;
    },

    async updateByID(category_id, category) {
        const result = await connection("category").where({category_id}).update(category);
        return result;
    },

    async deleteById(category_id) {
        const result = await connection("category").where({ category_id }).delete();
        return result; 
    },
};
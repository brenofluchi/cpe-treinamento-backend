const connection = require ("../database/connection");

module.exports = {
    async create(category) {
        const result = await connection ("category")   .insert(category);
        return result;
    },

    async getByFields({ category_id, user_id }) {
        const result = await connection ("user")
            .where({ category_id, user_id })
            .select("*");
        return result;
    },

    async updateByID(category_id, category) {
        const result = await connection("category")    .where( {category_id} )
        .update(category);
        return result;
    },

    async deleteById(category_id) {
        const result = await connection("category")    .where({ category_id })
        .delete();
        return result; 
    },
};
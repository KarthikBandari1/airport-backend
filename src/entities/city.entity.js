const pool = require('../config/database');

class City {
    static async getCityById(cityId) {
        try {
            const [rows] = await pool.execute('SELECT * FROM City WHERE id = ?', [cityId]);
            return rows.length ? rows[0] : null;
        } catch (error) {
            console.error('Error in getCityById:', error);
            throw error;
        }
    }
}

module.exports = City;

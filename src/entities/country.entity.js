const pool = require('../config/database');

class Country {
    static async getCountryById(countryId) {
        try {
            const [rows] = await pool.execute('SELECT * FROM Country WHERE id = ?', [countryId]);
            return rows.length ? rows[0] : null;
        } catch (error) {
            console.error('Error in getCountryById:', error);
            throw error;
        }
    }
}

module.exports = Country;

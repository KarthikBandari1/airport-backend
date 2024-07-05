const pool = require('../config/database');

class Airport {
    static async getAirportByIataCode(iataCode) {
        try {
            const [rows] = await pool.execute('SELECT * FROM Airport WHERE iata_code = ?', [iataCode]);
            return rows.length ? rows[0] : null;
        } catch (error) {
            console.error('Error in getAirportByIataCode:', error);
            throw error;
        }
    }
}

module.exports = Airport;

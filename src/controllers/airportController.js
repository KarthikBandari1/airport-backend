const Airport = require('../entities/airport.entity');
const City = require('../entities/city.entity');
const Country = require('../entities/country.entity');

exports.getAirportByIataCode = async (req, res) => {
    const { iataCode } = req.params;

    try {
        const airport = await Airport.getAirportByIataCode(iataCode);
        if (airport) {
            const city = airport.city_id ? await City.getCityById(airport.city_id) : null;
            const country = airport.country_id ? await Country.getCountryById(airport.country_id) : null;

            res.json({
                airport: {
                    ...airport,
                    address: {
                        city,
                        country
                    }
                }
            });
        } else {
            res.status(404).send('Airport not found');
        }
    } catch (error) {
        console.error('Error fetching airport:', error);
        res.status(500).send('Internal Server Error');
    }
};

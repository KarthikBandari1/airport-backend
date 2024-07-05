const pool = require('../config/database');

async function insertData() {
    try {
        await pool.execute(`
            INSERT INTO Country (name, alt_name, country_code_two, country_code_three, flag_app, mobile_code, continent_id, country_flag)
            VALUES
            ('India', 'India', 'IN', 'IND', '🇮🇳', 91, 3, 'flag_in'),
            ('Australia', 'Australia', 'AU', 'AUS', '🇦🇺', 61, 6, 'flag_au'),
            ('Egypt', 'Egypt', 'EG', 'EGY', '🇪🇬', 20, 1, 'flag_eg')
        `);

        await pool.execute(`
            INSERT INTO City (name, alt_name, country_id, is_active, lat, \`long\`)
            VALUES
            ('Agra', 'Agra', 1, true, 27.18, 78.02),  
            ('Brisbane', 'Brisbane', 2, true, -27.47, 153.03),  
            ('Cairo', 'Cairo', 3, true, 30.04, 31.24)
        `);

        await pool.execute(`
            INSERT INTO Airport (icao_code, iata_code, name, type, city_id, country_id, latitude_deg, longitude_deg, elevation_ft)
            VALUES
            ('VIAG', 'AGR', 'Agra Airport / Agra Air Force Station', 'medium_airport', 1, 1, 27.157683, 77.960942, 551),    
            ('YBAF', 'BNE', 'Brisbane Archerfield Airport', 'medium_airport', 2, 2, -27.57, 153.01, 63), 
            ('HECA', 'CAI', 'Cairo International Airport', 'large_airport', 3, 3, 30.121944, 31.405556, 382)
        `);

    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        pool.end();
    }
}

insertData();

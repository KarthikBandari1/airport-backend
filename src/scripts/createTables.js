// src/scripts/createTables.js
const pool = require('../config/database');

async function createTables() {
    try {
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS Country (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                alt_name VARCHAR(255),
                country_code_two VARCHAR(2) NOT NULL,
                country_code_three VARCHAR(3) NOT NULL,
                flag_app VARCHAR(255),
                mobile_code INT,
                continent_id INT,
                country_flag VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS City (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                alt_name VARCHAR(255),
                country_id INT NOT NULL,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                lat DECIMAL(10, 6),
                \`long\` DECIMAL(10, 6),  -- Use backticks to escape 'long'
                FOREIGN KEY (country_id) REFERENCES Country(id)
            )
        `);


        await pool.execute(`
            CREATE TABLE IF NOT EXISTS Airport (
                id INT AUTO_INCREMENT PRIMARY KEY,
                icao_code VARCHAR(10),
                iata_code VARCHAR(10),
                name VARCHAR(255) NOT NULL,
                type VARCHAR(50),
                city_id INT,
                country_id INT,
                latitude_deg DECIMAL(10, 6),
                longitude_deg DECIMAL(10, 6),
                elevation_ft INT,
                website_url VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (city_id) REFERENCES City(id),
                FOREIGN KEY (country_id) REFERENCES Country(id)
            )
        `);

        console.log('Tables created successfully');
    } catch (error) {
        console.error('Error creating tables:', error);
    } finally {
        pool.end();
    }
}

createTables();

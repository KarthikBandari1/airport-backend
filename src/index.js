const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


const airportRoutes = require('./routes/airportRoutes');
app.use(cors());
app.use('/api', airportRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

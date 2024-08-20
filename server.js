const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculate-ach', (req, res) => {
    const { cfm, volume } = req.body;
    if (cfm > 0 && volume > 0) {
        const ach = (cfm * 60) / volume;
        res.json({ ach: ach.toFixed(2) });
    } else {
        res.status(400).json({ error: 'CFM and Volume must be greater than 0' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`ACH Calculator API is running on port ${PORT}`);
});

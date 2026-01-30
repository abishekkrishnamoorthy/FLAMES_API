const data = require("../model/Data");
const { v4: uuidv4 } = require('uuid');

function findFlames(username, crushname) {
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    let a = username.replace(/\s+/g, '').toLowerCase().split('');
    let b = crushname.replace(/\s+/g, '').toLowerCase().split('');
    a.forEach(char => { const i = b.indexOf(char); if (i !== -1) b.splice(i, 1); });
    let count = a.length + b.length;
    let idx = 0;
    while (flames.length > 1) {
        idx = (count % flames.length) - 1;
        if (idx >= 0) flames.splice(idx, 1);
        else flames.pop();
    }
    return flames[0];
}

const create = async (req, res) => {
    try {
        const { username, crushname } = req.body;
        const id = uuidv4();
        const newData = await data.create({ id, username, crushname }); 
        const result = findFlames(username, crushname);
        newData.result = result;
        console.log(result);
        await newData.save();
        res.status(201).json({ newData, result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { create };
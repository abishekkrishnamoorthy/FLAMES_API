const validation = (schema) => {
    return (req, res, next) => {
        const { username, crushname } = req.body;
        if (!username || !crushname) {
            return res.status(400).json({ error: "Username and crush name are required." });
        }
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}

module.exports = validation;
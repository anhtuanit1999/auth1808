const express = require('express');
const jsonParser = require('body-parser').json();
const { createToken, verifyToken } = require('./lib/jwt');
const app = express();
const PORT = 3000;

class UserInfo {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}

const users = [
    new UserInfo('tuan@g.com', '123', 'Tuan'),
    new UserInfo('cuc@g.com', '123', 'Cuc'),
    new UserInfo('tra@g.com', '123', 'Tra')
];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.post('/signin', jsonParser, async(req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => {
        return u.email === email && u.password === password;
    });
    if (!user) return res.status(400).send({ message: 'check user info' });
    const token = await createToken({ email });
    return res.status(200).send({ email, name: user.name, token });
});
app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));
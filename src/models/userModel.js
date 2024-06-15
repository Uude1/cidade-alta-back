const db = require('../config/dbConfig');

async function findAll() {
    const [rows, fields] = await db.execute('SELECT * FROM users');
    return rows;
}

async function findByEmail(email) {
    const [rows, fields] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length > 0 ? rows[0] : null;
}

async function findPassword(email, password) {
    const [rows, fields] = await db.execute('SELECT password FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
        return false;
    }

    const hashedPassword = rows[0].password;

    if (hashedPassword.toString() == password.toString()) {
        return true;
    } else {
        return false;
    }
}

async function comparePassword(password, hashedPassword) {
    if (password.toString() == hashedPassword.toString()) {
        return true;
    } else {
        return false;
    }
}

async function findInfos(email, password) {
    const [rows, fields] = await db.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    return rows;
}

async function findById(id) {
    const [rows, fields] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

async function update(id, name, email, password) {
    const sql = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    const values = [name, email, password, id];

    try {
        const [result] = await db.execute(sql, values);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = { findAll, findByEmail, comparePassword, findPassword, findInfos, findById, update };

const db = require('../config/dbConfig');

async function userHasEmblem(userId, emblemId) {
    const [rows, fields] = await db.execute('SELECT * FROM emblemsUser WHERE user_id = ? AND emblem_id = ?', [userId, emblemId]);
    return rows.length > 0;
}

async function insertEmblemForUser(userId, emblemId) {
    const [result] = await db.execute('INSERT INTO emblemsUser (user_id, emblem_id) VALUES (?, ?)', [userId, emblemId]);
    return result;
}

async function countUserEmblems(userId) {
    const [rows, fields] = await db.execute('SELECT COUNT(*) as count FROM emblemsUser WHERE user_id = ?', [userId]);
    return rows[0].count;
}

async function findEmblemsUser(userId) {
    const [rows, fields] = await db.execute('SELECT * FROM emblemsUser WHERE user_id = ?', [userId]);
    return rows;
}

module.exports = { userHasEmblem, insertEmblemForUser, countUserEmblems, findEmblemsUser };
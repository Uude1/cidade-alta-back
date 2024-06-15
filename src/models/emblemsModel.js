const db = require('../config/dbConfig');

async function findRandomEmblem() {
    const [rows, fields] = await db.execute('SELECT id FROM emblems ORDER BY RAND() LIMIT 1');
    return rows[0].id;
}

async function countTotalEmblems() {
    const [rows, fields] = await db.execute('SELECT COUNT(*) as count FROM emblems');
    return rows[0].count;
}

async function findEmblemById(emblemId) {
    const [rows, fields] = await db.execute('SELECT * FROM emblems WHERE id = ?', [emblemId]);
    return rows.length > 0 ? rows[0] : null;
}

module.exports = { findRandomEmblem, countTotalEmblems, findEmblemById };
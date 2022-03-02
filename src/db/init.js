const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()
    
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY AUTOINCREMENT,
            title TEXT,
            read INT
        )`);

        await db.Close()
    }
}

initDb.init()


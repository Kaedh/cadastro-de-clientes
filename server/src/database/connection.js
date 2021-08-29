import  sqlite3  from 'sqlite3';
import createTableSQL from './createTableSQL.js';
import defaultDbData  from './defaultDbData.js';

const DBSOURCE = "./server/src/database/db.sqlite"

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) return  console.error(err.message) 
  
  db.run(createTableSQL, err => {
    if (err) return console.error(err.message) 

    db.all("SELECT * FROM tbcustomers", (err, rows) => {
      if (err) return res.json({"error" : "true" , "message": err})

      if (rows.length >= 3) return

      db.run(defaultDbData)

    })
    
  });
});

export default db
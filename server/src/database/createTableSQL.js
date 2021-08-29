const sql_create = `CREATE TABLE IF NOT EXISTS tbcustomers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    socialName VARCHAR(100),
    gender VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL,
    birthDate VARCHAR(100) NOT NULL,
    cep VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    number VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    uf VARCHAR(100) NOT NULL,
    complement VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL

  );`;

  export default sql_create;
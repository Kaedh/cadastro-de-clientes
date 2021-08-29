import  db  from '../database/connection.js'

const createCustomer = (req, res) => {
    const createCustomerSQL = `INSERT INTO tbcustomers VALUES (
        Null,
        '${req.body.firstName}',
        '${req.body.lastName}',
        '${req.body.socialName}',
        '${req.body.gender}',
        '${req.body.cpf}',
        '${req.body.birthDate}',
        '${req.body.cep}',
        '${req.body.street}',
        '${req.body.district}',
        '${req.body.number}',
        '${req.body.city}',
        '${req.body.uf}',
        '${req.body.complement}',
        '${req.body.email}',
        '${req.body.phone}',
    );`   
    
    db.run(createCustomerSQL, 
        err => {
        if (err) {
            res.json({"error" : "true" , "message": err})
            throw err
        }

        res.json({"message" : "sucess" })
        })
}

const getAllCustomer = (req, res) => {
    const getAllCustomerSQL = "SELECT * FROM tbcustomers"

    db.all(getAllCustomerSQL, (err, rows) => {
        if (err) return res.json({"error" : "true" , "message": err})

        res.json({"message" : "sucess" , "data": rows})
    })
}

const updateCustomer = (req, res) => {
    const customerId = req.query.id;
    const updateCustomerSQL = `UPDATE  tbcustomers SET 
        id = ${customerId},
        firstName = '${req.body.firstName}',
        lastName = '${req.body.lastName}',
        socialName = '${req.body.socialName}',
        gender = '${req.body.gender}',
        cpf = '${req.body.cpf}',
        cep = '${req.body.cep}',
        birthDate = '${req.body.birthDate}'
        street = '${req.body.street}',
        district = '${req.body.district}',
        number = '${req.body.number}',
        city = '${req.body.city}',
        uf = '${req.body.uf}',
        complement = '${req.body.complement}',
        email = '${req.body.email}',
        phone = '${req.body.phone}'

       WHERE id = ${customerId};
    `   

    db.run(updateCustomerSQL, 
        err => {
        if (err) return res.json({"error" : "tr ue" , "message": err})

        res.json({"message" : "sucess" })
        })
}

const deleteCustomer = (req, res) => {
    const customerId = req.query.id

    const deleteCustomerSQL = "DELETE  FROM tbcustomers WHERE ID = " + customerId + ";"

    db.run(deleteCustomerSQL, 
        err => {
        if (err) return res.json({"error" : "tr ue" , "message": err})

        res.json({"message" : "sucess" })
        })
}

const customerController = {
    create : createCustomer,
    get    : getAllCustomer,
    update : updateCustomer,
    delete : deleteCustomer
}

export default customerController
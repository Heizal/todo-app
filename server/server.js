// Initialise the port to run the server
const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors  = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())

// Get all todos from the  database
app.get('/todos/:userEmail', async (req, res) =>{
    const { userEmail } = req.params
    console.log(userEmail)
    
    try{
        // Get all todos  that match the users email
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
 
    } catch (err){
        console.error(err)
    }   
})


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
// Initialise the port to run the server
const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors  = require('cors')
const app = express()
const pool = require('./db')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

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

// Create a new todo
app.post('/todos', async (req, res) =>{
    const {user_email, title, progress, date} = req.body
    console.log(user_email, title, progress, date)
    const id = uuidv4()
    try{
        // Insert newToDo into database with these params
        const newToDo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`, [id, user_email, title, progress, date])
        res.json(newToDo)
    } catch(err){
        console.error(err)
    }
})

// Edit todo:Update a to do in essence
app.put('/todos/:id', async (req, res) =>{
    const {id} = req.params
    const {user_email, title, progress, date} = req.body
    try{
        //Update the todos in the database
        const editToDo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id])
        res.json(editToDo)

    } catch(err){
        console.error(err)
    }
})

// Delete to do
app.delete('/todos/:id', async (req, res) =>{
    const {id} = req.params
    try{
        const deleteToDo = await pool.query('DELETE FROM todos WHERE id = $1;', [id])
        res.json(deleteToDo)

    } catch(err){
        console.error(err)

    }
})

// Signup endpoint
app.post('/signup', async (req, res) =>{
    const {email, password} = req.body
    // generate hashed password with genSaltSync
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)


    try{
        //store email and password into DB
        const signUp=  await pool.query(`INSERT INTO users(email, hashed_password) VALUES ($1, $2)`,
        [email, hashedPassword])

        // Create an authentication token
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

        res.json({email, token})

    } catch (err){
        console.error(err)
        if(err){
            res.json({detail: err.detail})
        }
    }
})

// Login endpoint
app.post('/login', async (req, res) =>{
    const {email, password} = req.body
    try{
        const users = await pool.query(`SELECT * FROM users WHERE email = $1`, 
        [email])

        if (!users.rows.length) return res.json({ detail: 'User does not exist'})
        // checking signed up email against hashed password to login user
        const success = await bcrypt.compare(password, users.rows[0].hashed_password)
        // Create token
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

        // If succees, get user email and token
        if (success){
            res.json({'email': users.rows[0].email, token})
        } else{
            res.json({detail: "Login failed"})
        }

    } catch (err){
        console.error(err)
    }
})


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
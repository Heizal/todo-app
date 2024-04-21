# Todo App
- [Additional Assessment Documentation for SE_09 Cyber Security](https://www.notion.so/SE_09-Cyber-Security-075b690403844bd39f59b62b244fd848?pvs=4)
- [Additional Assessment Documentation for SE_05 Relational Databases](https://www.notion.so/SE_05-Relational-Databases_HandIn-98a116b02d2d409d98ad681f61b224a3?pvs=4)

## Description

This is a full-stack todo application built with React.js for the client-side, Node.js and Express.js for the server-side, and PostgreSQL for the database. The app allows users to create an account, sign in, and manage their todo list. Users can create, edit, delete todos, mark them as completed, and track their progress.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up, sign in, and sign out securely.
- Todo management: Users can create, edit, delete, and mark todos as completed.
- Progress tracking: Users can set and see the progress of their todos.

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL installed and running

### Steps

1. Clone this repository:

```bash
git clone https://github.com/your-username/todo-app.git
```
2. Navigate to the project directory:

```bash
cd todo-app
```
3. Install dependencies for both the client and server:

```bash
cd client
npm install

cd ../server
npm install
```
4. Set up the database:
- Create a PostgreSQL database.
- Configure the database connection in `server/db.js`.

5. Start the server:

```bash
cd server
npm start
```
6. Start the client:

```bash
cd client
npm start
```
## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it as you see fit.


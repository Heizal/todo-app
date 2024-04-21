CREATE DATABASE todoapp;

-- Todo table
CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

CREATE TABLE sharedtodos (
    user_email VARCHAR(255),
    todo_id VARCHAR(255),
    FOREIGN KEY (user_email) REFERENCES todos (user_email),
    FOREIGN KEY (todo_id) REFERENCES todos(id)
);

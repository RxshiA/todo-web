# Todo App

A simple and efficient Todo application built the frontend using Vite, React, and Redux Toolkit, backend using node, express and MySQL

## Features

- Add new todos
- Toggle todos as completed/incomplete
- Remove todos
- Filter todos by status (all, completed, incomplete)
- Search todos
- Mark all todos as completed

### Pre-requisites

Install MySQL on your machine and create a database and add those details into an `.env` file and save it inside the `todo-core` root folder

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/RxshiA/todo-web
    ```

2. Go to each folder structures
    ```sh
    cd todo-web
    ```
    ```sh
    cd todo-core
    ```

3. Install the dependencies inside those folder structures:
    ```sh
    npm install
    ```

3. Start the development servers seperatly for backend and frontend:
    ```sh
    npm run dev
    ```

## Usage

### Adding a Todo

- Type your todo in the input field at the top and click the "+" button to add a new todo.

### Toggling a Todo

- Click the toggle button next to each todo to mark it as completed or incomplete.

### Removing a Todo

- Click the trash button next to each todo to remove it.

### Filtering Todos

- Use the dropdown menu to filter todos by status: all, completed, or incomplete.

### Searching Todos

- Type your search term in the search input to filter todos by text.

### Marking All Todos as Completed

- Click the "Mark All Completed" button to mark all todos as completed.

## Available Scripts

In the project directory, you can run:

`npm run dev`
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

`npm run build`
Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run serve`
Serve the build for production.

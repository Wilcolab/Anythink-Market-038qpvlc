# Node.js Server

This project now contains a server implemented in Node.js. It provides two routes for managing a task list.

## Project Structure

The project includes both a Node.js server and a FastAPI server, organized as follows:

- `node-server/`: Contains the Node.js server implementation.
  - `src/`: Source code for the Node.js server.
    - `index.js`: Main entry point for the Node.js server.
    - `routes/`: Contains route definitions for managing the task list.
  - `package.json`: Lists Node.js dependencies and scripts.
  - `Dockerfile`: Builds the Docker image for the Node.js server.

- `python-server/`: Contains the FastAPI server implementation.
  - `src/`: Source code for the FastAPI server.
    - `main.py`: Implements the FastAPI server with two routes for tasks.
    - `__init__.py`: Marks the `src` directory as a Python package.
  - `requirements.txt`: Lists Python dependencies for the FastAPI server.
  - `Dockerfile`: Builds the Docker image for the FastAPI server.

- `docker-compose.yml`: Defines and runs multi-container Docker applications, including both the Node.js and FastAPI servers.

- `README.md`: Project documentation and usage instructions.

## Getting Started

To run both the FastAPI and Node.js servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for both the FastAPI and Node.js servers and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server will be available at port `8000`.
- The new Node.js Express server will be available at port `8001`.

You can access each server using their respective ports once the containers are running.

### Setting up the new Node.js Express server locally

If you want to run the new Node.js Express server outside of Docker:

1. Navigate to the server directory:

   ```shell
   cd node-server
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Start the server:

   ```shell
   npm start
   ```

The Express server will start on port `8001` by default. You can access it at `http://localhost:8001`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

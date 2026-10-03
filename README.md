# devops-api-three

Simple REST API built with Node.js and Express, created for the DevOps Session 18 project (Git and GitHub).

## Endpoints

| Method | Path      | Description                       |
|--------|-----------|-----------------------------------|
| GET    | `/`       | Returns a welcome message         |
| GET    | `/health` | Returns service status and uptime |
| GET    | `/about`  | Returns project information       |

## Requirements

- Node.js 18 or newer

## Getting started

```bash
git clone https://github.com/threeyramdhani-png/devops-api-three.git
cd devops-api-three
npm install
npm start
```

The server runs on http://localhost:3000. Set the `PORT` environment variable to use a different port.

## Author

Three Ramdhani
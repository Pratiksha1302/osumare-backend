# Pratiksha Angad Gore

# osumare-backend
Building a RESTful API for an assignment.



## Overview

This project involves developing a RESTful API using Node.js and Express.js to manage a collection of tasks. The API supports CRUD (Create, Read, Update, Delete) operations, and tasks are stored in memory. This report outlines the requirements, implementation, and testing of the API .The application uses EJS for rendering views

### Backend

The backend provides an API for managing tasks, including creating, retrieving, updating, and deleting tasks. It uses in-memory storage, meaning the tasks will be lost when the server restarts.

#Project Requirements:

1.	Framework: Use Express.js to build the API.

2.	Validation: Ensure that task properties such as title and description are required.

3.	Data Storage: Store tasks in memory using an array or object.

4.	API Documentation: Provide clear and concise API documentation, including sample requests and responses.

5.	Status Codes: Use appropriate status codes (e.g., 200 for success, 404 for not found, 400 for bad requests).

6.	Testing: Test the API using tools like Postman or curl, and include instructions for running the API locally.

7.	Error Handling: Gracefully handle unexpected issues.


## Setup

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. Clone the repository:
   `
   git clone https://github.com/Pratiksha1302/osumare-backend.git
   cd osumare-backend `

2. Setup the backend:
`cd backend
npm install
node server.js`

3. Usage
   
  -Backend: Runs on http://localhost:8080

## API Endpoints

1. GET /tasks

-Retrieves a list of all tasks.

-Response: `

      [
         {
            id: 1,
            
            Title: "Task Title",
            
            Description: "Task Description" 
         }, 
         ...
      ]`

2.  GET /tasks/id

-Retrieves a specific task by ID.

-Response: `

      { 
         id: 1,
         
         Title: "Task Title",
         
         Description: "Task Description" 
      }`

3. POST /tasks

-Creates a new task.

-Request Body:` 

      {
         Title: "Task Title",   
         
         Description: "Task Description" 
      }`
      
-Response: `

      {
         id: 1, 
         
         Title: "Task Title",
         
         Description: "Task Description" 
      }`

4. PUT /tasks/

-Updates an existing task by ID.

-Request Body:`

      {
         Title: "Updated Title",
         
         Description: "Updated Description" 
      }`
      
-Response: `  

      {
         id: 1,
         
         Title: "Updated Title", 
         
         Description: "Updated Description" 
      }`

5. DELETE /tasks/

-Deletes a task by ID.

-Response: `

      [
         { 
            id: 1, 
         
            Title: "Deleted Title",
         
            Description: "Deleted Description" 
         }
      ]`


## API CHECKING WITH CURL

1. Create a Task:
   
- `curl -X POST http://localhost:8080/tasks -H "Content-Type: application/json" -d '{"title": "Sample Task", "description": "This is a sample task."}'`

2. Get All Tasks:
   
-`curl http://localhost:8080/tasks`

4. Get a Task by ID:
   
-`curl http://localhost:8080/tasks/1`

6. Update a Task:
   
-`curl -X PUT http://localhost:8080/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "This is an updated task."}'`

8. Delete a Task:
   
-`curl -X DELETE http://localhost:8080/tasks/1`

● Solution: Used the uuid package to generate unique IDs for each task.

#Conclusion:

The RESTful API was successfully developed and tested. It supports all required CRUD
operations and includes validation and error handling. The use of EJS for rendering views
enhances the user experience by providing a clear and organized way to interact with the tasks.



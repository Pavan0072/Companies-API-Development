# Company Management API

A RESTful API built with **Node.js, Express, and MongoDB (Mongoose)** for managing companies. The API supports CRUD operations, including bulk creation of companies, retrieving company locations, and proper error handling.

---

## **Table of Contents**

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Environment Variables](#environment-variables)
* [API Endpoints](#api-endpoints)
* [License](#license)

---

## **Features**

* Create a single company
* Create multiple companies (bulk insert)
* Get all companies
* Get distinct locations of companies
* Update a company (full or partial)
* Delete a company
* Proper error handling for not found and validation errors

---

## **Tech Stack**

* Node.js
* Express.js
* MongoDB with Mongoose
* dotenv for environment variables

---

## **Folder Structure**

```
Backend/
│
├── controllers/
│   └── companyController.js
├── models/
│   └── companySchema.js
├── routes/
│   └── companyRoutes.js
├── server.js
├── package.json
└── .env
```

---


## **API Endpoints**

### **Single Company Operations**

| Method | URL               | Description             |
| ------ | ----------------- | ----------------------- |
| POST   | /api/company      | Create a single company |
| PUT    | /api/company/\:id | Update entire company   |
| PATCH  | /api/company/\:id | Update specific fields  |
| DELETE | /api/company/\:id | Delete a company        |

### **Multiple / Collection Operations**

| Method | URL                      | Description                      |
| ------ | ------------------------ | -------------------------------- |
| GET    | /api/companies           | Get all companies                |
| GET    | /api/companies/locations | Get all distinct locations       |
| POST   | /api/companies/bulk      | Create multiple companies (bulk) |



This project is licensed under the MIT License.


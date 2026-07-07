# 🎬 Online Movie Ticket Booking System

A full-stack Online Movie Ticket Booking System developed using **HTML, CSS, JavaScript, Node.js, Express.js, and PostgreSQL**. The project allows users to register, log in, browse movies, and interact with a database-driven booking platform.

## 🚀 Features

* User Registration
* User Login
* Responsive User Interface
* Backend API using Node.js and Express.js
* PostgreSQL Database Integration
* Secure storage of user registration details
* Movie, Theater, Screen, Show, Seat, Booking, Payment, and Ticket database design
* Dynamic communication between frontend and backend

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js

### Database

* PostgreSQL

## 📂 Database Tables

* Users
* Movies
* Theater
* Screen
* Seats
* Shows
* Bookings
* Payments
* Tickets

## 📌 Project Workflow

1. User opens the website.
2. User registers using the registration form.
3. Registration data is sent to the Node.js backend.
4. The backend validates the request and stores the user information in PostgreSQL.
5. The database saves the user details successfully.
6. Users can log in using their registered credentials.
7. The application can be extended to support movie browsing, seat selection, booking, payment, and ticket generation.

## 📁 Project Structure

```
Movie-Ticket-Booking-System/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── css/
│   └── js/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── package.json
│
└── database/
    └── PostgreSQL SQL Scripts
```

## 💾 Database Connectivity

* PostgreSQL is used as the relational database.
* Node.js connects to PostgreSQL using the PostgreSQL driver.
* User registration data is inserted into the `Users` table after successful validation.
* The project follows a relational database design using primary keys and foreign keys.

## 📚 Learning Outcomes

* Full-stack web development
* REST API development
* PostgreSQL database design
* Database connectivity with Node.js
* CRUD operations
* SQL queries
* Frontend and backend integration
* Project structure and deployment fundamentals

## 🔮 Future Enhancements

* Online payment gateway integration
* QR-code-based tickets
* Admin dashboard
* Movie search and filters
* Seat availability in real time
* Email confirmations
* Booking history
* Password hashing and authentication
* JWT-based authorization

## 👨‍💻 Developed By

Ayush Gandhi

B.Tech Computer Science

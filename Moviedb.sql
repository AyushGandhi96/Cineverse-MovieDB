DROP TABLE IF EXISTS Payments CASCADE;
DROP TABLE IF EXISTS Tickets CASCADE;
DROP TABLE IF EXISTS Bookings CASCADE;
DROP TABLE IF EXISTS Shows CASCADE;
DROP TABLE IF EXISTS Seats CASCADE;
DROP TABLE IF EXISTS Screen CASCADE;
DROP TABLE IF EXISTS Theater CASCADE;
DROP TABLE IF EXISTS Movies CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
Name VARCHAR(50) NOT NULL,
Email VARCHAR(100) UNIQUE,
Phone NUMERIC NOT NULL,
password VARCHAR(200)
);

INSERT INTO users (Name, Email, Phone, Password)
VALUES
('Aarav Sharma', 'aarav.sharma@gmail.com', 9876543210, 'Aarav@123'),
('Priya Verma', 'priya.verma@gmail.com', 9876543211, 'Priya@123'),
('Rahul Singh', 'rahul.singh@gmail.com', 9876543212, 'Rahul@123'),
('Sneha Patel', 'sneha.patel@gmail.com', 9876543213, 'Sneha@123'),
('Vikram Mehta', 'vikram.mehta@gmail.com', 9876543214, 'Vikram@123'),
('Ananya Gupta', 'ananya.gupta@gmail.com', 9876543215, 'Ananya@123'),
('Rohan Joshi', 'rohan.joshi@gmail.com', 9876543216, 'Rohan@123'),
('Neha Kapoor', 'neha.kapoor@gmail.com', 9876543217, 'Neha@123'),
('Karan Malhotra', 'karan.malhotra@gmail.com', 9876543218, 'Karan@123'),
('Pooja Nair', 'pooja.nair@gmail.com', 9876543219, 'Pooja@123'),
('Aditya Rao', 'aditya.rao@gmail.com', 9876543220, 'Aditya@123'),
('Meera Iyer', 'meera.iyer@gmail.com', 9876543221, 'Meera@123'),
('Siddharth Jain', 'siddharth.jain@gmail.com', 9876543222, 'Sid@123'),
('Kavya Mishra', 'kavya.mishra@gmail.com', 9876543223, 'Kavya@123'),
('Arjun Khanna', 'arjun.khanna@gmail.com', 9876543224, 'Arjun@123'),
('Nisha Roy', 'nisha.roy@gmail.com', 9876543225, 'Nisha@123'),
('Yash Agarwal', 'yash.agarwal@gmail.com', 9876543226, 'Yash@123'),
('Ritika Das', 'ritika.das@gmail.com', 9876543227, 'Ritika@123'),
('Manav Bansal', 'manav.bansal@gmail.com', 9876543228, 'Manav@123'),
('Ishita Saxena', 'ishita.saxena@gmail.com', 9876543229, 'Ishita@123');
                                                            


CREATE TABLE Movies (
movie_id SERIAL PRIMARY KEY,
MovieName VARCHAR(100) NOT NULL,
Language VARCHAR(50),
Genre VARCHAR(50),
Duration int,
Releasedate DATE

);
INSERT INTO Movies (MovieName, Language, Genre, Duration, ReleaseDate)
VALUES
('Avengers: Endgame', 'English', 'Action', 181, '2019-04-26'),
('Pushpa 2', 'Telugu', 'Action', 200, '2024-12-05'),
('Saiyaara', 'Hindi', 'Romance', 155, '2025-07-18'),
('Jawan', 'Hindi', 'Action', 169, '2023-09-07'),
('KGF Chapter 2', 'Kannada', 'Action', 168, '2022-04-14'),
('RRR', 'Telugu', 'Historical', 182, '2022-03-25'),
('Interstellar', 'English', 'Sci-Fi', 169, '2014-11-07'),
('Inception', 'English', 'Sci-Fi', 148, '2010-07-16'),
('3 Idiots', 'Hindi', 'Comedy', 170, '2009-12-25'),
('Bahubali: The Beginning', 'Telugu', 'Action', 159, '2015-07-10');

CREATE TABLE Theater(
theater_id SERIAl PRIMARY KEY,
theaterName VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
Address VARCHAR(200) NOT NULL
);
INSERT INTO Theater (theaterName, City, Address)
VALUES
('PVR Cinemas', 'Bhopal', 'DB City Mall'),
('INOX', 'Indore', 'C21 Mall'),
('Cinepolis', 'Bhopal', 'Aashima Mall'),
('Miraj Cinemas', 'Gwalior', 'DB Mall'),
('Wave Cinemas', 'Jabalpur', 'South Avenue Mall');

CREATE TABLE Screen(
Screen_id SERIAL PRIMARY KEY,
theater_id int,
ScreenName VARCHAR(50) NOT NULL,
TotalSeats int,
FOREIGN KEY(theater_id)REFERENCES
Theater(theater_id)

);
INSERT INTO Screen (Theater_id, ScreenName, TotalSeats)
VALUES
(1, 'Screen 1', 120),
(1, 'Screen 2', 150),
(2, 'Screen 1', 180),
(2, 'Screen 2', 200),
(3, 'Screen 1', 140),
(3, 'Screen 2', 160),
(4, 'Screen 1', 130),
(4, 'Screen 2', 170),
(5, 'Screen 1', 150),
(5, 'Screen 2', 190);

CREATE TABLE Seats(
seat_id SERIAL PRIMARY KEY,
Screen_id INT NOT NULL,
seatNumber VARCHAR(50) NOT NULL,
SeatType VARCHAR(50),
FOREIGN KEY(screen_id)REFERENCES
Screen(screen_id)
);

INSERT INTO Seats (Screen_id, SeatNumber, SeatType)
VALUES
(1,'A1','Regular'),
(1,'A2','Regular'),
(1,'A3','Regular'),
(1,'A4','Regular'),
(1,'A5','Regular'),
(1,'B1','Premium'),
(1,'B2','Premium'),
(1,'B3','Premium'),
(1,'C1','VIP'),
(1,'C2','VIP');

CREATE TABLE Shows(
show_id SERIAL PRIMARY KEY,
movie_id INT NOT NULL,
Screen_id INT NOT NULL,
FOREIGN KEY(movie_id)REFERENCES
movies(movie_id),
FOREIGN KEY(screen_id)REFERENCES
Screen(screen_id),
showDate DATE NOT NULL,
showTime TIME NOT NULL,
TicketPrice DECIMAL(8,2)
);

INSERT INTO Shows
(Movie_id, Screen_id, ShowDate, ShowTime, TicketPrice)
VALUES
(1,1,'2026-07-05','10:00:00',180),
(2,1,'2026-07-05','14:00:00',220),
(3,2,'2026-07-05','18:30:00',250),
(1,2,'2026-07-06','21:00:00',200),
(4,3,'2026-07-06','11:30:00',150);

CREATE TABLE Bookings (
Booking_id SERIAL PRIMARY KEY,
user_id INT NOT NULL,
show_id INT NOT NULL,
FOREIGN KEY(user_id) REFERENCES
users(user_id),
FOREIGN KEY(show_id) REFERENCES
Shows(show_id),
BookingDate DATE ,
TotalAmount DECIMAL(10,2),
BookingStatus VARCHAR(20)
);

INSERT INTO Bookings
(User_id, Show_id, TotalAmount, BookingStatus)
VALUES
(1,1,360,'Confirmed'),
(2,2,220,'Confirmed'),
(3,3,500,'Pending'),
(4,4,200,'Cancelled'),
(5,5,150,'Confirmed');

CREATE TABLE Tickets (
    Ticket_id SERIAL PRIMARY KEY,
    Booking_id INT NOT NULL,
    Seat_id INT NOT NULL,
    QRCode VARCHAR(100),
    FOREIGN KEY (Booking_id) REFERENCES Bookings(Booking_id),
    FOREIGN KEY (Seat_id) REFERENCES Seats(Seat_id)
);

INSERT INTO Tickets
(Booking_id, Seat_id, QRCode)
VALUES
(1,1,'QR1001'),
(1,2,'QR1002'),
(2,3,'QR1003'),
(3,7,'QR1004'),
(5,10,'QR1005');

CREATE TABLE Payments (
    Payment_id SERIAL PRIMARY KEY,
    Booking_id INT UNIQUE NOT NULL,
    PaymentMethod VARCHAR(30),
    Amount DECIMAL(10,2),
    PaymentStatus VARCHAR(20),
    TransactionID VARCHAR(100),
    PaymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Booking_id) REFERENCES Bookings(Booking_id)
);

INSERT INTO Payments
(Booking_id, PaymentMethod, Amount, PaymentStatus, TransactionID)
VALUES
(1,'UPI',360,'Success','TXN1001'),
(2,'Credit Card',220,'Success','TXN1002'),
(3,'Net Banking',500,'Pending','TXN1003'),
(4,'UPI',200,'Failed','TXN1004'),
(5,'Debit Card',150,'Success','TXN1005');
# Car Rental App

This project is a full-stack car rental application that includes a modern landing page and a reservation management system. Users can select vehicles, specify pickup and delivery details, and receive automated emails with their reservation information.

## Technologies

### Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS, Headless UI
- **Additional Libraries**: React, React-Quill, Image Optimization (Next.js Image)

### Backend
- **Email Service**: Custom mail function (using SMTP and external APIs like Nodemailer)
- **Utilities**: JavaScript, TypeScript
- **State Management**: React Hooks

## Features

### Landing Page
- **Dynamic Content**: Displays a list of available car models.
- **Responsive Design**: Optimized for all screen sizes.
- **Interactive Forms**: Customizable inputs for reservation details.

### Reservation Management
- **Vehicle Selection**: Choose cars from a predefined list.
- **Details Input**: Users provide personal details such as email, name, phone number, and optional messages.
- **Price Calculation**: Displays rental costs dynamically based on the selected car.

### Email Notifications
- **Automated Email Sending**: Generates and sends reservation details to the user's email.
- **Dynamic Templates**: Personalizes emails with user-provided data and reservation details.

## How It Works

1. **Vehicle Selection**:
   - Users select a car from the available options.
   - Selected car details (images, fuel type, and price) are displayed dynamically.

2. **Reservation Form**:
   - Inputs for personal information (name, email, phone, age) and reservation details (pickup/drop-off locations and times).
   - Validation ensures all required fields are completed.

3. **Email Confirmation**:
   - A reservation summary is compiled into an email template.
   - Users receive confirmation emails with complete reservation details.

## Installation

1. Clone the repository:
   ```sh
   git https://github.com/efecaglarr/next-dizginler.git

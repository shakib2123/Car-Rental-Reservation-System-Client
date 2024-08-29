# 🏕️ Gearshift Front-End

## 🤖 Introduction

Gearshift is a fully responsive and user-centric car rental reservation platform
designed to simplify the car rental experience for both customers and
administrators. With a focus on usability and efficiency, Gearshift offers a
seamless interface for browsing, booking, and managing car rentals.
Administrators are provided with robust tools to oversee inventory, handle
reservations, and manage customer interactions, ensuring a streamlined and
efficient workflow. The platform is equipped with advanced features such as
real-time availability checks, secure payment processing, and comprehensive
booking management, making it an ideal solution for modern car rental
businesses.

## 🔗 Live URL

[Campers Shop](https://gearshift.vercel.app/)

## 📝 Project Description

Gearshift is an advanced car rental reservation system designed to cater to the
needs of both customers and administrators. The platform provides an intuitive
and responsive interface for users to browse through a diverse fleet of
vehicles, filter by preferences, and make reservations with ease. Customers can
access detailed information on each vehicle, choose additional options like
insurance or GPS, and complete their bookings securely.

For administrators, Gearshift offers a powerful dashboard to manage car
inventories, handle bookings, and oversee customer accounts. The system includes
tools for adding, updating, or removing vehicle listings, processing payments,
and generating reports on key metrics such as revenue and car usage. The
platform is built with a focus on security, efficiency, and user experience,
ensuring a seamless and professional service for all users.

Gearshift also incorporates modern features like responsive design, real-time
validation, and optional enhancements such as a theme switcher and local payment
gateway integration, making it a comprehensive solution for the car rental
industry.

## 🔋 Features

- 🌟 User-friendly and visually appealing interface
- 🚗 Comprehensive Car Listings
- 📅 Flexible Booking Process
- 📈 Admin Dashboard
- 💳 Payment Integration
- 👤 User Account Management
- 🚫 Error Handling & 404 Page
- 🎁 Bonus Features

## ⚙️ Technology Stack

- 🔧 **Front-End:**

  - [React](https://react.dev/)
  - [Redux](https://redux-toolkit.js.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Router](https://reactrouter.com/en/main)
  - [Tailwind CSS](https://tailwindcss.com/)

- 🔧 **Backend:**

  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [JWT (JSON Web Token)](https://www.npmjs.com/package/jsonwebtoken)
  - [dotenv](https://www.npmjs.com/package/dotenv)

- 🔨 **Development Tools:**

  - [VS Code](https://code.visualstudio.com/)
  - [Postman (API testing)](https://www.postman.com/)
  - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
  - [Vite](https://vitejs.dev/)

## 🤸 Installation Guideline

Follow these steps to set up the project locally on your machine.

### 📚 Prerequisites

Make sure you have the following installed on your machine:

- 🖥️ [**Node.js**](https://nodejs.org/en) installed on your machine (v18 or
  higher recommended)
- ✏️ A code editor like [**VSCode**](https://code.visualstudio.com/)
- ✅ [**TypeScript**](https://www.typescriptlang.org/) installed
- ✅ [**npm**](https://www.npmjs.com/) installed

### 🛠️ Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shakib2123/Car-Rental-Reservation-System-Client
   cd Car-Rental-Reservation-System-Client
   ```

2. **Install the project dependencies using npm:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a new file named .env in the root of your project and add the
   following content:

   ```bash
   VITE_IMAGEBB_API_KEY=your_secret
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Configuration

Create a .env file in the root directory of the project and add the following
configuration variables:

```bash
VITE_IMAGEBB_API_KEY=your_secret
```

## Usage

1. **Public Pages:**

   - Navigate to the home page to browse available cars, view details, and
     initiate the booking process.
   - Visit the "About Us" page to learn more about the company and its values.

2. **User Pages:**

   - Sign up or log in to access the user dashboard.
   - Manage your bookings, view payment history, and update profile details.

3. **Admin Pages:**

   - Log in with an admin account to access the admin dashboard.
   - Manage car listings, handle customer bookings, and oversee user accounts.

4. **Making a Booking:**

   - Search for Cars: Use the search bar on the home page or the car listing
     page to filter cars by location, date, type, and features.
   - View Car Details: Click on any car to view detailed information, including
     pricing and available options.
   - Book a Car: Select your preferred car and fill out the booking form with
     the required details, such as personal information and payment details.

5. **Admin Management:**

   - Add/Update Car Listings: Use the admin dashboard to add new cars or update
     existing listings with current details and images.
   - Manage Bookings: View and approve customer bookings, and update the status
     of returned cars.

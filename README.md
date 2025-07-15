# ComputerX Client Side

![React](https://img.shields.io/badge/React-18.0+-blue)
![React Router](https://img.shields.io/badge/React_Router-6.0+-CA4245)
![Firebase](https://img.shields.io/badge/Firebase-9.0+-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC)
![Stripe](https://img.shields.io/badge/Stripe-Payment-6772E5)

ComputerX is a cutting-edge B2B platform connecting computer hardware manufacturers with retailers and system builders. Built with React and modern web technologies, this platform streamlines the procurement process for computer components, offering everything from processors and graphics cards to storage solutions and peripherals. Features include secure Stripe payments, real-time inventory tracking, and comprehensive order management tailored for the computer hardware industry.

## Important Links

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=vercel)](https://computerx-zero.web.app/)
[![Client Repository](https://img.shields.io/badge/Client_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizerorahman/computerx_client-side)
[![Server Repository](https://img.shields.io/badge/Server_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizurrahman-zero/computerx_server-side)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Dual Dashboard System**: Separate admin and buyer dashboards with role-based access control
- **Secure Authentication**: Firebase authentication with Google login and JWT token management
- **Payment Integration**: Stripe payment gateway for secure credit card transactions
- **Order Management**: Complete order lifecycle from placement to payment and shipping
- **Admin Controls**: Admin can manage users, promote to admin, and oversee all operations
- **Parts Catalog**: Comprehensive listing of computer parts with detailed specifications
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Protected Routes**: Secure access with 401/403 error handling and route protection
- **Review System**: Users can add reviews and ratings for purchased parts
- **Real-time Updates**: Live inventory updates and order status changes
- **Profile Management**: Users can update their profiles and track order history
- **Toast Notifications**: Real-time feedback for all user actions

## Technologies Used

- **React**: Frontend library for building the user interface
- **React Router**: Navigation and routing for single-page application
- **Firebase**: Authentication service with Google login integration
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **DaisyUI**: Component library built on Tailwind CSS
- **React Query**: Data fetching and state management
- **React Hook Form**: Form handling and validation
- **React Firebase Hooks**: Simplified Firebase integration
- **React Toastify**: Toast notification system
- **Stripe**: Payment processing integration
- **Lucide React**: Modern icon library

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Firebase account and project setup
- Stripe account for payment processing
- The ComputerX backend API running (see [Server Repository](https://github.com/azizerorahman/computerx_server-side))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/azizerorahman/computerx_client-side.git
   cd computerx_client-side
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:

   ```env
   # Firebase Configuration
   REACT_APP_apiKey=your_firebase_api_key
   REACT_APP_authDomain=your_firebase_auth_domain
   REACT_APP_projectId=your_firebase_project_id
   REACT_APP_storageBucket=your_firebase_storage_bucket
   REACT_APP_messagingSenderId=your_firebase_messaging_sender_id
   REACT_APP_appId=your_firebase_app_id

   # Stripe Configuration
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| REACT_APP_apiKey | Firebase API key for authentication |
| REACT_APP_authDomain | Firebase authentication domain |
| REACT_APP_projectId | Firebase project ID |
| REACT_APP_storageBucket | Firebase storage bucket |
| REACT_APP_messagingSenderId | Firebase messaging sender ID |
| REACT_APP_appId | Firebase application ID |
| REACT_APP_STRIPE_PUBLISHABLE_KEY | Stripe publishable key for payment processing |

## Usage

### Home Page

The main interface displays featured computer parts, customer reviews, company statistics, and quick access to the parts catalog.

### Authentication

- Sign up or sign in using email/password or Google authentication
- Secure access to protected routes and user-specific features
- JWT token-based session management

### Parts Catalog

Browse the complete catalog of computer parts including CPUs, GPUs, RAM, storage devices, and more with detailed specifications and pricing.

### Order Management

Navigate to the dashboard to:

- Place orders for computer parts
- Track order status and payment
- View order history
- Cancel pending orders

### Payment System

Secure payment processing through Stripe:

- Credit card payment integration
- Payment confirmation and receipts
- Order status updates post-payment

### Admin Dashboard

Admin users can:

- Manage all user accounts
- Promote users to admin status
- Add, edit, and remove computer parts
- Monitor all orders and payments
- View system analytics

### User Dashboard

Regular users can:

- Update personal profiles
- View and manage their orders
- Add reviews for purchased parts
- Track payment status

## Project Structure

```text
computerx_client-side/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Pages/
│   │   ├── Blogs/
│   │   │   └── Blogs.js
│   │   ├── Dashboard/
│   │   │   ├── AddPart.js
│   │   │   ├── AddReview.js
│   │   │   ├── CheckoutForm.js
│   │   │   ├── Dashboard.js
│   │   │   ├── MakeAdmin.js
│   │   │   ├── ManageOrders.js
│   │   │   ├── ManageParts.js
│   │   │   ├── MyOrders.js
│   │   │   ├── MyProfile.js
│   │   │   └── Payment.js
│   │   ├── Home/
│   │   │   ├── Banner.js
│   │   │   ├── ContactUs.js
│   │   │   ├── Home.js
│   │   │   ├── JoinUs.js
│   │   │   ├── Parts.js
│   │   │   └── Reviews.js
│   │   ├── LogIn/
│   │   │   ├── LogIn.js
│   │   │   ├── RequireAuth.js
│   │   │   ├── SignUp.js
│   │   │   └── SocialLogin.js
│   │   ├── Purchase/
│   │   │   ├── OrderFrom.js
│   │   │   └── Purchase.js
│   │   └── Shared/
│   │       ├── Footer.js
│   │       ├── Loading.js
│   │       ├── NavBar.js
│   │       └── NotFound.js
│   ├── hooks/
│   │   ├── useAdmin.js
│   │   ├── usePart.js
│   │   ├── useParts.js
│   │   ├── useReview.js
│   │   └── useToken.js
│   ├── icons/
│   ├── images/
│   ├── App.css
│   ├── App.js
│   ├── firebase.init.js
│   ├── index.css
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

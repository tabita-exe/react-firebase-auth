# React Routing & Firebase Authentication

**Name:** Tabita Munthaha
**Student ID:** C243460

## Description

A simple React application with multiple pages, React Router navigation, Firebase Email/Password authentication, and protected routes.

## Pages

| Page      | Route      | Access    |
| --------- | ---------- | --------- |
| Home      | /          | Public    |
| Login     | /login     | Public    |
| Register  | /register  | Public    |
| Dashboard | /dashboard | Protected |
| Profile   | /profile   | Protected |

## Features

- Register and login with Email and Password (Firebase Authentication)
- Logout
- Protected routes: Dashboard and Profile redirect to Login if not logged in
- Navbar changes based on login status
- User stays logged in after page refresh

## Technologies

- React (Vite)
- React Router
- Firebase Authentication

## How to Run

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the link shown in the terminal (usually http://localhost:5173)

# 1Fi Marketplace

A full-stack web application built for the 1Fi Marketplace assignment, simulating a mobile-first mutual fund-backed EMI shopping experience.

---

## Features
* **Marketplace & Detail View**:
  * Product feed displaying pricing, brand tags, and lowest EMI estimates.
  * Full-page product view with an interactive thumbnail gallery.
  * Variant switching (color/storage) with dynamic price updates.
  * Dynamic EMI breakdown (3, 6, 9, 12 months) calculated via the backend API.
  * In-flow checkout CTA returning a confirmation reference ID.

---

## Tech Stack

* **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Vite
* **Backend**: Node.js, Express, TypeScript, Winston, Express Rate Limit

---

## Getting Started

### 1. Backend

```bash
cd backend
npm install
```
Create a .env file in the backend/ directory:
```code
PORT=3000
```
Run the development server:
```bash
npm run dev
```
### 2. Frontend
```bash
cd frontend
npm install
```
Create a .env file in the frontend/ directory:
```code
VITE_API_BASE_URL=http://localhost:3000/api/v1/marketplace
```
Run the development server:
```bash
num run dev
```
Open http://localhost:5173 in your browser.

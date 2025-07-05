# Mini Local Business Dashboard

## Overview
The Mini Local Business Dashboard is a full-stack web application built for the GrowthProAI Full Stack Intern Assignment. It simulates a dashboard for small businesses to view their SEO content and Google Business data. The project consists of a React + Tailwind CSS frontend and a Node.js + Express backend, deployed live using Vercel (frontend) and Render (backend).
Features

## Frontend:
Responsive dashboard with an input form for business name and location.
Display card showing simulated Google rating, number of reviews, and an AI-generated SEO headline.
Button to regenerate SEO headlines via backend API.
Built with React, styled with Tailwind CSS, and includes a loading spinner and basic form validation.


## Backend:
REST API with two endpoints:
POST /business-data: Accepts business name and location, returns simulated data.
GET /regenerate-headline: Returns a new SEO headline.


No database required; data is simulated with a static headline array.
Configured with CORS for cross-origin requests.



## Live Demo

Frontend: [https://growth-pro-ai-sandy.vercel.app](https://growth-pro-ai-sandy.vercel.app/)

Backend: [https://growth-pro-ai.onrender.com](https://growth-pro-ai.onrender.com)


## Project Structure
```
growthproai/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputForm.jsx
│   │   │   ├── DisplayCard.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   ├── tailwind.config.js
│   ├── vercel.json
│   ├── .gitignore
│   ├── package.json
├── server/                 # Node.js Express backend
│   ├── index.js
│   ├── .gitignore
│   ├── package.json
├── README.md

```

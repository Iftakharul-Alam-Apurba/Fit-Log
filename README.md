# FitLog

A modern, responsive workout library built with **Next.js** where users can explore exercises, create a daily workout plan, save workouts for later, and track completed exercises.

## 🌐 Live Demo

**[Visit FitLog](https://fit-log-flax.vercel.app/)**

## 🎯 Project Purpose

The purpose of **FitLog** is to provide a simple and focused workout management experience where users can discover exercises, organize their daily workouts, save exercises for future use, and track their progress. The project demonstrates how a modern Next.js application can combine API-based data, responsive UI, client-side state management, and persistent local storage into a practical fitness application.

## 🚀 Technologies Used

* **Next.js 16** — React framework with App Router
* **React** — UI development
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive design
* **DaisyUI** — UI components
* **React Toastify** — Toast notifications
* **LocalStorage** — Persisting workout plans and saved workouts
* **FitLog API** — Workout data and exercise details

## ✨ Key Features

### 1. Workout Library

Browse a collection of workouts covering different muscle groups. Each workout displays its muscle groups, equipment, duration, calories, and rating.

### 2. Workout Details

View detailed information about any workout, including difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.

### 3. Personal Workout Plan

Add workouts to **Today's Plan** with a maximum of five exercises. Users can view their selected workouts, track total exercises, minutes, and calories, and remove exercises when needed.

### 4. Save Workouts for Later

Save favorite workouts and access them from the **Saved** tab. Saved workouts remain available after refreshing the page.

### 5. Workout Progress Tracking

Mark exercises as completed directly from the workout plan. Completed exercises are visually indicated so users can easily track their progress.

## 📱 Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The interface adapts to different screen sizes while keeping the workout information easy to access.

## 🔥 Additional Features

* Sort workouts in My Plan and Saved by **Duration, Calories, or Rating**
* Toast notifications for user actions
* Persistent data using browser LocalStorage
* Maximum five workouts in Today's Plan
* Dedicated 404 page
* Loading state while workout data is being fetched
* Dynamic workout detail pages
* Responsive navigation with live Plan and Saved counters

## 📂 Project Structure

```text
fit-log/
├── app/
│   ├── components/
│   │   ├── shared/
│   │   ├── Hero.tsx
│   │   ├── WorkoutCard.tsx
│   │   └── WorkoutLibrary.tsx
│   │
│   ├── context/
│   │   └── FitLogContext.tsx
│   │
│   ├── my-plan/
│   │   ├── components/
│   │   └── page.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── WorkoutActions.tsx
│   │
│   ├── types/
│   │   └── workout.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── public/
├── package.json
└── README.md
```

## ⚙️ Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Iftakharul-Alam-Apurba/fit-log.git
cd fit-log
npm install
```

Run the development server:

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📌 Project

**FitLog — Workout Library**

Built as a frontend development project using Next.js, TypeScript, Tailwind CSS, and DaisyUI.

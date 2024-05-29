# LinkedIn Network Web App

This is a simple web application for college classmates to share and connect with each other's LinkedIn profiles. The app allows users to submit their full name and LinkedIn profile link, which are then displayed as clickable links for everyone to see.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Firebase**: A platform developed by Google for creating mobile and web applications, used here for authentication and database.
  - **Cloud Firestore**: A flexible, scalable database for storing and syncing data.
- **React Toastify**: A library for adding notifications to the app.
- **React Spinners**: A library for adding loading spinners to the app.
- **React Icons**: A library for including icons in the app.

## How the App Works

1. **User Interface**: The app has a simple UI with two input boxes: one for the user's full name and one for their LinkedIn profile link.
2. **Form Submission**: When a user submits the form, the app validates that the profile link is a valid LinkedIn URL.
3. **Data Storage**: Upon successful validation, the user's name and LinkedIn profile link are stored in Firebase's Cloud Firestore.
4. **Data Display**: The stored data is retrieved from Cloud Firestore and displayed as a list of names, with each name being a clickable link to the user's LinkedIn profile.
5. **Notifications**: The app uses React Toastify to show success and error notifications.

## Setup and Installation

### Prerequisites

- Node.js (version 14.x or higher)
- Firebase account

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/linkedin-network.git
   cd linkedin-network

# Budget Spending App

A simple full-stack app to track monthly expenses with user registration and login.

## Setup Steps

1. **Create a free MongoDB Atlas account:**  
   https://www.mongodb.com/atlas/database  
   - Create a cluster, database user, and get your connection string.

2. **Set up your GitHub repository:**  
   - Create a repo named `budget-spending-app`.
   - Upload all files in this folder.

3. **Deploy on Render:**  
   - Go to https://render.com/
   - Click "New Web Service" and connect your GitHub repo.
   - Set these environment variables:
     - `MONGODB_URI` = your MongoDB Atlas connection string
     - `JWT_SECRET` = pick a strong secret (like `mysupersecretkey`)
   - Deploy!

4. **Frontend setup:**  
   - The `public/index.html` file will be served by the backend.
   - Open your deployed backend URL in a browser to use the app.

5. **Connect frontend to backend:**  
   - In `public/index.html`, set `API_BASE` to your deployed Render backend URL.

## Using the App

1. Register a new account
2. Login
3. Add expenses and view monthly totals

## Troubleshooting

- If you see errors, check your MongoDB connection string and environment variables.
- For help, ask in the repo's Issues tab!

## Screenshots

_(You can upload screenshots here after deployment)_
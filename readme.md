# Credentials
Problem Statement - ReWear – Community Clothing Exchange
Team Name - Mad Astra
Leader Name - Nitin Yadav
Leader Email - ny78455@gmail.com

# ReWear - Sustainable Fashion Exchange Platform

ReWear is a web-based application that allows users to swap unused clothing items via direct swaps or a point-based system. The goal is to reduce textile waste and promote a circular fashion economy by encouraging users to reuse garments instead of discarding them.

---

## 🌐 Live Pages (Frontend in React)

- `/` - Landing Page
- `/login` - User Login
- `/register` - User Registration
- `/dashboard` - User Dashboard
- `/item/:id` - Item Detail Page
- `/add-item` - Add New Item
- `/admin` - Admin Panel

---

## 🚀 Features

### 👤 User Authentication

- Email/password based registration & login
- Dashboard to manage profile, listings & purchases

### 🏠 Landing Page

- Welcome message, CTAs
- Carousel of featured items
- Navigation bar (Login, Sign Up, Browse)

### 🛍️ Dashboard

- View & edit profile
- View points balance
- View current listings and past swaps

### 📄 Item Detail Page

- Item image & full description
- Uploader information
- Options: Request Swap / Redeem via Points
- Availability status

### ➕ Add New Item

- Upload image
- Fill title, description, category, size, type, condition, and tags
- Submit to list item

### 🛠️ Admin Panel

- Approve/reject listings
- Remove spam
- Basic user/item management UI

---

## 🛠️ Tech Stack

### Frontend

- React (with React Router)
- Basic CSS or Tailwind CSS (optional)

### Backend

- Node.js + Express.js
- MongoDB with Mongoose
- dotenv for config

---

## 🧾 Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/rewear.git
cd rewear
```

### 2. Install Dependencies

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in `/server`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the App

**Backend**

```bash
npm start
```

**Frontend**

```bash
npm start
```

---

## 📬 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

## 💚 Join the Movement

Reduce textile waste. Promote reuse. Empower sustainable fashion with ReWear.


# CARD PROFILES

**Candidate:** Derlys Domínguez  
**Stack:** Flask · HTML · CSS · JavaScript

---

## 🚀 Overview

This project is a small **Flask web app** built for Qling's Frontend Developer (Founding Internship) micro task.

It displays a simple **profile card** (my profile and a dummy user) with **clean styling** and one **interactive feature** — a random motivational quote fetched from a free public API (`quotable.io`).  
A **dark mode toggle** and a small **loading spinner** were added to enhance the UX.

---

## 🧩 Features

- Flask backend serving an HTML template with user data
- Styled components using pure CSS (responsive grid, cards, buttons)
- Dark / Light mode toggle with `localStorage` persistence
- Fetches motivational quotes from [Quotable API](https://api.quotable.io/random)
- Loading spinner while data is being fetched
- Fully functional and self-contained (no dependencies beyond Flask)

---

## ⚙️ Setup & Run

### 1️⃣ Clone this repo

```bash
git clone git@github.com:Derlys/Qling.git
cd Qling
```

---

### 2️⃣ Create and activate a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate    # macOS / Linux
```

---

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Run the app

```bash
flask run --debug
```

## Then open http://127.0.0.1:5000

## 🖼️ Structure

```text
QLINK/
├─ app.py
├─ requirements.txt
├─ templates/
│ └─ base.html
| └─ index.html
| └─ macros.html
└─ static/
├─ styles.css
└─ app.js
```

## 🧠 Reflection

If I had two more days to make this feature production-ready for Qling:

> I would refactor the structure into a modular Flask blueprint, add basic unit tests, and integrate TailwindCSS for faster UI scaling.
> I’d also deploy the app to Render or Vercel with a persistent database for user data.

## 💬 API Used

Quotable.io – Free motivational quotes API
Endpoint: https://api.quotable.io/random

## 🧑‍💻 Author

Derlys Domínguez
Full Stack Developer [LinkedIn](https://www.linkedin.com/in/derlysdominguez/) [GitHub](https://github.com/Derlys)

# 🏗️ nammaBhashe Interpreter

nammaBhashe Interpreter (Namma Bhashe) is a simple programming language inspired by BhaiLang, using Kannada words for coding syntax. This project converts nammaBhashe code into JavaScript and executes it.

## 🚀 Features

- ✅ Kannada-based syntax for better readability
- ✅ Supports variable declarations, print statements, conditions, and loops
- ✅ Converts nammaBhashe to JavaScript dynamically

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
  git clone https://github.com/nandan7198/namma-bhashe.git
  cd namma-bhashe
```

### 2️⃣ Install Dependencies

```sh
  npm install
```

### 3️⃣ Run the Application

```sh
  npm run dev
```

---

## 📖 nammaBhashe Syntax & Usage

### 1️⃣ Program Structure

```kannada
hi maga

// Variable Declaration
maga idu x = 10;
hel maga "Value of x is " + x;

// If Condition
nod maga (x > 5) adre {
  hel maga "x is greater than 5";
} illa andre {
  hel maga "x is not greater than 5";
}

// While Loop
maga (x > 0) ago tanka {
  hel maga x;
  x = x - 1;
}

bye maga
```

### 2️⃣ Translated JavaScript Code

```js
let x = 10;
console.log("Value of x is " + x);

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}

while (x > 0) {
  console.log(x);
  x = x - 1;
}
```

---

## ⚙️ How It Works

The **interpreter.js** translates nammaBhashe syntax into JavaScript.

### ✅ nammaBhashe to JavaScript Conversion

| nammaBhashe Code         | JavaScript Equivalent   |
| ------------------------ | ----------------------- |
| `maga idu x = 10;`       | `let x = 10;`           |
| `hel maga "Hello";`      | `console.log("Hello");` |
| `nod maga (x > 5) adre`  | `if (x > 5)`            |
| `illa andre`             | `else`                  |
| `maga (x > 0) ago tanka` | `while (x > 0)`         |

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Code Editor:** CodeMirror
- **Logic:** JavaScript-based Interpreter

---

## 📜 License

This project is open-source under the Creative Commons Zero v1.0 Universal License.

---

## 🌟 Contributing

Pull requests are welcome! If you find issues, please open an issue in the repository.

---

## 🔗 Connect With Me

🔹 GitHub: [nandan7198](https://github.com/nandan7198)  
🔹 Linkedin: [Nandan S](https://www.linkedin.com/in/nandan-s-642a71202/)

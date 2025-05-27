
![Finly](https://github.com/user-attachments/assets/503e6a7d-aa58-4a2b-893b-143d32ca297c)


# Finly – Personal Finance Management App

Finly is a sleek, modern web application designed to help individuals take control of their personal finances. With intuitive tools for tracking income, managing expenses, and visualizing financial data, Finly empowers users to make informed financial decisions.

Deployed website - https://finly-finance-webapp.vercel.app/
---

## 🚀 Features

- **Dashboard Overview:** Get a snapshot of your financial health with summaries of total income, expenses, and net balance.
- **Income Tracking:** Log and categorize various income sources with ease.
- **Expense Management:** Record daily expenses, assign categories, and monitor spending habits.
- **Interactive Charts:** Visual representations of income vs. expenses, spending by category, and financial trends over time.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Secure Authentication:** User accounts with secure login and data protection.

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (React Framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Financial Data Aggregation API:** [Plaid](https://plaid.com/docs/)
- **Payment Integration API** [Dwolla](https://developers.dwolla.com/docs/balance/api-reference/api-fundamentals)
- **Database:** [Appwrite](https://appwrite.io/docs)
- **Application Monitoring and Error Tracking:** [Sentry](https://sentry.io/welcome/) 
- **Charts:** [Chart.js](https://www.chartjs.org/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
finly-finance-management-app/
├── app/                 # Application pages and routing
├── components/          # Reusable UI components
├── constants/           # Static data and constants
├── lib/                 # Utility functions and helpers
├── public/              # Static assets (images, icons)
├── types/               # TypeScript type definitions
├── .env.example         # Environment variable examples
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── ...
```

---

## ⚙️ Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/asarkar2210/Finly-Finance-Management-App.git
   cd Finly-Finance-Management-App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Rename `.env.example` to `.env`
   - Update the variables with the following configuration:

   
    ```bash
      #NEXT
      NEXT_PUBLIC_SITE_URL=http://localhost:3000

      #APPWRITE
      NEXT_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
      NEXT_PUBLIC_APPWRITE_PROJECT=682e01d30024afd00c96
      APPWRITE_DATABASE_ID=682e04f0002565252b58
      APPWRITE_USER_COLLECTION_ID=682e05180023eac481fa
      APPWRITE_BANK_COLLECTION_ID=682e05350007d9bdab7c
      APPWRITE_TRANSACTION_COLLECTION_ID=682e053e003a90d0bdf2
      NEXT_APPWRITE_KEY=standard_3afce780c2290b801bbfc27c98f4f067127f2e408da6ffd4fc46b94880e0f08a3d6d0afafffcbea68720a18cfda2116311b351e40934919fa86db529cbb90ab1d25f5edc3bbb8abec57cf93e70d3adeb3b82e9f0f56f7e24eaeab81f69480fc94c3ff42195aa5f2f85f0cba846b4eb770bb9b7dd9e855078382589c44251d92b

      #PLAID
      PLAID_CLIENT_ID=68302e05430d9b002390910b
      PLAID_SECRET=c18a63bf1443d7f48f54e2c07e09b2
      PLAID_ENV=sandbox
      PLAID_PRODUCTS=auth,transactions,identity
      PLAID_COUNTRY_CODES=US,CA,ES

      #DWOLLA
      DWOLLA_KEY=3N5jaOBTq2FZBhdgzPGgX2nmiGCAl3Am6Z42Cr1AQyGnfkcjTl
      DWOLLA_SECRET=bJjmxBCbXyX7J4DozEbz3BR7vV46vYdjDkOmpjaFdkLH6HLkTr
      DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
      DWOLLA_ENV=sandbox
    ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Sample user credentials for reference:**

   Due to limitations by Dwolla, only valid US addresses are supported. Kindly follow the below sample user credentials for signing up. 

   ```bash
   First name: Your first name.
   Last name: Your last name.
   Address: Can be anything.
   City: Must be a valid city in the US. Eg: Los Angeles
   State: Must be a valid US state, and only of 2 characters. Eg: CA
   Postal Code: Must be a US 5-digit ZIP code. Eg: 50314
   Date of Birth: In YYYY-MM-DD format. Must be between 18 to 125 years old at the time of submission.
   SSN: Last four digits. Eg: 1234
   Email: Any email, in a valid format.
   Password: Minimum 8 characters.
   ```
6. **Connecting Bank Accounts**

   You can only use sandbox accounts here. 
   
   Once you reach this part, while connecting your dummy bank account - 

   ![Screenshot 2025-05-28 005915](https://github.com/user-attachments/assets/c5f47eee-8bb7-453e-8fd8-578849a10e61)

   Use the following user-name and password:
   ```bash
   username: user_good
   password: pass_good
   ```
   And you are good to go!
   
---

## 📊 Screenshots

![Sign In](https://github.com/user-attachments/assets/f9e9e4fd-37bb-433e-9cc4-f2b5855e4a4e)
![Sign Up](https://github.com/user-attachments/assets/202e2326-f209-4daf-886a-c1c3547ba90b)
![Homepage](https://github.com/user-attachments/assets/0bb093e2-2117-4c83-93c0-5142f7ca6a06)
![My Banks](https://github.com/user-attachments/assets/722b1d49-ec6c-496c-8c08-8a77f09d323d)
![Transaction History](https://github.com/user-attachments/assets/25afe1e0-d87a-402b-a598-4740c1b3c150)
![Transfer Funds](https://github.com/user-attachments/assets/6201846e-f7e7-4fe6-bd8f-38d8ca4c5be6)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🐞Issues / Known Bugs

- Only US states, cities, postal codes and SSNs are supported. This is a limitation of [Dwolla](https://developers.dwolla.com/docs/balance/api-reference/customers/create#verified-personal-customer---request-parameters).
- Categories of transactions are not displayed.

---

## 🙋‍♂️ Acknowledgments

- Inspired by JavaScript Mastery's YouTube video - [Build and Deploy a Banking Web App](https://youtu.be/PuOVqP_cjkE?si=dHcZjXmIbqCDVfEO)
- Thanks to the open-source community for the tools and libraries that made this project possible.

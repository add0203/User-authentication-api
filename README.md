**User Authentication Node.js Program - README**

This repository contains a Node.js program for user authentication using various technologies and methodologies. This program provides secure authentication functionalities for your Node.js applications.

### Features:

1. **User Registration**: Users can register for an account by providing their email and password. Passwords are securely hashed before storage.

2. **User Login**: Registered users can log in using their email and password credentials.

3. **Password Hashing**: Passwords are securely hashed using industry-standard hashing algorithms before storage in the database to ensure confidentiality.

4. **Session Management**: Sessions are managed securely to maintain user authentication across multiple requests.

### Technologies Used:

here's a one-line description for each of the dependencies listed:

1. **bcryptjs**: Library for hashing passwords using bcrypt algorithm with asynchronous support.
2. **body-parser**: Middleware for parsing incoming request bodies in Express.js.
3. **crypto**: Node.js built-in module providing cryptographic functionalities.
4. **email-validator**: Library for validating email addresses.
5. **express**: Minimal and flexible Node.js web application framework.
6. **express-async-handler**: Utility function for handling asynchronous errors in Express.js route handlers.
7. **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT) for authentication.
8. **mongoose**: MongoDB object modeling for Node.js.
9. **nodemailer**: Module for sending emails with Node.js.
10. **nodemon**: Utility that monitors for changes in your Node.js application and automatically restarts the server.

### Installation:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   JWT_SECRET = "group_project"
   EMAIL_PASS = <Email password>
   PORT = 3002
   DB_LINK = "mongodb://127.0.0.1:27017"
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Usage:

## User Routes

The following routes are defined for user authentication and management:

- `/user/register`: **POST** - Register a new user.
- `/user/signIn`: **POST** - Sign in existing user.
- `/user/genOtp`: **POST** - Generate OTP (One-Time Password) for password reset.
- `/user/resetPass`: **PUT** - Reset user password.
- `/user/checkOtp`: **POST** - Check OTP validity.
- `/user/deleteUser`: **DELETE** - Delete a user account.
- `/user/`: **GET** - Get a list of all users.
- `/user/:id`: **GET** - Get user details by ID.
- `/user/updateUser`: **PATCH** - Update user details.

### Usage:

These routes are configured using Express middleware. The main application uses `app.use("/user", userRoutes)` to direct requests to the `userRoutes` router middleware. Therefore, the paths specified for each route inside `userRoutes` do not need to include the `/user` prefix, as it's already handled by the parent middleware.

### Contributing:

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or create a pull request.

### Author:

ANAND DHAR DWIVEDI
ananddhardwivedi05@gmail.com

### Acknowledgements:

Certainly, here are the links to the documentation for each of the dependencies:

1. **bcryptjs**: [Documentation](https://www.npmjs.com/package/bcryptjs)
2. **body-parser**: [Documentation](https://www.npmjs.com/package/body-parser)
3. **crypto**: [Node.js Documentation](https://nodejs.org/api/crypto.html)
4. **email-validator**: [Documentation](https://www.npmjs.com/package/email-validator)
5. **express**: [Documentation](https://expressjs.com/en/4x/api.html)
6. **express-async-handler**: [Documentation](https://www.npmjs.com/package/express-async-handler)
7. **jsonwebtoken**: [Documentation](https://www.npmjs.com/package/jsonwebtoken)
8. **mongoose**: [Documentation](https://mongoosejs.com/docs/index.html)
9. **nodemailer**: [Documentation](https://nodemailer.com/about/)
10. **nodemon**: [Documentation](https://nodemon.io/)

// passwordUtils.js
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10; // Defines the complexity of the hash

// Function to hash a password
const hashPassword = async (plainPassword) => {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};

// Function to compare a plain password with a hashed password
const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error verifying password:', error);
        throw error;
    }
};

// User Registration
const registerUser = async (username, password) => {
    try {
        const hashedPassword = await hashPassword(password);
        console.log(`User Registered: { username: ${username}, hashedPassword: ${hashedPassword} }`);
        return { username, hashedPassword };
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

// Example usage
(async () => {
    const password = 'yourPassword123'; // Replace with the original password
    const existingHash = '$2a$10$Dl4FzLhZl9qJk8m2U9D3yGQmM2jtdzq.siw1yQm6Q9l/MsQU9GpP2';

    const isValid = await verifyPassword(password, existingHash);
    console.log('Password Match:', isValid);

    // Register a new user
    const newUser = await registerUser('newuser', 'newPassword456');
    console.log('Registered User:', newUser);
})();

import pool from "../db/database.js";
import bcrypt from "bcrypt";

class UserService {
    async userDataCheck(email, login){
        const AllEmails = ((await pool.query(`SELECT email FROM "User"`)).rows).map((el) => el.email); // Получаем все электронные почты.
        const AllLogins = ((await pool.query(`SELECT login FROM "User"`)).rows).map((el) => el.login); // Получаем все логины.
        
        if (AllEmails.includes(email)){
           console.error(`User with e-mail: '${email}' already exists.`);
           return {message: `User with e-mail: '${email}' already exists.`, result: false};
        }
        else if (AllLogins.includes(login)){
            console.error(`User with login: '${login}' already exists.`);
            return {message: `User with login: '${login}' already exists.`, result: false};
        }
        return null;
    }
    async passwordEncrypt(password){
        return bcrypt.hash(password, 4);
    }
    async login(password, hashPassword){
        const IsPasswordValid = await bcrypt.compare(password, hashPassword)

        if (IsPasswordValid)
            return {message: `You have successfully logged in`, result: true};
        
        return {message: `Invalid password`, result: false};
    } 
}

export default new UserService();
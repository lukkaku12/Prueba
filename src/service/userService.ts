import { User } from './../model/userModel';
import { inject, injectable } from "tsyringe";
import UserRepository from "../repository/userRepository";

@injectable()
export default class UserService {
 constructor(@inject(UserRepository) private userRepository:UserRepository) {}

 async getAllUsers() {
    const [rows] = await this.userRepository.findAllUsers();
    return rows;
 }

 async getById(id:number) {
    const rows = await this.userRepository.findById(id);
    return rows;
 }

 async getByEmail(email:string): Promise<User | null> {
    const rows = await this.userRepository.findByEmail(email);
    return rows
 }

 async createUser(user: Partial<User>) {
    const result = await this.userRepository.create(user);
    return result;
 }

 async deleteUser(id:number) {
    const result = await this.userRepository.delete(id);
    return result;
 }

  async checkUserCredentials(email: string, password: string) {
   const response = await this.getByEmail(email) ;
   if (response && response.password === password) {
      return response
   }
   throw new Error("Invalid credentials");
 }
}
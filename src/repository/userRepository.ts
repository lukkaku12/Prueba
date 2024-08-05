import { injectable } from 'tsyringe';
import { User } from './../model/userModel';

@injectable()
export default class UserRepository {
    async findAllUsers() {
        return await User.findAll();
    }

    async findById(id:number) {
        return await User.findByPk(id);
    }

    async create(user: Partial<User>){
        return await User.create(user);
    }

    async findByEmail(email:string){
        return await User.findOne({where: {email}})
    }

    async delete(id: number) {
        const userDelete = await User.findByPk(id);
        if (!userDelete) {
            throw new Error(`hubo un error`)
        }
        return await userDelete.destroy();


    }
}

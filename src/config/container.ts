import { container } from 'tsyringe';
import UserRepository from '../repository/userRepository';
import UserService from '../service/userService';

container.register('userRepository', {useClass: UserRepository});
container.register('userService', {useClass: UserService});
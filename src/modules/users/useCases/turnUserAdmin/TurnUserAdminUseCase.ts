import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const oldUser = this.usersRepository.findById(user_id);

        if (!oldUser) throw new Error(`User not found1`);

        const user = this.usersRepository.turnAdmin(oldUser);
        return user;
    }
}

export { TurnUserAdminUseCase };

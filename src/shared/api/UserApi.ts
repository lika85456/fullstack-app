import {
    UserDTO
} from "../DTO/UserDTO";

export default interface UserApi {
    login(email: string, password: string): Promise<UserDTO>;
}
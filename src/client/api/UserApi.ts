import { default as UserApiDef } from "../../shared/api/UserApi";
import { UserDTO } from "../../shared/DTO/UserDTO";

export default class UserApi implements UserApiDef {
    login(email: string, password: string): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }

}
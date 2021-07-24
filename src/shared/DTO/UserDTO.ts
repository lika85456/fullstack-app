export class UserDTO {

    constructor(public email: string, public password: string) {

    }

    validateEmail(): boolean {
        return this.email.length > 0;
    }
}
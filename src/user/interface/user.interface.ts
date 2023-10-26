export interface UserInterface {
    id?: number;
    username: string;
    email?: string;
    password: string;
    state?: Date;
    authAt?: Date;
    deleteAt?: Date;
}

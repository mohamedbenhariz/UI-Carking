export interface User {
    id?: number;
    firstName?: string;
    name?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    roleId?: BigInteger;
    photo?:string;
    matricule?: string
}
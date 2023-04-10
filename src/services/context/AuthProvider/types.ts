export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email:string, pasword: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    childern: JSX.Element;
}
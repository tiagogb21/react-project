import { createContext, Dispatch, ReactNode, SetStateAction, useState, FC } from "react";
import { IUser } from "../../types/interfaces/user";

const initialState: IUser = {
    name: '',
    email: '',
    password: '',
}

interface IUserContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({
    user: initialState,
    setUser: () => {
        throw new Error('setUser function must be used within a UserProvider');
    },
});

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser>(initialState);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
export type { UserProviderProps }; // Exporta explicitamente o tipo UserProviderProps

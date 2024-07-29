import UserProvider from "./user";
import { combineComponents } from "../utils/combineComponents";
import { FC, ReactNode } from "react";

const providers: Array<FC<{ children: ReactNode }>> = [
    UserProvider,
    // ContextProvider2,
    // ContextProvider3,
    // ContextProvider4,
];

export const AppContextProvider = combineComponents(...providers);
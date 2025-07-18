import React, { createContext, useState } from "react";
import type { User } from "../types/User.tsx";

interface AuthContextType {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User>({
		username: "no user",
		phone: "-",
		email: "-",
	} as User);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
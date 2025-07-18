
interface RegisterFormData {
  identifier: string;
  username: string;
  email: string;
  password: string;
}

interface LoginFormData {
  identifier: string;
  password: string;
}

interface User {
	username: string;
	phone: string;
	email: string;
}

export type { User };
  export type { RegisterFormData, LoginFormData };
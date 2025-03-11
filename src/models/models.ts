interface AddUserFormData {
  name: string;
  username: string;
  email?: string;
  phone?: string;
  avatar?: File;
  password: string;
  confirmPassword: string;
}

export type { AddUserFormData };

export interface LoginPayload {
  email: string;
  password: string;
}
// Student data interface
export interface StudentData {
  id: number;
  name: string;
  name_furigana: string;
  email: string;
  phone: string | null;
  avatar: string | null;
}

// Form field interface for CommonForm
export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  validation?: object;
  required?: boolean;
}

// Forgot password response
export interface ForgotPasswordResponse {
  message: string;
  password_reset_token: string;
}

// Reset password request
export interface ResetPasswordRequest {
  password_reset_token: string;
  verification_code: string;
  password: string;
  password_confirmation: string;
}

// Add other interfaces as needed...
export interface ForgotPasswordErrorResponse {
  message: string;
  errors?: {
    [key: string]: string[] | undefined;
  };
}

export interface Role {
  id: number;
  name: string;
  display_name: string;
  is_reserved: boolean;
}

export interface User {
  id: number;
  name: string;
  name_furigana: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  active_role: Role;
  roles: Role[];
  permissions: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  message: string | null;
  password_reset_token?: string | null;
  reset_message?: string | null;
}

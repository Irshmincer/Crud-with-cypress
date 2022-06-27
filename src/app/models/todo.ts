export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  dob: Date;
  isActive: boolean;
  userType?: string;
}

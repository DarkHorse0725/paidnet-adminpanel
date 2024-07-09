import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_DOMAIN_URL;

export const authService = {
  login: async (email: string, password: string) => {
    const res = await axios.post(`${baseUrl}/auth/signin`, {email, password});
    return res.data;
  }
}
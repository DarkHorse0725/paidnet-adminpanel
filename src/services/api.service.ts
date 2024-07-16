import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_DOMAIN_URL;

export const authService = {
  login: async (email: string, password: string) => {
    const res = await axios.post(`${baseUrl}/auth/signin`, {email, password});
    return res.data;
  }
}

export const poolService = {
  getPools: async () => {
    const res = await axios.get(`${baseUrl}/pools`);
    return res.data;
  },
  getPool: async (pubkey: string) => {
    const res = await axios.get(`${baseUrl}/pools/${pubkey}`);
    return res.data;
  },
  getPoolAccount: async (pubkey: string) => {
    const res = await axios.get(`${baseUrl}/pools/account/${pubkey}`);
    return res.data;
  },
  getUserPools: async (userId: string) => {
    const res = await axios.get(`${baseUrl}/pools/user/${userId}`);
    return res.data;
  }
}

export const userService = {
  getCollaborators: async () => {
    const res = await axios.get(`${baseUrl}/users/collaborators`);
    return res.data;
  }
}
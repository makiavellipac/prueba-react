import axios from 'axios';
import { RandomUserResponse } from '../types/users';

const API_BASE_URL = 'https://randomuser.me/api';

export const userApi = {
  getRandomUsers: async (params?: {
    results?: number;
    gender?: 'male' | 'female';
    nat?: string;
    page?: number;
    seed?: string;
  }) => {
    try {
      const response = await axios.get<RandomUserResponse>(API_BASE_URL, {
        params: {
          ...params,
          format: 'json',
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Error fetching random users: ${error.message}`);
      }
      throw error;
    }
  },
  getMultipleUsers: async (count: number = 10) => {
    const response = await userApi.getRandomUsers({ results: count });
    return response.results;
  },
};

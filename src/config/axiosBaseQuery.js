import axiosInstance from '@config/axiosConfig';

export const axiosBaseQuery = () =>
  async ({ url, method = 'GET', data, params }) => {
    try {
      const result = await axiosInstance({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data:   axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

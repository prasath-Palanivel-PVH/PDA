import axios, { AxiosInstance } from 'axios';

interface HttpServiceInterface {
  get: <T>(endpoint: string) => Promise<T>;
  post: <T, D>(endpoint: string, data?: D) => Promise<T>;
}

class HttpService implements HttpServiceInterface {
  private baseUrl: string;
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    });
  }

  get<T>(endpoint: string): Promise<T> {
    return this.axiosInstance.get<T>(endpoint);
  }

  post<T, D>(endpoint: string, data?: D): Promise<T> {
    return this.axiosInstance.post<T>(endpoint, data);
  }
}

export default HttpService;
import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_API_DECRYPTION_SECRET_KEY as string;

export const decryptResponse = (encrypted: string) => {
  const decryptedData = CryptoJS.AES.decrypt(encrypted, secretKey);
  const decryptData = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
  return decryptData;
};

const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`;

const instance = axios.create({ baseURL: url });

instance.interceptors.response.use(
  (response) => {
    if (response.data.encryptResult) {
      const decryptedData = decryptResponse(response.data.encryptResult);
      response.data = decryptedData;
    }
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      console.error(`Error ${response.status}:`, response.data);
      if (response.status === 404 || response.status === 400) {
        return Promise.reject(response);
      }
    } else {
      console.error("Unexpected error:", error.message || error);
    }
    return Promise.reject(error);
  }
);

export default instance;

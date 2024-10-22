// utils/hashPassword.ts
import CryptoJS from "crypto-ts";

export const hashPassword = (password: string): string => {
  return CryptoJS.SHA256(password).toString();
};

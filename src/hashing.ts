// src/utils/hashPassword.ts

import { SHA256 } from "crypto-js";

/**
 * Hashes the given password using SHA256.
 * @param password - The password to hash.
 * @returns The hashed password as a string.
 */
export const hashPassword = (password: string): string => {
  return SHA256(password).toString(); 
};

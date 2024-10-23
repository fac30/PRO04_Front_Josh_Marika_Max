import bcrypt from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12; // Number of salt rounds
  const hash = await bcrypt.hash(password, saltRounds); // Hashing the password
  return hash; // Return the hashed password
};

export default hashPassword;

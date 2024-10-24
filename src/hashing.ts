import bcrypt from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export default hashPassword;

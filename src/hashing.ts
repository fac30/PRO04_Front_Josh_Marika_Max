import { createHash } from "crypto";

function hashPassword(password: string) {
  const hashed = createHash("sha256").update(password).digest("hex");
  return hashed;
}

export default hashPassword;

import { compare, genSalt, hash } from 'bcrypt';

const saltRounds = 9;

export const isMatch = async (value: string, hash: string): Promise<boolean> =>
  compare(value, hash);

export const hashValue = async (value: string): Promise<string> => hash(value, saltRounds);

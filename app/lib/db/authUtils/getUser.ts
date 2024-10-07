"use server";

import { User, UserModel, Users } from "../models/user";
export type Projection = {
  access_token: number;
  refresh_token: number;
  password: number;
};
const projection: Projection = {
  access_token: 0,
  refresh_token: 0,
  password: 0,
};
export const getUserByEmail = async (email: string, projection: Projection) => {
  try {
    const userDetails = await (User as UserModel).findOne(
      { email },
      projection
    );

    if (!userDetails) {
      return null;
    }

    return userDetails;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const userDetails = await (User as UserModel).findById(id);

    return userDetails;
  } catch {
    return null;
  }
};

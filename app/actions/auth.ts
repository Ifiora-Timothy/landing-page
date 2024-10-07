"use server";
import passport from "passport";
import { User, UserModel, Users } from "../lib/db/models/user";
export const login = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const user = await (User as UserModel).findOne({ email });

    if (user?.authType === "google") {
      return JSON.stringify({ message: "Please login with Google" });
    }

    const validatedUser = await (User as UserModel).validateLogin({
      email,
      password,
    });

    if (!(validatedUser as Users)._id) {
      return JSON.stringify({ message: "Invalid credentials" });
    } else if (validatedUser as Users) {
      {
        return JSON.stringify({
          id: (validatedUser as Users)._id,
          email: (validatedUser as Users).email,
          username: (validatedUser as Users).username,
        });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return JSON.stringify({ message: "Invalid credentials" });
    } else {
      return JSON.stringify({ message: "Invalid credentials" });
    }
  }
};

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google"),
//   (req, res) => {
//     res.redirect("http://localhost:3000/dashboard");
//   }
// );
export const signupWithGoogle = async (
  email: string,
  username: string,
  googleId: string
): Promise<string> => {
  try {
    const hass = await passport.authenticate("google", {
      scope: ["profile", "email"],
    });
    const existingUser = await (User as UserModel).findOne({ email });
    if (existingUser) {
      return JSON.stringify({ message: "Email already exists" });
    }
    const newUser = await (User as UserModel).create({
      email,
      username,
      googleId,
      authType: "google",
      credentials: true,
    });
    return JSON.stringify({
      id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    });
  } catch (error) {
    return JSON.stringify({ message: "Invalid credentials" });
  }
};
export const signup = async (
  email: string,
  username: string,
  password: string
): Promise<string> => {
  try {
    const existingUser = await (User as UserModel).findOne({ email });
    if (existingUser) {
      return JSON.stringify({ message: "Email already exists" });
    }
    const newUser = await (User as UserModel).create({
      email,
      username,
      password,
      authType: "local",
      credentials: true,
    });
    return JSON.stringify({
      id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    });
  } catch (error) {
    return JSON.stringify({ message: "Invalid credentials" });
  }
};

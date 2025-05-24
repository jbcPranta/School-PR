import axiosInstance from "../axios/axiosInstance";
import { LoginPayload } from "../models/models";


export const loginUser = async (payload: LoginPayload) => {
  const response = await axiosInstance.post("/login", payload);
  return response.data;
};

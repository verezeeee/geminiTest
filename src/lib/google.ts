import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = import.meta.env.VITE_GOOGLE_API;

export const google = new GoogleGenerativeAI(apikey);

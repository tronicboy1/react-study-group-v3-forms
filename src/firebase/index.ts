import firebaseApp from "./config";
import { getDatabase } from "firebase/database";

export const app = firebaseApp;

export const database = getDatabase(firebaseApp);

import { AuthContext } from "../contexts/Auth";
import { useContext } from "react";

export default function useAuth(){
    return useContext(AuthContext)
}
import {LoginType} from "../types/auth.types";
import {login} from "../server/controllers/controllers";

export const loginService = (body: LoginType): Promise<boolean> => {
    return login(body)
}
import {LoginType} from "@types";
import {login} from "@server";

export const loginService = (body: LoginType): Promise<boolean> => {
    return login(body)
}
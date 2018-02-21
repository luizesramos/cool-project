import * as userApi from "./User";

export async function greetUser(userName: string): Promise<string> {
    try {
        return await userApi.greetUserPromise(userName);
    } catch(err) {
        console.log('Failed to greet user');
        return err;
    }
}

export async function sayHiTo(userName: string): Promise<string> {
    try {
        return await userApi.greetUserAsyncAwait(userName);
    } catch(err) {
        console.log('Failed to say hi');
        throw err;
    }
}
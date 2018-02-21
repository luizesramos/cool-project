const NETWORK_LATENCY_IN_MILLIS = 6000;

export async function fetchGreeting(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        return setTimeout(() => {
            console.log('>> Greeting fetched');
            resolve('Hello');
        }, NETWORK_LATENCY_IN_MILLIS);
    });
}

export async function fetchQuestion(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        return setTimeout(() => {
            console.log('>> Question fetched');
            resolve('How are you?');
        }, NETWORK_LATENCY_IN_MILLIS);
    });
}
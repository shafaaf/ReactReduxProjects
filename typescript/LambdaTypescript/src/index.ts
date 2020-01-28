export function HelloWorld() {
    console.log('Hello World');
}

export function HelloName(name: string) {
    console.log(`Hello ${name}`);
}

export const handler = async (event: any = {}): Promise<any> => {
    console.log('This is lambda handler');
    let response = JSON.stringify(event, null, 2);
    response += 'extra';
    return response;
};

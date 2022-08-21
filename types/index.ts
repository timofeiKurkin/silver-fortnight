export interface IPost {
    id: number;
    title: string;
    description: string;
}

export interface IOptions {
    sort: string;
    filter: {
        name: string;
        value: string;
    };
}
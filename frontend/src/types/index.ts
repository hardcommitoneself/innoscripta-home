export type User = {
    id: number;
    name: string;
    email: string;
}

export type Article = {
    id: number;
    sourceId: number;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    authorImg: string;
    categoryId: number;
    source: {
        id: number;
        name: string;
    },
    category: {
        id: number;
        name: string;
    }
}
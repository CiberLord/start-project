declare module '*.svg' {
    const content: string;

    export default content;
}

declare module '*.png' {
    const content: string;

    export default content;
}

declare module '*.css' {
    const content: Record<string, string | undefined>;

    export default content;
}

declare module '*.module.scss' {
    const content: Record<string, string | undefined>;

    export default content;
}

declare module '*.sass' {
    const content: Record<string, string | undefined>;

    export default content;
}

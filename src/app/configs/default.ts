import path from 'path';

export const getConfig = () => {
    const clientDir = path.resolve(process.cwd(), 'dist/client');
    const templatePath = path.resolve(process.cwd(), 'src/app/templates/index.html.ejs');

    return {
        clientDir,
        templatePath,
    };
};

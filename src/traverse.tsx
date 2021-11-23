import { Section } from './Section.types';

export const traverse = (path: string, object: Section, pathSeparator = '/') => {
    const items = path.split(pathSeparator);
    let result = object;
    items.forEach((item) => {
        result = result[item] ?? result;
    });
    return result;
};

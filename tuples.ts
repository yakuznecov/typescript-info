// Кортежи
const skills: [number, string] = [1, 'Dev'];
const skills2: readonly [number, string] = [1, 'Dev']; // можно только читать

const [id, skillName] = skills;

const arr: [number, string, ...boolean[]] = [1, 'dev', true, true, false];

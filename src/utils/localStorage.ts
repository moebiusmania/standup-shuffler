const KEY: string = "standup-shuffler";

export const GET = (): string[] =>
  localStorage.getItem(KEY)
    ? JSON.parse(localStorage.getItem(KEY) as string)
    : [];

export const SAVE = (data: string[]): void => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const CLEAR = (): void => localStorage.removeItem(KEY);

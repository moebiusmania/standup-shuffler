const KEY: string = "standup-shuffler";

export const GET = (): Array<string> =>
  localStorage.getItem(KEY)
    ? JSON.parse(localStorage.getItem(KEY) as string)
    : [];

export const SAVE = (data: Array<string>): void => {
  const DATA: string = JSON.stringify(data);
  localStorage.setItem(KEY, DATA);
};

export const CLEAR = (): void => localStorage.clear();

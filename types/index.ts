export type Group = {
  name: string;
  time: string;
  link: string;
};

export type Stage = {
  title: string;
  description: string;
  groups: Group[];
};

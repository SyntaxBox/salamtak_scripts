type Group = {
  name: string;
  time: string;
  link: string;
};

type Stage = {
  title: string;
  description: string;
  groups: Group[];
};

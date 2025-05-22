type Person = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  title: string;
  paragraph: string;
  person: Person;
  tags: string[];
  publishDate: string;
};

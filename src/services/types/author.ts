export type GetPopularAuthorsResponse = {
  authors: Author[];
};

export type Author = {
  id: number;
  name: string;
  bio: string;
  bookCount: number;
  accumulatedScore: number;
  createdAt: string;
  updatedAt: string;
};

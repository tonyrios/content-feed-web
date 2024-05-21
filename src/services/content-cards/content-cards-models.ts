export interface TComment {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}

export interface ContentCardResponse {
  id: string;
  imageUri: string;
  author: string;
  title: string;
  subtitle: string;
  content: string;
  comments: TComment[];
}

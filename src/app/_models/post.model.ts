export class Post {
  title?: string;
  description?: string;
  image?: string;
  likes?: string;
  comments?: string;
  constructor(title: string = "", description: string = "", image: string = "", likes: string = "", comments: string = "") {
    this.title = title;
    this.description = description;
    this.image = image;
    this.likes = likes;
  }
}

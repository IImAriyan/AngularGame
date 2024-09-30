export class Post {
  title?: string;
  description?: string;
  titleDescription?:string;
  image?: string;
  likes?: string;
  comments?: string;
  createdAt?: string;
  createdBy?: string;
  details?:string;
  routePath?:string;

  constructor(title:    string = "", description: string = "",   image: string = "", likes:          string = "",
              comments: string = "",createdAt:    string = "",createdBy:string = "",titleDescription:string = "",
              details:  string = "",routePath:    string = "") {

    this.title = title;
    this.description = description;
    this.image = image;
    this.likes = likes;
    this.comments = comments;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.titleDescription = titleDescription;
    this.details = details;
    this.routePath = routePath;
  }
}

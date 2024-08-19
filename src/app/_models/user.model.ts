export class User {
  id:string;
  username:string;
  password:string;
  email:string;
  adminRole:string;
  constructor(id:string = "", username:string = "", password:string = "", email:string = "", adminRole:string = "") {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.adminRole = adminRole;
  }
}

export class User {
  id:string;
  username:string;
  password:string;
  email:string;
  adminRole:string;
  firstName:string;
  lastName:string;
  age: string;
  telephone:string;
  nationalCode:string;
  gender: string;
  accountLocked : string;
  coins: string;
  accountBanned: string;
  constructor(id:string = "", username:string = "", password:string = "", email:string = "", adminRole:string = "",firstName:string = "", lastName:string = "", age:string = "", telephone:string = "", nationalCode:string = "",gender:string = "",accountLocked:string = "",coins:string = "",accountBanned:string = "") {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.adminRole = adminRole;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.telephone = telephone;
    this.nationalCode = nationalCode;
    this.gender = gender;
    this.accountLocked = accountLocked;
    this.coins = coins;
    this.accountBanned = accountBanned;
  }
}

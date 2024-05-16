import { UserInformationsDto } from "../enum/userInformation.js";

// UserService.ts
class UserService {
  private userData:  {
    _id?: string,
    name?: string;
    lastname?: string;
    age?: number;
    password?: string;
    hobbies?: string[];
  } = {};

  saveUserInfo(userInfo: UserInformationsDto) {
    this.userData._id = userInfo._id;
    this.userData.name = userInfo.name;
    this.userData.lastname = userInfo.lastname;
    this.userData.age = userInfo.age;
    this.userData.password = userInfo.password;
    this.userData.hobbies = userInfo.hobbies;
  }

  saveHobbies(hobbies: string[]) {
    this.userData.hobbies = hobbies;
  }

  getUserData() {
    return this.userData;
  }

  logUserData() {
    console.log(this.userData);
  }
}

export default new UserService();

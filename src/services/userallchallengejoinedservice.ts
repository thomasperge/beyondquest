import { UserAllChallengeJoinedDto } from "../enum/userAllChallenge.js";

// UserAllChallengeJoinedService.ts
class UserAllChallengeJoinedService {
  private UserAllChallengeJoinedData:  {
    challenge_id?: string;
    user_id?: string;
    completed?: Boolean;
    generate_by_user_id?: string;
    text?: string;
    categorie?: string;
  } = {};

  setAllUserChallengeJoined(userInfo: UserAllChallengeJoinedDto) {
    this.UserAllChallengeJoinedData.challenge_id = userInfo.challenge_id;
    this.UserAllChallengeJoinedData.user_id = userInfo.user_id;
    this.UserAllChallengeJoinedData.completed = userInfo.completed;
    this.UserAllChallengeJoinedData.generate_by_user_id = userInfo.generate_by_user_id;
    this.UserAllChallengeJoinedData.text = userInfo.text;
    this.UserAllChallengeJoinedData.categorie = userInfo.categorie;
  }

  getAllUserChallengeJoined(userInfo: UserAllChallengeJoinedDto) {
    return this.UserAllChallengeJoinedData;
  }
}

export default new UserAllChallengeJoinedService();

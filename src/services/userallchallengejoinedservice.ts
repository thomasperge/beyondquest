import { UserAllChallengeJoinedDto } from "../enum/userAllChallenge.js";

// UserAllChallengeJoinedService.ts
class UserAllChallengeJoinedService {
  private UserAllChallengeJoinedData: UserAllChallengeJoinedDto[] = [];

  setAllUserChallengeJoined(userInfo: UserAllChallengeJoinedDto[]) {
    this.UserAllChallengeJoinedData = userInfo;
  }

  getAllUserChallengeJoined(): UserAllChallengeJoinedDto[] {
    return this.UserAllChallengeJoinedData;
  }
}

export default new UserAllChallengeJoinedService();

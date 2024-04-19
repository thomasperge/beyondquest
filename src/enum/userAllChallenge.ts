export interface UserAllChallengeJoinedDto {
  challenge_id: string;
  user_id: string;
  completed: Boolean;
  generate_by_user_id: string;
  text: string
  categorie: string
}

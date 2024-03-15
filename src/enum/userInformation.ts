export interface UserInformationsDto {
  name: string;
  lastname: string;
  age: string;
  country: string;
}

export interface UserDataDto {
  userdata: UserInformationsDto
	usercategorie: string[]
}
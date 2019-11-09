export interface IUser {
  userId: number
  login: string
  password: string
  title: string
  lastName: string
  firstName: string
  gender: string
  email: string
  picture: string // URL of the users picture
  address: string
}

export type IShortUser = Pick<IUser, 'userId' | 'lastName' | 'firstName'>

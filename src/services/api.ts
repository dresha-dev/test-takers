import queryString from 'query-string'
import { IUser, IShortUser } from '../models'
import request from '../utils/request'

interface IfindUserParams {
  name?: string
  limit?: number
  offset?: number
}

export const findUser = async (params: IfindUserParams): Promise<IShortUser[]> => {
  const query = queryString.stringify(params)
  const users: IShortUser[] = await request(`/users?${query}`)

  return users
}

export const getUserDetails = async (userId: number): Promise<IUser> => {
  const userDetails: IUser = await request(`/user/${userId}`)

  return userDetails
}

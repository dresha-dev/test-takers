import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'
import { IUser, IShortUser } from '../models'

interface IfindUserParams {
  name?: string
  limit?: number
  offset?: number
}

export const findUser = async (params: IfindUserParams): Promise<IShortUser[]> => {
  const query = queryString.stringify(params)
  const response = await fetch(`${process.env.API}/users?${query}`)
  const users: IShortUser[] = await response.json()

  return users
}

export const getUserDetails = async (userId: number): Promise<IUser> => {
  const response = await fetch(`${process.env.API}/user/${userId}`)
  const userDetails: IUser = await response.json()

  return userDetails
}

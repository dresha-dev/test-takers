import { IUser } from '../models'

interface IProps {
  details: IUser
}

const UserDetails: React.FC<IProps> = (props) => {
  const { title, picture, lastName, firstName, gender, address } = props.details

  return (
    <div>
      <p>{title}</p>
      <img src={picture} alt={title} />
      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{address}</p>
      <p>{gender}</p>
    </div>
  )
}

export default UserDetails

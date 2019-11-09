import { IUser } from '../models'
import { Avatar, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import styled from 'styled-components'

const UserAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
`

interface IProps {
  details: IUser
}

const UserCard: React.FC<IProps> = (props) => {
  const { title, picture, lastName, firstName, gender, address } = props.details
  const fullName = `${title} ${firstName} ${lastName}`

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar variant="rounded" src={picture} alt={fullName} />}
        title={fullName}
        subheader={gender}
      />
      <CardContent>
        <Typography>{address}</Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard

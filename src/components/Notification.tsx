import { actions as notifActions, Notifs } from 'redux-notifications'
import React, { useCallback } from 'react'
import { CheckCircle, Error as ErrorIcon, Info, Close, Warning } from '@material-ui/icons'
import { amber, green } from '@material-ui/core/colors'
import { IconButton, Snackbar, SnackbarContent, Theme } from '@material-ui/core'
import { useStore, useDispatch } from 'react-redux'
import styled from 'styled-components'

const { notifDismiss } = notifActions

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info,
}

const Message = styled.span(
  ({ theme }) => `
display: flex;
align: center;

svg {
  opacity: 0.9;
  margin-right: ${theme.spacing(1)}px;
}
`,
)

type INotificationKind = 'success' | 'warning' | 'error' | 'info'

type INotificationWrapperProps = {
  kind: INotificationKind
  theme: Theme
}

const NotificationWrapper = styled.span`
  .MuiSnackbarContent-root {
    background-color: ${({ kind, theme }: INotificationWrapperProps) => {
      switch (kind) {
        case 'success':
          return green[600]
        case 'info':
          return theme.palette.primary.main
        case 'warning':
          return amber[700]
        case 'error':
          return theme.palette.error.dark
      }
    }};
  }
`

interface IProps {
  kind: INotificationKind
  id: string
  message: string
}

const NotificationContent: React.FC<IProps> = (props) => {
  const { message, kind, id } = props
  const dispatch = useDispatch()
  const Icon = variantIcon[kind]

  const onClose = useCallback(() => {
    dispatch(notifDismiss(id))
  }, [id])

  return (
    <NotificationWrapper kind={kind}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={true}
      >
        <SnackbarContent
          aria-describedby="client-snackbar"
          message={
            <Message id="client-snackbar">
              <Icon />
              {message}
            </Message>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
              <Close />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </NotificationWrapper>
  )
}

const Notification: React.FC = () => {
  const store = useStore()

  return <Notifs store={store} CustomComponent={NotificationContent} />
}

export default Notification

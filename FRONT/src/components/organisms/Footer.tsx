import React from 'react'
import bagLogo from '../../images/bag-logo.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  Container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#7FB77E',
    '& img': {
      width: '84px',
      paddingTop: '10px',
    },
    '& p': {
      marginTop: '0',
    }
}
}))
export const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.Container}>
        <img src={bagLogo} alt="Sacola da Logo" />
        <p>Todos os direitos reservados. ©</p>
      </div>
    </div>
  )
}

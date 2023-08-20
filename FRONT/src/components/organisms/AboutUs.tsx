import React from 'react'
import bgBags from '../../images/bg-bags.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  Container: {
    display: "flex",
    alignItems: "center",
    maxWidth: "90em",
    margin: "0 auto",
    marginTop: '5em'
  },
  Titulo: {
    padding: '1em',
    '& h2': {
      color: '#7FB77E',
      fontSize: '48px',
      marginLeft: '30px',
      fontFamily: 'Secular One, sans-serif',
    },
    '& p': {
      color: '#1E1E1E',
      fontSize: '20px',
      marginLeft: '30px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '500',
      lineHeight: '30px',
    }
  }


}))

export const AboutUs = () => {
  const classes = useStyles()
  return (
    <div className={classes.Container}>
      <img src={bgBags} alt="logohome" /> 
      <div className={classes.Titulo}>
        <h2>Quem somos e o que oferecemos?</h2>
        <p>Somos uma plataforma que conecta você a um mercado parceiro que oferece produtos com pequenas avarias ou próximo a data de validade com um valor inferior ao original. Com a sua compra, além de garantir a economia com preços incomparáveis, você irá ajudar o mundo na causa de redução do desperdício alimentar.</p>
      </div>
     
    </div>
  )
}

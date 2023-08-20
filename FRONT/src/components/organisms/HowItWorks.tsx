import React from 'react'
import WorldsImage from '../../images/World.png'
import Characters from '../../images/personagens.png'
import MarketLaunch from '../../images/Market-launch.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  Container: {
    display: "flex",
    maxWidth: "75em",
    margin: "0 auto",
    marginTop: '5em',
    flexDirection: 'column',
    '& h3': {
      color: '#FF9C51',
      fontSize: '50px',
      marginLeft: '30px',
      fontFamily: 'Secular One, sans-serif',
      textAlign: 'center',
      textDecoration: 'underline',
    },
    '& p': {
      color: '#1E1E1E',
      fontSize: '20px',
      marginLeft: '30px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '500',
      lineHeight: '30px',
    }
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    border: '#FF9C51 3px solid',
    borderRadius: '20px',
    padding: '4px',
    marginBottom: '3em'
  }
}))

export const HowItWorks = () => {
  const classes = useStyles()
  return (
    <div className={classes.Container}>
      <h3>Como funciona?</h3>
      <div className={classes.Card}>
        <img src={WorldsImage} alt="WorldImage" />
        <p>Conectamos você com milhares de fornecedores parceiros que anunciam diretamente da nossa plataforma os seus
          alimentos/produtos que possuem pequenas avarias (que não influenciem na qualidade do produto).
        </p>
      </div>
      <div className={classes.Card}>
        <img src={Characters} alt="Characters" />
        <p>No conforto da sua casa, você irá se cadastrar na nossa plataforma e selecionar os produtos que você deseja.
        </p>
      </div>
      <div className={classes.Card}>
        <img src={MarketLaunch} alt="MarketLaunch" />
        <p>Basta comparecer no local para realizar a retirada conforme o agendamento que é realizado no momento de finalizar o seu carrinho.
        </p>
      </div>
    </div>
  )
}

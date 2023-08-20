import React from 'react'
import noImage from '../../images/sem-imagem.jpg'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  ContainerProducts: {
    maxWidth: "75em",
    margin: "0 auto",
    marginTop: '5em',
    marginBottom: '5em',
    '& h3': {
      color: '#7FB77E',
      fontSize: '40px',
      marginLeft: '30px',
      fontFamily: 'Secular One, sans-serif',
      textAlign: 'center',
    },
  },
  ImagesDiv: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    '& img': {
      maxWidth: '20em',
      margin: '3em'
    }
  },
  OtherProductsButton: {
    cursor: 'pointer',
    fontFamily: 'Secular One, sans-serif',
    fontSize: '2em',
    marginTop: '2em',
    textAlign: 'center',
  }
}))

export const MainProducts = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.ContainerProducts}>
      <h3>Produtos em destaque</h3>
      <div className={classes.ImagesDiv}>
        <img src={noImage} alt="noImage" />
        <img src={noImage} alt="noImage" />
        <img src={noImage} alt="noImage" />
      </div>
      <div className={classes.OtherProductsButton}>
        <span onClick={() => navigate('/productsPage')}>Confira outros produtos!</span>
      </div>
    </div>
  )
}

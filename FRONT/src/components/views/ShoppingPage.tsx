import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import shopSolid from '../../images/shop-solid.png'

const useStyles = makeStyles(() => ({
  HeaderShopCar: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '1px'
  },
  PresentationText: {
    fontFamily: 'Secular One, sans-serif',
    fontWeight: 'bold'
  },
  FinishShopButton: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      backgroundColor: '#7fb77e',
      border: 'none',
      borderRadius: '1.875em',
      cursor: 'pointer',
      fontFamily: 'Secular One, sans-serif',
      fontSize: '2em',
      padding: '0.5em',
    }
  }

}))

export const ShoppingPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div style={{ padding: '2em' }}>
      <div
        className={classes.HeaderShopCar}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon
          style={{
            margin: '5px',
          }} />
        <span>
          Voltar
        </span>
      </div>
      <div className={classes.PresentationText}>
        <img src={shopSolid} alt='shop' />
        <span>Resumo da compra</span>
      </div>
      <div>
        <h3>Produtos selecionados</h3>
      </div>
      <div>
        <h3>Agendamento de retirada</h3>
        <p>Local</p>
        <p>Data e horário</p>
      </div>
      <div className={classes.FinishShopButton}>
        <button >Finalize o pedido e avalie a compra</button>
      </div>
    </div>
  )
}

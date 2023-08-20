import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import shopSolid from '../../images/shop-solid.png'
import iconeLocal from '../../images/ico-local.png'
import iconPay from '../../images/ico-pay.png'
import { useGetProductsContext } from '../context/useGetInfoContext';
import { ProductCard } from '../molecules/ProductCard';
import { FinalDialog } from '../molecules/FinalDialog';

const useStyles = makeStyles(() => ({
  HeaderShopCar: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '1px'
  },
  PresentationText: {
    margin: '2.5em',
    '& span': {
      fontFamily: 'Secular One, sans-serif',
      fontSize: '3em',
      fontWeight: 'bold'
    },
  },
  SupplyInfomation: {
    display: 'flex',
    marginBottom: '1.5em',
    '& div': {
      marginLeft: '1em',
    }
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
  const { carrinho, handleFinishShooping, isOpen } = useGetProductsContext()
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
        {carrinho.map((produto) => (
          <ProductCard {...produto} key={produto.id} />
        ))}
      </div>
      <div>
        <h3>Agendamento de retirada: </h3>
        <div className={classes.SupplyInfomation}>
          <img src={iconeLocal} alt='Icone local' />
          <div>
            <p style={{ fontWeight: 'bold' }}>Local: </p>
            <p style={{ fontWeight: 'bold' }}>Data e horário: </p>
          </div>
        </div>
        <div className={classes.SupplyInfomation}>
          <img src={iconPay} alt='Icone pagamento' />
          <div>
            <p style={{ fontWeight: 'bold' }}>Pagamento na retirada</p>
            <p>Não aceitamos pagamento via plataforma, desconfie de qualquer solicitação de cadastro do seu cartão nesta página</p>
          </div>
        </div>
      </div>
      <div className={classes.FinishShopButton}>
        <button onClick={() => handleFinishShooping()}>Finalize o pedido e avalie a compra</button>
      </div>
      <div>
        {isOpen ? <FinalDialog /> : null}
      </div>
    </div>
  )
}

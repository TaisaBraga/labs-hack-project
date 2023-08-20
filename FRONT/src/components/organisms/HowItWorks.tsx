import React from 'react'
import WorldsImage from '../../images/World.png'
import Characters from '../../images/personagens.png'
import MarketLaunch from '../../images/Market-launch.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({

}))

export const HowItWorks = () => {
  const classes = useStyles()
  return (
    <div>
      <h3>Como funciona?</h3>
      <div>
        <img src={WorldsImage} alt="WorldImage" />
        <p>Conectamos você com milhares de fornecedores parceiros que anunciam diretamente da nossa plataforma os seus
          alimentos/produtos que possuem pequenas avarias (que não influenciem na qualidade do produto).
        </p>
      </div>
      <div>
        <img src={Characters} alt="Characters" />
        <p>No conforto da sua casa, você irá se cadastrar na nossa plataforma e selecionar os produtos que você deseja.
        </p>
      </div>
      <div>
        <img src={MarketLaunch} alt="MarketLaunch" />
        <p>Basta comparecer no local para realizar a retirada conforme o agendamento que é realizado no momento de finalizar o seu carrinho.
        </p>
      </div>
    </div>
  )
}

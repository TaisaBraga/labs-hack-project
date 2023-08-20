import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

export const ShoppingPage = () => {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '2em' }}>
      <div
        style={{
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
          padding: '1px'
        }}
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon
          style={{
            margin: '5px',
            verticalAlign: 'middle,'
          }} />
        Voltar
      </div>
    </div>
  )
}

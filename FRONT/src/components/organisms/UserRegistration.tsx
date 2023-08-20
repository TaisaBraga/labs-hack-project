import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import imageUser from '../../images/Group.png'
import { makeStyles } from '@mui/styles'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  HeaderShopCar: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    margin: '3em'
  },
  Container: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    marginTop: '5em',
    marginBottom: '5em',

    '& p': {
      fontSize: '1.3em',
      fontWeight: 'bold'
    },

    '& label': {
      fontWeight: 'bold'
    },
    '& input': {
      backgroundColor: '#B1D7B4',
      border: 'none',
      borderRadius: '10px',
      margin: '1em',
      padding: '0.8em',
      width: '20em',
      outline: 'none',
    },
    '& button': {
      backgroundColor: '#7fb77e',
      border: 'none',
      borderRadius: '1.5em',
      cursor: 'pointer',
      fontFamily: 'Secular One, sans-serif',
      fontSize: '2em',
      padding: '0.3em',
      marginTop: '2em'
    }
  },
  HeaderRegistration: {
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'roboto, sans-serif'
  },
  RegistrationForm: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  }
}))

const UserRegistration = () => {
  const classes = useStyles()
  const navigate = useNavigate()


  return (
    <>
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
      <div className={classes.Container}>

        <div className={classes.HeaderRegistration}>
          <img src={imageUser} alt="imageUser" />
          <h3>Cadastre-se</h3>
        </div>
        <div className={classes.RegistrationForm}>
          <label>
            Nome Completo:
            <input type="text" required />
          </label>
          <label>
            E-mail:
            <input type="e-mail" required />
          </label>
          <label>
            Senha:
            <input type="password" required />
          </label>
        </div>
        <div>
          <p>Na nossa plataforma, você será:</p>
          <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="Usuário" control={<Radio />} />
            <FormControlLabel value="second" label="Fornecedor" control={<Radio />} />
          </RadioGroup>
        </div>
        <button>Cadastrar</button>

      </div >
    </>


  )
}

export default UserRegistration
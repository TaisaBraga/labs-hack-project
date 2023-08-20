import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { useGetProductsContext } from '../context/useGetInfoContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import circleCheckSolid from '../../images/circle-check-solid.png'

const useStyles = makeStyles(() => ({
  DialogImage: {
    maxWidth: '8em',
    padding: '2em',
  },
  DialogContent: {
    display: 'flex',

  }
}))

export const FinalDialog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { isOpen, setIsOpen } = useGetProductsContext();

  const handleClickNavigate = () => {
    navigate('/')
    setIsOpen(false)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={classes.DialogContent}>
        <img src={circleCheckSolid} alt='circleCheckSolid' className={classes.DialogImage} />
        <div>
          <DialogTitle id="responsive-dialog-title" style={{ color: '#FF9C51', fontSize: '1.8em', textAlign: 'center' }}>
            {"Compra finalizada com sucesso!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              O fornecedor estará te aguardando na data agendada
            </DialogContentText>
          </DialogContent>
        </div>
      </div>


      <DialogActions >
        <Button onClick={handleClickNavigate} autoFocus style={{ color: '#000' }}>
          Ir para tela inicial
        </Button>
      </DialogActions>
    </Dialog>

  )
}





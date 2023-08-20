// import axios, { AxiosResponse } from 'axios'
// import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../molecules/ProductCard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { makeStyles } from '@mui/styles';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
  BackPageButton: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '21px'
  },
  ProductsList: {
    padding: '2em',
  }
}))

export const ProductsPage = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const getData = async () => {
  //     await axios.get('BASEURL').then((response: AxiosResponse) => {
  //       return setGitRepos(response.data)
  //     })
  //   }
  //   getData()
  // }, [])

  return (
    <div>
      <div
        className={classes.BackPageButton}
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
      <div className={classes.ProductsList}>
        <ProductCard title={"title"} image={"image"} description={"description"} />
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../molecules/ProductCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import noImage from '../../images/sem-imagem.jpg'

interface Product {
  fornecedor_id: number;
  id: number;
  updated_on: string | null;
  name: string;
  description: string;
  created_on: string;
}

const useStyles = makeStyles(() => ({
  BackPageButton: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '21px'
  },
  ProductsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '1em',
    margin: '2em',
    padding: '2em'
    
  },
}));

export const ProductsPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isProduct, setIsProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/produto/');
        setIsProduct(response.data.message);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    getData();
  }, []);

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
        {isProduct.map(item => (
          <div key={item.id}>
            <ProductCard
              title={item.name}
              image={noImage}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

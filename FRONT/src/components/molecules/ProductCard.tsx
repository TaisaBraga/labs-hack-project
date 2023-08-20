import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useGetProductsContext } from '../context/useGetInfoContext';

interface IProducts {
  title?: string,
  image?: string,
  description?: string
}

export const ProductCard = (props: IProducts) => {
  const { adicionarProduto } = useGetProductsContext()


  return (
    <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <AddShoppingCartIcon
        style={{
          float: 'right',
          cursor: 'pointer'
        }}
        onClick={adicionarProduto}

      />
    </Card>
  )
}




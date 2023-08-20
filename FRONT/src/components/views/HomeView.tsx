import { ProductsList } from "../organisms/ProductsList"
import { AboutUs } from "../organisms/AboutUs"

export const HomeView = () => {
  return (
    <div>
      <h1 style={{
        color: '#1E1E1E',
        fontFamily: 'Secular One, sans-serif',
        fontSize: '5em',
        textAlign: 'center'
      }}>Good2Go</h1>
      <AboutUs />
      <ProductsList />
    </div>
  )
}

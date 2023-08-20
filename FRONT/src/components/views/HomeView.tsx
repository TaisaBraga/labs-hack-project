import { ProductsList } from "../organisms/ProductsList"
import { AboutUs } from "../organisms/AboutUs"
import { HowItWorks } from "../organisms/HowItWorks"

export const HomeView = () => {
  return (
    <div>
      <AboutUs />
      <HowItWorks />
      <ProductsList />
    </div>
  )
}

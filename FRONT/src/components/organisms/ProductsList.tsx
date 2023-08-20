// import axios, { AxiosResponse } from 'axios'
// import React, { useEffect } from 'react'
import { ProductCard } from '../molecules/ProductCard'

// useEffect(() => {
//   const getData = async () => {
//   await axios.get('BASEURL').then((response: AxiosResponse) => {
//   return setGitRepos(response.data)
//   })
//   }
//   getData()}, [])

export const ProductsList = () => {
  return (
    <div>
      <ProductCard title={"title"} image={"image"} description={"description"} />
    </div>
  )
}

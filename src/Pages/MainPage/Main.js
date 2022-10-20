import React from 'react'
import Slider from '../../Components/Slider/Slider'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import Categories from '../../Components/Categories/Categories'
import Brands from '../../Components/Brands/Brands'
const Main = () => {
    return (
        <div className="container">
          <Slider/>
          <Categories/>
          <PopularProducts/>
          <Brands/>

        </div>
    )
}
export default Main

import React from 'react'
import "./_product-details.scss"
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation();

    console.log(location.state.product_img)
  return (
    <div>
        <div>
            <div>
                <img src = {require(`../../assets/images/${location.state.product_img}`)}/>
            </div>
            <div>
                <span>{location.state.product_name}</span>
            </div>
            <div className='product-rating'>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
            </div>
            <div>
                MRP : <span>{location.state.price}</span>
                <div>Incluseive of all taxes.</div>
            </div>
            <div>
                <span>Some product description</span>

                <div>
                    <div>
                        <div>
                            <i className='fa fa-shopping-cart'/>
                        </div>
                        <div>Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
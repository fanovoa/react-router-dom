import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShopingCart } from '../hooks/useShopingCart';

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShopingCart();

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ (e) => onProductCountChange(e) }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.15)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                    {
                       Object.entries(shoppingCart).map( ([key,product]) => (
                            <ProductCard
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{width:'100px'}}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.15)' }} />
                            <ProductButtons className="custom-buttons" style={{ display:'flex', justifyContent:'center'}}/>
                        </ProductCard>
                       )) 
                    }          
            </div>
        </div>
    )
}

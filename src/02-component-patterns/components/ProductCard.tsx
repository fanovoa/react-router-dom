import { createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCarHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children:( args:ProductCarHandlers) => JSX.Element;
    className?:string;
    style? :React.CSSProperties,
    onChange? : ( args: onChangeArgs ) => void;
    value?:number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children,product, className, style, onChange, value, initialValues }:Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached ,reset } = useProduct( { onChange , product, value, initialValues } );

    return (

        <Provider  value={{
            counter,
            increaseBy,
            product,
            maxCount
            
        }}>
            <div className={`${styles.productCard} ${className}`}  style={style}>
            { children({
                count:counter,
                increaseBy,
                product,
                maxCount,
                isMaxCountReached,
                reset
            }) }

            </div>
        </Provider>
    )
}


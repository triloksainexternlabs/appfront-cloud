import AutoMotoStoriche from '../../images/Auto Moto Storiche.svg'
import AutocarriFinoA from '../../images/Autocarri Fino A 35 Q.svg';
import Motocicu from '../../images/Motocicu.svg';
import AutocarriOltreQ from '../../images/Autocarri Oltre 35 Q..svg';
import Autovetture from '../../images/Autovetture.svg';
import Ciclomotori from '../../images/Ciclomotori.svg';
import MacchineOperatrici from '../../images/Macchine Operatrici.svg';
import Motocarri from '../../images/Motocarri.svg';
import Rimorchi from '../../images/Rimorchi.svg';
import ProductList from './ProductList'
const ProductListContainer = (props) => {
    const productList = [
        {text : "Autovetture", imageUrl: Autovetture},
        {text : "Motocicu", imageUrl: Motocicu},
        {text : "Ciclomotori", imageUrl: Ciclomotori},
        {text : "Motocarri", imageUrl: Motocarri},
        {text : "Rimorchi", imageUrl: Rimorchi},
        {text : "Autocarri Fino A 35 Q", imageUrl: AutocarriFinoA},
        {text : "Autocarri Oltre 35 Q.", imageUrl: AutocarriOltreQ},
        {text : "Macchine Operatrici", imageUrl: MacchineOperatrici},
        {text : "Auto Moto Storiche", imageUrl: AutoMotoStoriche},
    ]

    return ( 
        <ProductList list={productList} handleScroll={props.handleScroll}/>
     );
}
 
export default ProductListContainer;

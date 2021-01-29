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
        {id:1,text : "Autovetture", imageUrl: Autovetture},
        {id:2,text : "Motocicu", imageUrl: Motocicu},
        {id:3,text : "Ciclomotori", imageUrl: Ciclomotori},
        {id:4,text : "Motocarri", imageUrl: Motocarri},
        {id:5,text : "Rimorchi", imageUrl: Rimorchi},
        {id:6,text : "Autocarri Fino A 35 Q", imageUrl: AutocarriFinoA},
        {id:7,text : "Autocarri Oltre 35 Q.", imageUrl: AutocarriOltreQ},
        {id:8,text : "Macchine Operatrici", imageUrl: MacchineOperatrici},
        {id:9,text : "Auto Moto Storiche", imageUrl: AutoMotoStoriche},
    ]
    return ( 
        <ProductList list={productList} step={props.step} handleScroll={props.handleScroll}/>
     );
}
 
export default ProductListContainer;

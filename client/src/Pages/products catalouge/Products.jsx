import Pricing from "../pricing page/Pricing";
import PRODUCT_TABEL from '../../Assets/ICONS/TABLE_PRODUCTS.svg'
import PRODUCT_BTN from '../../Assets/ICONS/BT_REGISTER_PRODUCT.svg'


const Products = () => {
  return <>
        <Pricing img={PRODUCT_TABEL} btnSvg={PRODUCT_BTN}> Products Catalog</Pricing>

  </>;
};

export default Products;

import Pricing from "../pricing page/Pricing";
import SUPPLIER_TABEL from '../../Assets/ICONS/TABLE_SUPPLIER.svg'
import SUPPLIER_BTN from '../../Assets/ICONS/BT_REGISTER_SUPPLIER.svg'


const Suppliers = () => {
  return <>
    <Pricing img={SUPPLIER_TABEL} btnSvg={SUPPLIER_BTN}>Suppliers Directory</Pricing>
  </>;
};

export default Suppliers;

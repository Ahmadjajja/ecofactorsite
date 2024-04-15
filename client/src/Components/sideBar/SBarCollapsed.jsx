import '../../Pages/productOptimization/ProductOptimization.css'
import BADGE_PRO from "../../Assets/ICONS/BADGE_PRO.svg";
import colorBar from "../../Assets/ICONS/COLORBAR.png";
import dark from "../../Assets/ICONS/ICO_DARK_MODE.svg";
import light from "../../Assets/ICONS/ICO_LIGHT_MODE.svg";


import ICON_CUSTOM_GPT from "../../Assets/ICONS/ICON_CUSTOM_GPT.svg";
import ICON_CUSTOM_GPT_ACTIVE from "../../Assets/ICONS/ICON_CUSTOM_GPT copy.svg";

import ICON_ESG_ACTIVE from '../../Assets/ICONS/ICON_ESG_GUIDELINE active.svg';
import ICON_ESG from '../../Assets/ICONS/ICON_ESG_GUIDELINE.svg';

import GPT_AI_ACTIVE from "../../Assets/ICONS/ICON_GREEN_CHATGPT.png";
import GPT_AI from "../../Assets/ICONS/ICO_WHITE_CHATGPT.png";


import ICON_GUIDLINES_ACTIVE from '../../Assets/ICONS/ICON_GUIDELINE_DATABASE active.svg';
import ICON_GUIDLINES from '../../Assets/ICONS/ICON_GUIDELINE_DATABASE.svg';


import ICON_INTEGRATION from '../../Assets/ICONS/ICON_INTEGRATIONS.svg';
import ICON_INTEGRATION_ACTIVE from '../../Assets/ICONS/ICON_INTEGRATIONS active.svg';

import ICON_MATERIAL_ACTIVE from '../../Assets/ICONS/ICON_MATERIALS active.svg';
import ICON_MATERIAL from '../../Assets/ICONS/ICON_MATERIALS.svg';

import ICON_MOON from "../../Assets/ICONS/ICON_MOON.svg";
import ICON_OPTIMIZATION_ACTIVE from '../../Assets/ICONS/ICON_OPTIMIZER active.svg';
import ICON_OPTIMIZATION from '../../Assets/ICONS/ICON_OPTIMIZER.svg';

import ICON_PRODUCT_ACTIVE from "../../Assets/ICONS/ICON_PRODUCTS active.svg";
import ICON_PRODUCT from "../../Assets/ICONS/ICON_PRODUCTS.svg";

import ICON_SUN from "../../Assets/ICONS/ICON_SUN.svg";
import ICON_SUPLIERS_ACTIVE from '../../Assets/ICONS/ICON_SUPPLIERS active.svg';
import ICON_SUPLIERS from '../../Assets/ICONS/ICON_SUPPLIERS.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const SBarCollapsed = () => {

  const path = useLocation().pathname
  const navigate = useNavigate()
  console.log(path);


  const inventoryData = [
    { icon: ICON_PRODUCT, title: 'Products Catalog', to: '/products', iconActive: ICON_PRODUCT_ACTIVE },
    { icon: ICON_MATERIAL, title: 'Material Catalog', to: '/materials', iconActive: ICON_MATERIAL_ACTIVE },
    { icon: ICON_SUPLIERS, title: 'Supplier Directory', to: '/suppliers', iconActive: ICON_SUPLIERS_ACTIVE },
    { icon: ICON_GUIDLINES, title: 'Documentation catalog', to: '/guidelines', iconActive: ICON_GUIDLINES_ACTIVE },
  ]

  const pages = [
    { icon: ICON_OPTIMIZATION, iconActive: ICON_OPTIMIZATION_ACTIVE, title: 'Product Optimizer AI Assistant', to: '/' },
    { icon: ICON_ESG, iconActive: ICON_ESG_ACTIVE, title: 'Documentation Checker AI Assistant', to: '/esg-guidlines' },
    { icon: GPT_AI, iconActive: GPT_AI_ACTIVE, title: 'Regular ChatGPT 4', to: '/regular-chatgpt4' },
    { icon: ICON_CUSTOM_GPT, iconActive: ICON_CUSTOM_GPT_ACTIVE, class : 'mt-1',  title: 'Upgrade plan to access Custom GPT functionality',  to: '/pricing/customgpt' },
    { icon: ICON_INTEGRATION, iconActive: ICON_INTEGRATION_ACTIVE, title: 'Upgrade plan to access Integration functionality', to: '/pricing/integration'}
  ]

  const historyChats = [
    { icon: ICON_OPTIMIZATION, title: 'History chat conversation 1' },
    { icon: ICON_ESG, title: 'History chat conversation 2' },
    { icon: ICON_OPTIMIZATION, title: 'History chat conversation 3' },

  ]
  return <>
    <div style={{ width: '4vw', backgroundColor: '#2f3135', height: '90vh' }}>
      <div className=" mt-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
        <div className="col mx-3 mt-5 me-1 rounded p-2 " style={{ backgroundColor: "#494c51", }}>
          {inventoryData.map((currElm) => {
            return (
              <>
                <div onClick={() => navigate(currElm.to)} className='my-2 py-1 px-2' style={{position : 'relative', border: currElm.to === path && "1px solid #17c5c4", cursor: "pointer", display: "flex", alignItems: 'center', gap: '1rem', borderRadius: "10px" }}>
                  <img className='compact-sb-icon' src={currElm.to === path ? currElm.iconActive : currElm.icon} alt="icon-one" style={{ fill: "red", width: '1.7rem' }} />
                  <span className='px-2 py-1 compact-sb-text text-white ms-2' style={{borderRadius : '4px' ,position : 'absolute',  left : '100%' , width : 'max-content', backgroundColor : 'black'}}>{currElm.title}</span>
                
                </div>
              </>
            )
          })}
        </div>

        <div className="col ms-4 me-1 mt-2 rounded  "  >
          {pages.map((currElm) => {
            return (
              <>
                <Link to={currElm.to} style={{ display: "flex", alignItems: "center", cursor: currElm.disable && "not-allowed", color: currElm.disable ? "#666" : currElm.to === path ? "#1bd4ad" : "#f2f2f2", textDecoration: "none", marginBottom: ".7rem", gap: '1rem' }}>
                  <span style={{position : 'relative'}}>
                    <img className={`compact-sb-icon ${currElm.class}`} src={currElm.to === path ? currElm.iconActive : currElm.icon} alt="icon" style={{ width: '1.6rem', marginRight: ".9rem" }} />
                    <span className='px-2 py-1 compact-sb-text ms-1' style={{borderRadius : '4px' ,position : 'absolute',  left : '100%' , width : 'max-content', backgroundColor : 'black'}}>{currElm.title} <small>{currElm.subTitle}</small></span>
                  
                  </span>
                </Link>
              </>
            )
          })}
        </div>


        <div className='bottom-user d-flex flex-column gap-2' style={{ position: 'absolute', bottom: '1.7rem', backgroundColor : '#2f3135' }} >
          <img className='rounded-pill ms-3' src={"https://camo.githubusercontent.com/1e6de73a5a5d1800c3f18f294e4b019466d6daa7ac4ddbe713afc5e3ac062547/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f4434443033415148556d6b357863444d6574412f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3430305f3430302f302f313639333430353830343034313f653d3137313532313238303026763d6265746126743d307a4b74676b73684967694439786d6e456a425a7158755731343547774e5676386f6d3958576b424f7259"} alt="" style={{ width: '2.8rem', border : '1px solid #e6e6e6 ' }} />
          <img className='ms-2' src={light} alt="" style={{ width: '90%',  }} />
          <img className='' src={dark} alt="" style={{ width: '2rem', marginLeft : '1.3rem' }} />

        </div>



      </div>
    </div>
  </>;
};

export default SBarCollapsed;

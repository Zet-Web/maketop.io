import React, {createContext, useContext, useEffect, useState} from 'react';
import {MeContext} from "../../pages/_app";
export const PageContext=createContext()
const PageLayer = ({children,serviceType}) => {
    const[isOpen,setIsOpen]=useState(false)
    const [type, setType] = useState({1: 'active', 2: 'disabled'})
    const [windowInnerWidth, setWindowInnerWidth] = useState('');
    const {price, allInfo,getComment,comment} = useContext(MeContext)

    const [style, setStyle] = useState({
        active: {
            background: "linear-gradient(88.32deg, #FEDA7D -15.05%, #D62F81 34.34%, #5E0DFF 108.12%)",
            width: 228
        },
        disabled: {
            background : 'transparent',
            boxShadow:"none",
            width: 228
        }
    })

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth)
        getComment(serviceType)
    }, [ ])
    const [service,setService]=useState('')
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    return (
        <PageContext.Provider value={{setPriceValue,setCounts,setService,setStyle,setType,setIsOpen,isOpen,style,type,service,counts,priceValue,price,allInfo,windowInnerWidth,setWindowInnerWidth} }>
        <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
            {children}
        </div>
        </PageContext.Provider>
    );
};

export default PageLayer;

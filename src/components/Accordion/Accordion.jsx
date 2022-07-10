import {useState} from 'react';
import css from './Accordion.module.css'

const Accordion = ({content})=>{

    const [isOpen, setIsOpen] = useState({info:false, delivery:false});
    const openHandle=(type)=>{
      if(type === "info") return setIsOpen({info: !isOpen.info, delivery:false});
      if(type === "delivery") return setIsOpen({info:false, delivery:!isOpen.delivery});
    }

    return (
        <div className={css.accord}>
            <div className={css.accord_content}>
                <div className={css.add}>
                    <h3 > ADDITIONAL INFORMATION</h3>
                    <i onClick={()=> openHandle("info")} className={`fas ${isOpen.info ? "fa-minus": " fa-plus"}`}></i>
                </div>
                <div className={`transition-all ${isOpen.info && "opacity-100 py-4 "}`}>
                    <div  className={css.open} >{isOpen.info && content } </div>
                </div>
            </div>

            <div className={css.accord_content}>
                <div className={css.add} >
                    <h3 >  DELIVERY </h3>
                    <i onClick={()=> openHandle("delivery")} className={`fas ${isOpen.delivery ? "fa-minus": " fa-plus"}`}></i>
                </div>
                <div className={`transition-all ${isOpen.delivery && "opacity-100 py-4 "}`}>
                    <div className={css.open} > {isOpen.delivery && content } </div>
                </div>
            </div>
    </div>
    )
}
export default Accordion;
/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */


/**
* Node Modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({
     href,
     target = '_self',
     label,
     icon,
     classes
}) => {
    if(href){
     return(
       <a 
       href={href}
       target={target}
       className={`btn btn-primary ${classes ? classes : ''}`}
       >
        {label}

        {icon ? 
         <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
         </span>
         : undefined
        }

       </a>
        ) 
    }else{
        return(
          <button className={"btn btn-primary " + classes}>
            {label}
            {icon ? 
         <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
         </span>
         : undefined
        }
          </button>
        )
    }
  
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node,
    classes: PropTypes.string
}



/**
 * Otline_ Button
 */

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
   if(href){
    return(
      <a 
      href={href}
      target={target}
      className={`btn btn-outline ${classes ? classes : ''}`}
      >
       {label}

       {icon ? 
        <span className="material-symbols-rounded" aria-hidden="true">
           {icon}
        </span>
        : undefined
       }

      </a>
       ) 
   }else{
       return(
         <button className={"btn btn-outline " + classes}>
           {label}
           {icon ? 
        <span className="material-symbols-rounded" aria-hidden="true">
           {icon}
        </span>
        : undefined
       }
         </button>
       )
   }
 
}

ButtonOutline.propTypes = {
   label: PropTypes.string.isRequired,
   href: PropTypes.string,
   target: PropTypes.string,
   icon: PropTypes.node,
   classes: PropTypes.string
}



export{ 
    ButtonPrimary,
    ButtonOutline
};

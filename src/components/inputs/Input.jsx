import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'

const Input = ({ label, name, showErrors = true, format, ...props }) => {

   const [isFocus, setIsFocus] = useState(false)
   const [hasValue, setHasValue] = useState(false)

   const { values, errors, touched, handleChange, handleBlur: fHandleBlur } = useFormikContext()
   const value = values[name]
   const error = errors[name] && touched[name]

   const handleFocus = (e) => {
      if (props.readOnly) return
      setIsFocus(true)
   }
   const handleBlur = (e) => {
      setIsFocus(false);
      if (e.target.value) {
         setHasValue(true);
      } else {
         setHasValue(false);
      }
      fHandleBlur(e)
   }

   return (
      <div >
         <div className="relative">
            <label htmlFor={name}
               className={`absolute  pointer-events-none left-2
                            ${error ? 'text-rose-400' : isFocus && !props.readOnly ? 'text-primary-400' : 'text-gray-700'} ${isFocus || hasValue ? 'bottom-[1.2rem] text-xs' : 'bottom-[0.4rem] '} transition-all duration-200 `}>{label}</label>
            {format === 'currency' && <span className="absolute text-gray-700 transform -translate-y-1/2 left-4 top-1/2">$</span>}
            <input
               id={name}
               name={name}
               onFocus={handleFocus}
               onChange={handleChange}
               value={value || ""}
               onBlur={handleBlur}
               className={`w-full px-2 pt-3  text-base text-gray-900 border rounded-lg outline-none  duration-200 font-medium 
                    ${error ? 'border-rose-400' : isFocus ? 'border-gray-700' : !props.readOnly ? 'hover:border-gray-700' : ''} 
                    ${format === 'currency' ? 'pl-8' : ''}
                    `}
               onWheel={(e) => e.target.blur()}
               {...props} />
         </div>
         {/* {
            showErrors &&
            <div className={`flex pl-1 text-sm h-9 text-rose-400 ${error ? 'opacity-100' : 'opacity-0'} duration-200`}>
               {error && <>{error}</>}
            </div>
         } */}
      </div>
   )
}

export default Input
import React, { useEffect, useRef, useState } from 'react'
import AbsScroll from '../AbsScroll'
import { useFormikContext } from 'formik'


const Options = ({ label, name, options, selecting, ...props }) => {

   const [showOpts, setShowOpts] = useState(false)

   const inptRef = useRef(null)

   const { values, errors, touched, handleChange, handleBlur, setFieldValue } = useFormikContext()

   const error = errors[name] && touched[name]
   const value = values[name]


   const handleOptClick = (e, option) => {
      inptRef.current.blur()
      if (value === option) return
      setFieldValue(name, option)
      selecting && selecting(true)
   }

   const handleInptChange = (e) => {
      handleChange(e)
   }

   return (
      <div >
         <div className="relative">
            <label htmlFor={name} className={`absolute left-2  ${showOpts ? 'text-emerald-500' : 'text-gray-700'} ${value ? "bottom-[1.2rem] text-xs" : "bottom-[0.4rem] "} pointer-events-none up ${error && touched ? 'text-rose-400' : ''} transition-all duration-200 `}>{label}</label>
            <input
               ref={inptRef}
               id={name}
               readOnly
               value={options.find(o => o.value === value)?.label || ""}
               onChange={handleInptChange}
               onBlur={(e) => { setShowOpts(false); handleBlur(e) }}
               onFocus={() => setShowOpts(true)}
               className={`cursor-pointer text-start w-full px-2 pt-3 text-base text-gray-700 border rounded-lg outline-none  duration-200 font-medium appearance-none ${error && touched ? 'border-rose-400' : showOpts ? 'border-emerald-500' : ''} brdoer-gray-200 hover:border-emerald-500`}
               {...props}
            />
            {
               showOpts &&
               <ul className="absolute z-10 w-full mt-1 duration-200 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-md text-start">
                  <AbsScroll vertical>
                  </AbsScroll>
                  {options.map((option, index) => (
                     <li
                        key={index}
                        className="px-4 py-2 text-gray-800 duration-200 cursor-pointer hover:bg-gray-200"
                        onMouseDown={(e) => handleOptClick(e, option.value)}>
                        {option.label}
                     </li>
                  ))}
               </ul>
            }

            <button
               type="button"
               onClick={(e) => {
                  e.stopPropagation();
                  inptRef.current.focus();
               }}
               className='absolute right-0 w-10 h-10 text-gray-600 -translate-y-1/2 total-center top-1/2'>
               {/* {showOpts ? <MyIcons.Up size="22px" /> : <MyIcons.Down size="22px" />} */}
            </button>

         </div>
         <div className={`flex pl-1 text-sm h-9 text-rose-400 ${error && touched ? 'opacity-100' : 'opacity-0'} duration-200`}>
            {error && touched && <>{error}</>}
         </div>
      </div>
   )
}

export default Options
import React from 'react'
import { SvgProps } from '../../../components/Svg'
import Svg from '../../../components/Svg/Svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' {...props}>
      <defs>
        <radialGradient id='radial-gradient' cx='0.403' cy='0.349' r='0.5' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#fdbbf1' />
          <stop offset='1' stopColor='#e8dbf2' />
        </radialGradient>
        <radialGradient id='radial-gradient-2' cx='0.403' cy='0.349' r='0.5' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#fff' />
          <stop offset='1' stopColor='#cebdca' />
        </radialGradient>
        <clipPath id='clip-Custom_Size_2'>
          <rect width='30' height='30' />
        </clipPath>
      </defs>
      <g id='Custom_Size_2' data-name='Custom Size – 2' clipPath='url(#clip-Custom_Size_2)'>
        <g id='Group_472' data-name='Group 472' transform='translate(-32.124 -23.48)'>
          <g id='Ellipse_362' data-name='Ellipse 362' transform='matrix(0.616, 0.788, -0.788, 0.616, 45.552, 25.534)'
             fill='none' stroke='#afa3cc' strokeWidth='1'>
            <ellipse cx='10.813' cy='10.813' rx='10.813' ry='10.813' stroke='none' />
            <ellipse cx='10.813' cy='10.813' rx='10.313' ry='10.313' fill='none' />
          </g>
          <g id='Group_386' data-name='Group 386' transform='translate(33.883 24.94)'>
            <g id='Ellipse_209' data-name='Ellipse 209' transform='translate(3.204)' fill='none' stroke='#afa3cc'
               strokeWidth='1'>
              <ellipse cx='11.858' cy='11.858' rx='11.858' ry='11.858' stroke='none' />
              <ellipse cx='11.858' cy='11.858' rx='11.358' ry='11.358' fill='none' />
            </g>
            <g id='Ellipse_232' data-name='Ellipse 232' transform='translate(0 0.126)' fill='none' stroke='#afa3cc'
               strokeWidth='1'>
              <ellipse cx='11.162' cy='11.162' rx='11.162' ry='11.162' stroke='none' />
              <ellipse cx='11.162' cy='11.162' rx='10.662' ry='10.662' fill='none' />
            </g>
            <g id='Ellipse_208' data-name='Ellipse 208' transform='translate(3.333 4.217)' fill='none' stroke='#afa3cc'
               strokeWidth='1'>
              <ellipse cx='11.162' cy='11.162' rx='11.162' ry='11.162' stroke='none' />
              <ellipse cx='11.162' cy='11.162' rx='10.662' ry='10.662' fill='none' />
            </g>
            <path id='Path_962' data-name='Path 962'
                  d='M10.095,0A10.095,10.095,0,1,1,0,10.095,10.095,10.095,0,0,1,10.095,0Z'
                  transform='translate(2.358 2.925)' opacity='0.366' fill='url(#radial-gradient)' />
            <path id='Path_963' data-name='Path 963' d='M4.668,0A4.669,4.669,0,1,1,0,4.669,4.668,4.668,0,0,1,4.668,0Z'
                  transform='translate(7.375 9.12)' opacity='0.822' fill='url(#radial-gradient-2)' />
          </g>
        </g>
      </g>
    </Svg>

  )
}

export default Icon
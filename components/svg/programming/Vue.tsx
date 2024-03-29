import React, { FC, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number | string
  height?: number | string
}

const Vue: FC<Props> = ({ width = 30, height = 30, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M-512-128H768v800H-512z"
      style={{
        fill: 'none',
      }}
    />
    <path
      d="M17.595 11.204h8.91l5.536 9.391 5.591-9.391h8.831L32.041 36.563 17.595 11.204Z"
      style={{
        fill: '#435466',
      }}
    />
    <path
      d="m8.089 11.204 23.952 41.845 24.126-41.845h-9.704L32.041 36.563 17.595 11.204H8.089Z"
      style={{
        fill: '#4dba87',
      }}
    />
  </svg>
)
export default Vue

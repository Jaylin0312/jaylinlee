import React, { FC, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number | string
  height?: number | string
}

const Firebase: FC<Props> = ({ width = 30, height = 30, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="m5.8 24.6.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 0 0-1.227.207Z"
      style={{
        fill: '#ffc24a',
      }}
    />
    <path
      d="m5.9 24.42.128-.25 7.937-15.056-3.526-6.666a.6.6 0 0 0-1.133.206Z"
      style={{
        fill: '#ffa712',
      }}
    />
    <path
      d="m16.584 14.01 2.632-2.7-2.633-5.021a.678.678 0 0 0-1.195 0l-1.407 2.682V9.2Z"
      style={{
        fill: '#f4bd62',
      }}
    />
    <path
      d="m16.537 13.9 2.559-2.62-2.559-4.88a.589.589 0 0 0-1.074-.047l-1.414 2.729-.042.139Z"
      style={{
        fill: '#ffa50e',
      }}
    />
    <path
      d="m5.802 24.601.077-.078.279-.113 10.26-10.222.13-.354-2.559-4.878-8.187 15.645z"
      style={{
        fill: '#f6820c',
      }}
    />
    <path
      d="m16.912 29.756 9.288-5.179-2.654-16.331a.635.635 0 0 0-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 0 0 1.878 0"
      style={{
        fill: '#fde068',
      }}
    />
    <path
      d="M26.115 24.534 23.483 8.326a.557.557 0 0 0-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 0 0 1.863 0Z"
      style={{
        fill: '#fcca3f',
      }}
    />
    <path
      d="M16.912 29.6a1.927 1.927 0 0 1-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 0 0 1.878 0l9.289-5.178-.023-.14Z"
      style={{
        fill: '#eeab37',
      }}
    />
  </svg>
)
export default Firebase

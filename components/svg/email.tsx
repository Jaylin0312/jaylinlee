import React, { FC, SVGProps } from 'react'

const Email: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#cbd5e1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1ZM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4Z"/>
  </svg>
)
export default Email
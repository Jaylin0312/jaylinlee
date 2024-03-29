import React, { FC, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

const Flutter: FC<Props> = ({ width = 30, height = 30, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0.29 0.22 77.26 95.75"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#02539a"
        d="M48.75 95.97 22.84 70.23l14.32-14.57 40.39 40.31z"
      />
      <g fill="#45d1fd">
        <path
          fillOpacity={0.85}
          d="M22.52 70.25 48.2 44.57h28.87L37.12 84.52z"
        />
        <path d="m.29 47.85 14.58 14.57L77.07.22H48.05z" />
      </g>
    </g>
  </svg>
)
export default Flutter

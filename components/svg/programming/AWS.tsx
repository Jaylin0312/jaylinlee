import React, { FC, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

const AWS: FC<Props> = ({ width = 30, height = 30, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#fff"
      d="M13.527 21.529c0 .597.064 1.08.176 1.435.128.355.287.742.511 1.161.08.129.112.258.112.371 0 .161-.096.322-.303.484l-1.006.677a.758.758 0 0 1-.415.145c-.16 0-.319-.081-.479-.226a4.983 4.983 0 0 1-.575-.758c-.16-.274-.319-.58-.495-.951-1.245 1.483-2.81 2.225-4.694 2.225-1.341 0-2.411-.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37.479-2.483 1.453-3.321s2.267-1.258 3.911-1.258c.543 0 1.102.048 1.692.129s1.197.21 1.836.355v-1.177c0-1.225-.255-2.08-.75-2.58-.511-.5-1.373-.742-2.602-.742a7.15 7.15 0 0 0-1.724.21 12.57 12.57 0 0 0-1.724.548 4.637 4.637 0 0 1-.559.21.983.983 0 0 1-.255.048c-.224 0-.335-.161-.335-.5v-.79c0-.258.032-.451.112-.564.08-.113.224-.226.447-.339.559-.29 1.229-.532 2.012-.726a9.567 9.567 0 0 1 2.49-.306c1.9 0 3.289.435 4.183 1.306.878.871 1.325 2.193 1.325 3.966v5.224h.03zm-6.482 2.45c.527 0 1.07-.097 1.644-.29.575-.193 1.086-.548 1.517-1.032.255-.306.447-.645.543-1.032.096-.387.16-.855.16-1.403v-.677c-.463-.113-.958-.21-1.469-.274a12.012 12.012 0 0 0-1.501-.097c-1.07 0-1.852.21-2.379.645s-.782 1.048-.782 1.854c0 .758.192 1.322.591 1.709.383.404.942.597 1.676.597zm12.82 1.742c-.287 0-.479-.048-.607-.161-.128-.097-.239-.322-.335-.629l-3.752-12.463c-.096-.322-.144-.532-.144-.645 0-.258.128-.403.383-.403h1.565c.303 0 .511.048.623.161.128.097.223.322.319.629l2.682 10.674 2.49-10.674c.08-.322.176-.532.303-.629.128-.097.351-.161.639-.161h1.277c.303 0 .511.048.639.161.128.097.239.322.303.629l2.522 10.803 2.762-10.803c.096-.322.208-.532.319-.629.128-.097.335-.161.623-.161h1.485c.255 0 .399.129.399.403 0 .081-.016.161-.032.258s-.048.226-.112.403l-3.847 12.463c-.096.322-.208.532-.335.629s-.335.161-.607.161h-1.373c-.303 0-.511-.048-.639-.161s-.239-.322-.303-.645l-2.474-10.4-2.458 10.384c-.08.322-.176.532-.303.645-.128.113-.351.161-.639.161h-1.373zm20.514.435c-.83 0-1.66-.097-2.458-.29-.798-.193-1.421-.403-1.836-.645-.255-.145-.431-.306-.495-.451a1.143 1.143 0 0 1-.096-.451v-.822c0-.339.128-.5.367-.5.096 0 .192.016.287.048.096.032.239.097.399.161a8.609 8.609 0 0 0 1.756.564 9.497 9.497 0 0 0 1.9.193c1.006 0 1.788-.177 2.331-.532.543-.355.83-.871.83-1.532 0-.451-.144-.822-.431-1.129-.287-.306-.83-.58-1.612-.838l-2.315-.726c-1.165-.371-2.027-.919-2.554-1.645-.527-.709-.798-1.499-.798-2.338 0-.677.144-1.274.431-1.79s.671-.967 1.149-1.322a5.04 5.04 0 0 1 1.66-.838A6.946 6.946 0 0 1 40.906 11c.351 0 .718.016 1.07.064.367.048.702.113 1.038.177.319.081.623.161.91.258s.511.193.671.29c.224.129.383.258.479.403.096.129.144.306.144.532v.758c0 .339-.128.516-.367.516-.128 0-.335-.064-.607-.193-.91-.419-1.932-.629-3.065-.629-.91 0-1.628.145-2.123.451-.495.306-.75.774-.75 1.435 0 .451.16.838.479 1.145.319.306.91.613 1.756.887l2.267.726c1.149.371 1.98.887 2.474 1.548s.734 1.419.734 2.257c0 .693-.144 1.322-.415 1.87a4.335 4.335 0 0 1-1.165 1.419c-.495.403-1.086.693-1.772.903a7.54 7.54 0 0 1-2.285.339z"
    />
    <path
      fill="#f90"
      d="M43.396 33.992c-5.252 3.918-12.883 5.998-19.445 5.998-9.195 0-17.481-3.434-23.739-9.142-.495-.451-.048-1.064.543-.709 6.769 3.966 15.118 6.369 23.755 6.369 5.827 0 12.229-1.225 18.119-3.741.879-.403 1.629.58.767 1.225zm2.187-2.515c-.671-.871-4.438-.419-6.146-.21-.511.064-.591-.387-.128-.726 3.001-2.128 7.934-1.516 8.509-.806.575.726-.16 5.708-2.969 8.094-.431.371-.846.177-.655-.306.639-1.596 2.06-5.192 1.389-6.046z"
    />
  </svg>
)
export default AWS

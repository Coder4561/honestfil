import * as React from "react"
import { SVGProps } from "react"

export const WalletCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#fff" />
    <path
      d="M8.5 11.417c0-1.15.933-2.084 2.083-2.084h11.488c.089 0 .133 0 .17.006a.5.5 0 0 1 .42.42c.006.037.006.081.006.17 0 .53 0 .796-.034 1.018a3 3 0 0 1-2.52 2.52c-.221.033-.487.033-1.018.033H18.5m-10-2.083c0 1.15.933 2.083 2.083 2.083H21.5c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1.333m-15-5.416V19.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-1.333m0 0h-3.333c-.623 0-.935 0-1.167-.134a1 1 0 0 1-.366-.366c-.134-.232-.134-.544-.134-1.167s0-.935.134-1.167a1 1 0 0 1 .366-.366c.232-.134.544-.134 1.167-.134H23.5m0 3.334v-3.334"
      stroke="url(#a)"
      strokeWidth={2}
    />
    <defs>
      <linearGradient
        id="a"
        x1={24.629}
        y1={23.5}
        x2={6.13}
        y2={22.584}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
    </defs>
  </svg>
)



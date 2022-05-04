/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <path d="M27.5318 9.91614C29.1238 2.87791 28.7048 1.46275 25.9398 0.615624C22.7559 -0.359848 19.4047 5.20823 17.3407 11.9449C16.7294 13.9402 16.5899 16.0311 16.4622 17.9428C16.409 18.7405 16.3578 19.507 16.2753 20.2223C16.0145 22.4847 16.2204 23.9091 18.52 25.4435C20.6679 25.9441 22.6721 24.9143 23.6775 18.8815C24.1342 17.093 24.5044 16.5142 24.9844 15.7638C25.5614 14.862 26.297 13.7121 27.5318 9.91614ZM9.63806 21.935C10.0226 27.6793 8.70312 28.7423 5.81481 28.8857C2.48887 29.051 1.06891 24.7456 0.719324 17.7086C0.644911 16.2106 0.915889 14.8978 1.17348 13.6499C1.42389 12.4367 1.66164 11.2849 1.5572 10.0838C1.22205 6.22955 1.5572 3.46453 4.70743 2.9965C6.91253 3.03777 8.09316 4.63753 8.43422 10.6226C8.43883 12.6054 8.60918 13.6093 8.83919 14.9647C9.08065 16.3876 9.38786 18.1979 9.63806 21.935Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
        <path d="M30 0.347657L2.14691 0.347656L2.14691 3.96347L30 3.96347V0.347657ZM8.39646e-08 4.81177L27.8531 4.81177V6.73267L0 6.73267L8.39646e-08 4.81177ZM9.7173 8.31458L25.0845 8.31458V10.8004H9.7173V8.31458Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
        <path d="M1.13829 0.655366C1.07606 0.740642 0.983559 0.7947 0.880275 0.7947C0.692907 0.7947 0.541016 0.6168 0.541016 0.39735C0.541016 0.1779 0.692907 0 0.880275 0C1.02604 0 1.15033 0.107667 1.19834 0.258805C1.60677 0.333864 2.00079 0.398137 2.39065 0.461734C2.85283 0.537126 3.30919 0.611569 3.77683 0.701905C3.93667 0.732781 4.09663 0.763449 4.25648 0.794095C5.95653 1.12003 7.64318 1.4434 9.02206 1.98659C10.5306 2.58086 12.4654 3.77619 13.4324 4.90878C15.6128 7.4625 17.0028 9.39347 18.57 12.7938C18.8401 12.6137 19.1232 12.5179 19.415 12.5179C19.6758 12.5179 19.9297 12.5944 20.1735 12.7393C21.7305 9.37277 23.1172 7.44882 25.2859 4.90878C26.2529 3.77619 28.1878 2.58086 29.6963 1.98659C31.0752 1.4434 32.7618 1.12003 34.4619 0.794095L34.4633 0.793821C34.6227 0.763266 34.7822 0.732689 34.9415 0.701905C35.4092 0.611569 35.8655 0.537126 36.3277 0.461734C36.7176 0.398137 37.1116 0.333864 37.52 0.258805C37.568 0.107667 37.6923 0 37.8381 0C38.0255 0 38.1773 0.1779 38.1773 0.39735C38.1773 0.6168 38.0255 0.7947 37.8381 0.7947C37.7348 0.7947 37.6423 0.740642 37.5801 0.655366L37.3779 0.701905L37.3778 0.701927C36.5451 0.849787 35.7304 0.994439 34.9415 1.14683C33.0854 1.50537 31.5173 1.99889 30.0358 2.58251C28.5543 3.16613 26.711 4.68836 25.7948 5.76142C23.3767 8.59357 22.8553 9.88154 21.8538 12.3551C21.6669 12.8168 21.4632 13.3198 21.2274 13.8818C22.1683 15.4335 22.7925 18.1579 22.7925 21.2596C22.7925 26.0875 21.2803 30.0013 19.415 30.0013C17.5497 30.0013 16.0375 26.0875 16.0375 21.2596C16.0375 18.2302 16.6329 15.5607 17.5374 13.9922C17.2817 13.3854 17.0637 12.8468 16.8646 12.3551C15.8631 9.88154 15.3416 8.59357 12.9235 5.76142C12.0074 4.68836 10.1641 3.16613 8.68259 2.58251C7.20107 1.99889 5.63292 1.50537 3.77683 1.14683C2.98793 0.994432 2.17321 0.849772 1.34043 0.701905L1.13829 0.655366Z" />
    ),
    viewBox: `0 0 38 30`,
  },
  upDown: {
    shape: (
        <path d="M26.0371 2C13.2872 6.71695 19.1823 11.0907 17.8116 16.7548C15.5009 26.3038 -2.30616 16.7548 2.86563 35.0163" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
        <circle 
            cx="15" 
            cy="15" 
            r="15"
        />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
        <path d="M11.7305 8.30048C12.1629 8.55553 12.622 8.85022 13.1027 9.15877C15.2026 10.5065 17.7147 12.1189 20.2081 11.8491C23.0283 11.5439 25.5002 9.00779 27.3003 7.16094C27.6725 6.77906 28.016 6.42665 28.3279 6.12952C29.3964 5.55189 30 4.89595 30 4.20054C30 1.88094 23.2843 0.000535413 15 0.000535413C6.71573 0.000535413 0 1.88094 0 4.20054C0 6.20571 5.0185 7.88269 11.7305 8.30048Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
        <path d="M13.9236 1.12534C13.9934 0.708892 13.7123 0.314749 13.2958 0.245001C12.8794 0.175254 12.4852 0.456314 12.4155 0.872766C12.3786 1.09312 12.3426 1.30632 12.3077 1.51291L12.3076 1.51344C11.7205 4.99111 11.4502 6.59276 12.4751 8.8188C13.0913 10.1573 12.6395 11.0642 12.126 12.0948L12.053 12.2416C11.8712 12.6085 11.6431 13.0742 11.5693 13.5864C11.1744 13.7308 10.7835 13.8983 10.3981 14.0836C10.4312 13.8346 10.5148 13.5578 10.6428 13.23C10.7058 13.0686 10.7821 12.8941 10.8638 12.7074C11.3551 11.5843 12.0405 10.0176 11.1941 8.17931C10.9252 7.59524 10.5967 7.16473 10.3415 6.83031L10.3043 6.7815C10.0301 6.42146 9.88623 6.21227 9.81649 5.97426C9.69001 5.54256 9.74011 4.71333 11.1524 2.39708C11.3722 2.03656 11.2582 1.5661 10.8976 1.34627C10.5371 1.12645 10.0667 1.24051 9.84684 1.60103C8.44872 3.89403 8.01491 5.26375 8.34907 6.40421C8.50809 6.94694 8.82601 7.36427 9.08041 7.69823L9.0879 7.70806L9.10665 7.73267L9.10666 7.73269C9.3693 8.0774 9.60809 8.39081 9.80514 8.8188C10.3443 9.98976 9.97518 10.8636 9.50189 11.9843C9.40936 12.2034 9.31284 12.4319 9.21835 12.6739C8.97048 13.3088 8.74394 14.0677 8.90959 14.8949C7.44126 15.7836 6.08577 16.847 4.9243 17.7582L4.9241 17.7583C4.66837 17.959 4.42204 18.1522 4.18599 18.3346C2.19369 18.8911 0.973443 19.6861 0.899397 20.6454C0.720881 22.9581 7.27198 25.3498 15.5317 25.9874C23.7914 26.6249 30.6319 25.2669 30.8104 22.9542C30.916 21.5863 28.6672 20.1907 25.1031 19.1469C24.5251 18.7067 23.9095 18.1844 23.2598 17.6332L23.2597 17.6331C22.1625 16.7022 20.9681 15.6888 19.6933 14.8492C20.2382 13.3359 21.1226 12.3767 22.0568 11.7572C23.2759 10.9487 24.6344 10.6848 25.5609 10.6189C27.2743 10.497 28.9504 10.0101 29.8384 8.78754C30.781 7.48986 30.6066 5.72154 29.4413 3.6255C29.2361 3.25644 28.7706 3.12359 28.4015 3.32876C28.0325 3.53394 27.8996 3.99944 28.1048 4.3685C29.1636 6.27301 29.0172 7.31616 28.6012 7.8889C28.1306 8.53677 27.0615 8.97919 25.4524 9.09366C24.3719 9.17052 22.7266 9.47819 21.2117 10.4828C20.0644 11.2436 19.0219 12.3854 18.3576 14.059C18.1973 13.9756 18.0359 13.8961 17.8735 13.8208C17.8782 13.7027 17.8875 13.5897 17.9009 13.4813C17.9855 12.7973 18.2389 12.2584 18.624 11.7813C19.0195 11.291 19.5638 10.8537 20.2483 10.3989C20.6897 10.1057 21.1533 9.82755 21.6532 9.52762L21.6533 9.52756C21.9445 9.3528 22.2481 9.17066 22.5668 8.97384C23.4462 8.43069 24.0853 7.4112 24.5043 6.23336C24.9308 5.03443 25.1665 3.57064 25.1665 1.99906C25.1665 1.5768 24.8242 1.2345 24.402 1.2345C23.9797 1.2345 23.6374 1.5768 23.6374 1.99906C23.6374 3.42747 23.4219 4.71368 23.0636 5.72083C22.6978 6.74906 22.2185 7.39171 21.7633 7.67286C21.4835 7.84563 21.1973 8.01748 20.9124 8.18856L20.9124 8.18858L20.9124 8.18859L20.9124 8.1886L20.9123 8.18862C20.3885 8.50317 19.869 8.8151 19.4022 9.12527C18.6673 9.61347 17.9734 10.1525 17.4339 10.821C16.8882 11.4974 16.5114 12.2927 16.3862 13.2709C16.1816 13.2154 15.9756 13.1681 15.7682 13.13C15.7934 12.9616 15.8273 12.795 15.8669 12.6231C15.8989 12.4844 15.9347 12.3423 15.972 12.1947C16.197 11.3029 16.4735 10.207 16.2588 8.40842C16.2206 8.08889 16.3317 7.70341 16.6574 7.18812C16.9751 6.68539 17.4271 6.16442 17.9482 5.56383L17.992 5.51333C18.513 4.91276 19.091 4.24158 19.5436 3.51947C19.999 2.79296 20.3611 1.96407 20.4049 1.0351C20.4248 0.61332 20.0991 0.255258 19.6773 0.235349C19.2555 0.215441 18.8974 0.541225 18.8775 0.963008C18.8506 1.53404 18.6253 2.10541 18.248 2.70736C17.8679 3.31371 17.3679 3.89918 16.8369 4.51136L16.7577 4.60256C16.2677 5.16705 15.7463 5.76761 15.3648 6.37115C14.9618 7.00878 14.6414 7.76028 14.7405 8.58969C14.9204 10.097 14.7084 10.9432 14.4917 11.8085C14.4528 11.9637 14.4138 12.1194 14.3769 12.2797C14.3224 12.516 14.2733 12.7608 14.2394 13.0222C13.9348 13.0349 13.6309 13.067 13.3284 13.1162C13.3572 13.055 13.3887 12.9899 13.4231 12.9205C13.4526 12.861 13.4834 12.7997 13.5152 12.7366L13.5153 12.7365C14.0307 11.7122 14.793 10.197 13.864 8.17931C13.0403 6.39029 13.229 5.26596 13.862 1.49288L13.9236 1.12534Z" />

    ),
    viewBox: `0 0 31 27`,
  },
  hamburger: {
    shape: (
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2C24 3.10457 23.1046 4 22 4H2C0.895431 4 0 3.10457 0 2ZM0 10C0 8.89543 0.895431 8 2 8H22C23.1046 8 24 8.89543 24 10C24 11.1046 23.1046 12 22 12H2C0.895431 12 0 11.1046 0 10ZM2 16C0.895431 16 0 16.8954 0 18C0 19.1046 0.895431 20 2 20H22C23.1046 20 24 19.1046 24 18C24 16.8954 23.1046 16 22 16H2Z" />

    ),
    viewBox: `0 0 24 20`,
  },
  close: {
    shape: (
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/>
    ),
    viewBox: `0 0 512 512`,
  },
  day: {
    shape: (
      <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"/>
    ),
    viewBox: `0 0 512 512`,
  },
  night: {
    shape: (
      <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"/>
    ),
    viewBox: `0 0 512 512`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "hamburger" | "close" | "day" | "night"

type SVGProps = {
  relativePosition?: boolean
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  right: string
  top: string
  hiddenMobile?: boolean
}

const Svg = ({ stroke = false, color = ``, width, icon, left, right, top, hiddenMobile = false, relativePosition = false }: SVGProps) => (
  <svg
    sx={{
      position: relativePosition ? 'relative' : `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      right,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Svg

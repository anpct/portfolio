import React from "react";
import { SVG } from "./svgs.Types";

export const ReactSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 122.88 109.43"
      xmlSpace="preserve"
      fill="#00D8FF">
      <g>
        <path d="M122.88,54.73c0-8.14-10.19-15.85-25.82-20.64c3.61-15.93,2-28.6-5.06-32.66c-1.63-0.95-3.53-1.4-5.61-1.4 v5.59c1.15,0,2.08,0.23,2.86,0.65c3.41,1.95,4.88,9.39,3.73,18.96c-0.28,2.35-0.73,4.83-1.28,7.36c-4.91-1.2-10.27-2.13-15.9-2.73 c-3.38-4.63-6.89-8.84-10.42-12.52C73.54,9.74,81.2,5.59,86.41,5.59V0l0,0c-6.89,0-15.9,4.91-25.02,13.43 C52.27,4.96,43.26,0.1,36.37,0.1v5.59c5.18,0,12.87,4.13,21.04,11.67c-3.51,3.68-7.01,7.86-10.34,12.5 c-5.66,0.6-11.02,1.53-15.93,2.75c-0.58-2.5-1-4.93-1.3-7.26c-1.18-9.57,0.28-17.01,3.66-18.99c0.75-0.45,1.73-0.65,2.88-0.65V0.13 l0,0c-2.1,0-4.01,0.45-5.66,1.4c-7.04,4.06-8.62,16.71-4.98,32.59C10.14,38.92,0,46.61,0,54.73c0,8.14,10.19,15.85,25.82,20.64 c-3.61,15.93-2,28.6,5.06,32.66c1.63,0.95,3.53,1.4,5.64,1.4c6.89,0,15.9-4.91,25.02-13.43c9.12,8.47,18.13,13.33,25.02,13.33 c2.1,0,4.01-0.45,5.66-1.4c7.04-4.06,8.62-16.71,4.98-32.59C112.74,70.56,122.88,62.84,122.88,54.73L122.88,54.73z M72.86,54.73 c0-6.32-5.12-11.45-11.45-11.45c-6.32,0-11.45,5.12-11.45,11.45s5.12,11.45,11.45,11.45C67.74,66.17,72.86,61.05,72.86,54.73 L72.86,54.73z M36.34,0.1L36.34,0.1L36.34,0.1L36.34,0.1z M90.27,38.02c-0.93,3.23-2.08,6.56-3.38,9.89c-1.03-2-2.1-4.01-3.28-6.01 c-1.15-2-2.38-3.96-3.61-5.86C83.56,36.57,86.99,37.22,90.27,38.02L90.27,38.02z M78.8,64.7c-1.95,3.38-3.96,6.59-6.04,9.57 c-3.73,0.33-7.51,0.5-11.32,0.5c-3.78,0-7.56-0.18-11.27-0.48c-2.08-2.98-4.11-6.16-6.06-9.52c-1.9-3.28-3.63-6.61-5.21-9.97 c1.55-3.36,3.31-6.71,5.18-9.99c1.95-3.38,3.96-6.59,6.04-9.57c3.73-0.33,7.51-0.5,11.32-0.5c3.78,0,7.56,0.18,11.27,0.48 c2.08,2.98,4.11,6.16,6.06,9.52c1.9,3.28,3.63,6.61,5.21,9.97C82.4,58.06,80.68,61.41,78.8,64.7L78.8,64.7z M86.89,61.44 c1.35,3.36,2.5,6.71,3.46,9.97c-3.28,0.8-6.74,1.48-10.32,2c1.23-1.93,2.45-3.91,3.61-5.94C84.78,65.47,85.86,63.44,86.89,61.44 L86.89,61.44z M61.49,88.16c-2.33-2.4-4.66-5.08-6.96-8.01c2.25,0.1,4.56,0.18,6.89,0.18c2.35,0,4.68-0.05,6.96-0.18 C66.12,83.08,63.79,85.76,61.49,88.16L61.49,88.16z M42.86,73.41c-3.56-0.53-6.99-1.18-10.27-1.98c0.93-3.23,2.08-6.56,3.38-9.89 c1.03,2,2.1,4.01,3.28,6.01C40.43,69.56,41.63,71.51,42.86,73.41L42.86,73.41z M61.36,21.29c2.33,2.4,4.66,5.08,6.96,8.01 c-2.25-0.1-4.56-0.18-6.89-0.18c-2.35,0-4.68,0.05-6.96,0.18C56.73,26.37,59.06,23.69,61.36,21.29L61.36,21.29z M42.83,36.04 c-1.23,1.93-2.45,3.91-3.61,5.94c-1.15,2-2.23,4.01-3.26,6.01c-1.35-3.36-2.5-6.71-3.46-9.97C35.79,37.24,39.25,36.57,42.83,36.04 L42.83,36.04z M20.16,67.4c-8.87-3.78-14.6-8.74-14.6-12.67c0-3.93,5.74-8.92,14.6-12.67c2.15-0.93,4.51-1.75,6.94-2.53 c1.43,4.91,3.31,10.02,5.64,15.25c-2.3,5.21-4.16,10.29-5.56,15.18C24.7,69.18,22.34,68.33,20.16,67.4L20.16,67.4z M33.64,103.19 c-3.41-1.95-4.88-9.39-3.73-18.96c0.28-2.35,0.73-4.83,1.28-7.36c4.91,1.2,10.27,2.13,15.9,2.73c3.38,4.63,6.89,8.84,10.42,12.52 c-8.17,7.59-15.83,11.75-21.04,11.75C35.34,103.84,34.39,103.62,33.64,103.19L33.64,103.19z M93.05,84.11 c1.18,9.57-0.28,17.01-3.66,18.99c-0.75,0.45-1.73,0.65-2.88,0.65c-5.18,0-12.87-4.13-21.04-11.67c3.51-3.68,7.01-7.86,10.34-12.5 c5.66-0.6,11.02-1.53,15.93-2.76C92.32,79.35,92.77,81.78,93.05,84.11L93.05,84.11z M102.69,67.4c-2.15,0.93-4.51,1.75-6.94,2.53 c-1.43-4.91-3.31-10.02-5.64-15.25c2.3-5.21,4.16-10.29,5.56-15.18c2.48,0.78,4.83,1.63,7.04,2.55c8.87,3.78,14.6,8.74,14.6,12.67 C117.29,58.66,111.56,63.64,102.69,67.4L102.69,67.4z" />
      </g>
    </svg>
  );
};

export const ReactNativeSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 70.29 122.88"
      xmlSpace="preserve"
      fill="#00D8FF">
      <g>
        <path d="M13.26,0h43.76C60.67,0,64,1.49,66.4,3.88c2.4,2.4,3.89,5.73,3.89,9.38v96.36c0,3.65-1.49,6.98-3.89,9.38 c-2.39,2.39-5.73,3.88-9.38,3.88H13.26c-3.65,0-6.98-1.49-9.38-3.88C1.49,116.6,0,113.27,0,109.62V13.26 c0-3.65,1.49-6.98,3.89-9.38C6.28,1.49,9.61,0,13.26,0L13.26,0L13.26,0L13.26,0z M67.09,104.67V13.69H3.18v90.96 C25.41,104.66,44.87,104.67,67.09,104.67L67.09,104.67L67.09,104.67z" />
        <path d="M59.78,59.19c0-3.26-4.09-6.36-10.36-8.28c1.45-6.39,0.8-11.47-2.03-13.1c-0.65-0.38-1.42-0.56-2.25-0.56v2.24 c0.46,0,0.83,0.09,1.15,0.26c1.37,0.78,1.96,3.77,1.5,7.61c-0.11,0.94-0.29,1.94-0.51,2.95c-1.97-0.48-4.12-0.85-6.38-1.1 c-1.36-1.86-2.76-3.55-4.18-5.02c3.27-3.05,6.35-4.71,8.44-4.71v-2.24l0,0c-2.76,0-6.38,1.97-10.04,5.39 c-3.66-3.4-7.27-5.35-10.04-5.35v2.24c2.08,0,5.16,1.66,8.44,4.68c-1.41,1.48-2.81,3.15-4.15,5.01c-2.27,0.24-4.42,0.61-6.39,1.1 c-0.23-1-0.4-1.98-0.52-2.91c-0.47-3.84,0.11-6.82,1.47-7.62c0.3-0.18,0.69-0.26,1.16-0.26l0-2.24l0,0c-0.84,0-1.61,0.18-2.27,0.56 c-2.82,1.63-3.46,6.7-2,13.07c-6.26,1.93-10.33,5.01-10.33,8.27c0,3.27,4.09,6.36,10.36,8.28c-1.45,6.39-0.8,11.47,2.03,13.1 c0.65,0.38,1.42,0.56,2.26,0.56c2.76,0,6.38-1.97,10.04-5.39c3.66,3.4,7.27,5.35,10.04,5.35c0.84,0,1.61-0.18,2.27-0.56 c2.82-1.63,3.46-6.7,2-13.07C55.71,65.54,59.78,62.44,59.78,59.19L59.78,59.19L59.78,59.19z M39.72,59.19 c0-2.54-2.05-4.59-4.59-4.59c-2.54,0-4.59,2.05-4.59,4.59c0,2.54,2.05,4.59,4.59,4.59C37.66,63.78,39.72,61.72,39.72,59.19 L39.72,59.19L39.72,59.19z M25.07,37.28L25.07,37.28L25.07,37.28L25.07,37.28L25.07,37.28z M46.7,52.49 c-0.37,1.3-0.83,2.63-1.36,3.97c-0.41-0.8-0.84-1.61-1.32-2.41c-0.46-0.8-0.95-1.59-1.45-2.35C44.01,51.9,45.39,52.17,46.7,52.49 L46.7,52.49L46.7,52.49z M42.1,63.19c-0.78,1.36-1.59,2.64-2.42,3.84c-1.5,0.13-3.01,0.2-4.54,0.2c-1.52,0-3.03-0.07-4.52-0.19 c-0.83-1.2-1.65-2.47-2.43-3.82c-0.76-1.32-1.46-2.65-2.09-4c0.62-1.35,1.33-2.69,2.08-4.01c0.78-1.36,1.59-2.64,2.42-3.84 c1.5-0.13,3.01-0.2,4.54-0.2c1.52,0,3.03,0.07,4.52,0.19c0.83,1.2,1.65,2.47,2.43,3.82c0.76,1.32,1.46,2.65,2.09,4 C43.54,60.52,42.85,61.87,42.1,63.19L42.1,63.19L42.1,63.19z M45.35,61.88c0.54,1.35,1,2.69,1.39,4c-1.32,0.32-2.7,0.59-4.14,0.8 c0.49-0.77,0.98-1.57,1.45-2.38C44.5,63.5,44.93,62.68,45.35,61.88L45.35,61.88L45.35,61.88z M35.16,72.6 c-0.93-0.96-1.87-2.04-2.79-3.21c0.9,0.04,1.83,0.07,2.76,0.07c0.94,0,1.88-0.02,2.79-0.07C37.01,70.56,36.08,71.64,35.16,72.6 L35.16,72.6L35.16,72.6z M27.68,66.68c-1.43-0.21-2.8-0.47-4.12-0.79c0.37-1.3,0.83-2.63,1.36-3.97c0.41,0.8,0.84,1.61,1.32,2.41 C26.71,65.14,27.19,65.92,27.68,66.68L27.68,66.68L27.68,66.68z M35.1,45.78c0.93,0.96,1.87,2.04,2.79,3.21 c-0.9-0.04-1.83-0.07-2.76-0.07c-0.94,0-1.88,0.02-2.79,0.07C33.25,47.81,34.18,46.74,35.1,45.78L35.1,45.78L35.1,45.78z M27.67,51.69c-0.49,0.77-0.98,1.57-1.45,2.38c-0.46,0.8-0.89,1.61-1.31,2.41c-0.54-1.35-1-2.69-1.39-4 C24.85,52.17,26.24,51.9,27.67,51.69L27.67,51.69L27.67,51.69z M18.58,64.27c-3.56-1.52-5.86-3.51-5.86-5.08 c0-1.58,2.3-3.58,5.86-5.08c0.86-0.37,1.81-0.7,2.78-1.01c0.57,1.97,1.33,4.02,2.26,6.12c-0.92,2.09-1.67,4.13-2.23,6.09 C20.4,64.99,19.45,64.64,18.58,64.27L18.58,64.27L18.58,64.27z M23.99,78.63c-1.37-0.78-1.96-3.77-1.5-7.61 c0.11-0.94,0.29-1.94,0.51-2.95c1.97,0.48,4.12,0.85,6.38,1.1c1.36,1.86,2.76,3.55,4.18,5.02c-3.28,3.04-6.35,4.71-8.44,4.71 C24.67,78.89,24.29,78.8,23.99,78.63L23.99,78.63L23.99,78.63z M47.82,70.97c0.47,3.84-0.11,6.82-1.47,7.62 c-0.3,0.18-0.69,0.26-1.16,0.26c-2.08,0-5.16-1.66-8.44-4.68c1.41-1.48,2.81-3.15,4.15-5.01c2.27-0.24,4.42-0.61,6.39-1.11 C47.52,69.06,47.7,70.04,47.82,70.97L47.82,70.97L47.82,70.97z M51.68,64.27c-0.86,0.37-1.81,0.7-2.78,1.02 c-0.57-1.97-1.33-4.02-2.26-6.12c0.92-2.09,1.67-4.13,2.23-6.09c0.99,0.31,1.94,0.65,2.82,1.02c3.56,1.52,5.86,3.51,5.86,5.08 C57.54,60.77,55.24,62.76,51.68,64.27L51.68,64.27L51.68,64.27z" />
      </g>
    </svg>
  );
};

export const NextJSSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 506.68 306.34"
      height={`${height}px`}
      width={`${width}px`}
      fill="#3c67e3">
      <title>nextjs</title>
      <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z" />
    </svg>
  );
};

export const ExpressSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1333.33 773.55"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      height={`${height}px`}
      width={`${width}px`}
      fill="#87a063">
      <path
        d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const DjangoSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="&ns_svg;"
      xmlnsXlink="&ns_xlink;"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 436.505 152.503"
      overflow="visible"
      enableBackground="new 0 0 436.505 152.503"
      xmlSpace="preserve"
      fill="#ffffff">
      <g>
        <g>
          <path
            fill="#092E20"
            d="M51.464,0h23.872v110.496c-12.246,2.325-21.237,3.255-31.002,3.255C15.191,113.75,0,100.576,0,75.308
			c0-24.337,16.122-40.147,41.078-40.147c3.875,0,6.82,0.309,10.386,1.239V0z M51.464,55.62c-2.79-0.929-5.115-1.239-8.06-1.239
			c-12.091,0-19.067,7.441-19.067,20.461c0,12.712,6.666,19.687,18.912,19.687c2.634,0,4.805-0.155,8.215-0.619V55.62z"
          />
          <path
            fill="#092E20"
            d="M113.312,36.865v55.338c0,19.067-1.395,28.212-5.58,36.118c-3.876,7.597-8.992,12.401-19.532,17.672
			l-22.167-10.541c10.541-4.96,15.656-9.299,18.911-15.967c3.411-6.82,4.497-14.726,4.497-35.497V36.865H113.312z M89.441,0.127
			h23.871v24.492H89.441V0.127z"
          />
          <path
            fill="#092E20"
            d="M127.731,42.29c10.542-4.959,20.617-7.129,31.623-7.129c12.246,0,20.306,3.254,23.872,9.61
			c2.014,3.565,2.634,8.215,2.634,18.137v48.517c-10.697,1.55-24.182,2.636-34.102,2.636c-19.996,0-28.988-6.978-28.988-22.478
			c0-16.742,11.936-24.492,41.234-26.973v-5.27c0-4.34-2.17-5.889-8.216-5.889c-8.835,0-18.756,2.48-28.058,7.286V42.29z
			 M165.089,80.268c-15.812,1.55-20.927,4.031-20.927,10.231c0,4.65,2.946,6.82,9.456,6.82c3.566,0,6.82-0.309,11.471-1.084V80.268z
			"
          />
          <path
            fill="#092E20"
            d="M197.487,40.585c14.105-3.72,25.731-5.424,37.512-5.424c12.246,0,21.082,2.789,26.354,8.215
			c4.96,5.114,6.509,10.694,6.509,22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557c-3.255,0-6.2,0.31-11.007,1.705
			v56.734h-23.871V40.585z"
          />
          <path
            fill="#092E20"
            d="M277.142,125.842c8.372,4.34,16.742,6.354,25.577,6.354c15.655,0,22.321-6.354,22.321-21.546
			c0-0.155,0-0.31,0-0.465c-4.65,2.324-9.301,3.255-15.5,3.255c-20.927,0-34.26-13.796-34.26-35.652
			c0-27.129,19.688-42.473,54.564-42.473c10.232,0,19.688,1.084,31.159,3.409l-8.174,17.219c-6.356-1.24-0.509-0.166-5.312-0.631
			v2.481l0.309,10.074l0.154,13.022c0.155,3.254,0.155,6.51,0.311,9.765c0,2.945,0,4.341,0,6.511c0,20.462-1.705,30.072-6.82,37.977
			c-7.441,11.627-20.307,17.362-38.598,17.362c-9.301,0-17.36-1.395-25.732-4.651V125.842z M324.576,54.536c-0.31,0-0.619,0-0.774,0
			h-1.706c-4.649-0.155-10.074,1.084-13.796,3.409c-5.734,3.256-8.681,9.147-8.681,17.517c0,11.937,5.892,18.757,16.432,18.757
			c3.255,0,5.891-0.621,8.99-1.55v-1.706v-6.509c0-2.79-0.154-5.892-0.154-9.146l-0.154-11.005l-0.156-7.906V54.536z"
          />
          <path
            fill="#092E20"
            d="M398.062,34.85c23.871,0,38.443,15.037,38.443,39.373c0,24.958-15.19,40.614-39.373,40.614
			c-23.873,0-38.599-15.037-38.599-39.218C358.534,50.505,373.726,34.85,398.062,34.85z M397.595,95.614
			c9.147,0,14.573-7.596,14.573-20.772c0-13.02-5.271-20.771-14.415-20.771c-9.457,0-14.884,7.597-14.884,20.771
			C382.87,88.019,388.296,95.614,397.595,95.614z"
          />
        </g>
      </g>
    </svg>
  );
};

export const HerokuSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="60 329.689 149.444 166.512"
      enableBackground="new 60 329.689 149.444 166.512"
      xmlSpace="preserve"
      fill="#430098">
      <g id="Page-1">
        <g id="main" transform="translate(-25.000000, -23.000000)">
          <g id="nav" transform="translate(25.000000, 23.000000)">
            <path
              id="logo"
              fill="#430098"
              d="M194.458,329.689H74.987C66.66,329.689,60,336.35,60,344.675 v136.539c0,8.326,6.66,14.986,14.986,14.986h119.472c8.326,0,14.986-6.66,14.986-14.986V344.675 C209.445,336.35,202.784,329.689,194.458,329.689z M201.119,481.214c0,3.748-2.914,6.662-6.661,6.662H74.987 c-3.747,0-6.661-2.914-6.661-6.662V344.675c0-3.747,2.914-6.661,6.661-6.661h119.472c3.747,0,6.661,2.914,6.661,6.661V481.214z M97.465,471.224l18.732-16.65l-18.732-16.652V471.224z M164.903,403.787c-3.33-3.331-9.574-7.493-19.981-7.493 c-11.239,0-22.896,2.914-31.221,5.828v-47.456H97.049v72.017l11.655-5.413c0,0,19.149-8.742,35.801-8.742 c8.325,0,10.406,4.579,10.406,8.742v49.954h16.651v-49.954C171.98,420.022,171.98,410.864,164.903,403.787z M142.84,381.724 h16.65c7.493-8.742,11.24-17.484,12.489-27.058h-16.651C153.663,364.24,149.5,372.982,142.84,381.724z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export const AwsSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      y="0"
      x="0"
      id="Layer_1"
      version="1.1"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="-45.10065 -44.95 390.8723 269.7"
      fill="#f90">
      <g transform="translate(-1.668 -1.1)" id="g1865">
        <path
          id="path1857"
          d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3L83.2 92c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5C41 1.9 46.2 1.3 51.7 1.3c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
          fill="#252f3e"
        />
        <g id="g1863">
          <path
            id="path1859"
            d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"
            className="st1"
          />
          <path
            id="path1861"
            d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
            className="st1"
          />
        </g>
      </g>
    </svg>
  );
};
export const GitSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 122.87"
      xmlSpace="preserve"
      height={`${height}px`}
      width={`${width}px`}
      fill="#f34f29">
      <g>
        <path d="M120.56,55.96L66.91,2.32c-3.09-3.09-8.1-3.09-11.19,0L44.58,13.46l14.13,14.13c3.29-1.11,7.05-0.37,9.67,2.25 c2.63,2.63,3.37,6.43,2.23,9.73l13.62,13.62c3.3-1.14,7.1-0.4,9.73,2.23c3.68,3.68,3.68,9.64,0,13.31c-3.68,3.68-9.64,3.68-13.32,0 c-2.77-2.77-3.45-6.83-2.05-10.24l-12.7-12.7l0,33.43c0.9,0.44,1.74,1.04,2.49,1.78c3.68,3.68,3.68,9.64,0,13.32 c-3.68,3.68-9.64,3.68-13.31,0c-3.68-3.68-3.68-9.64,0-13.32c0.91-0.91,1.96-1.59,3.08-2.05V45.21c-1.12-0.46-2.17-1.14-3.08-2.05 c-2.79-2.78-3.46-6.87-2.03-10.29L39.1,18.93L2.32,55.72c-3.09,3.09-3.09,8.1,0,11.19l53.65,53.65c3.09,3.09,8.1,3.09,11.19,0 l53.4-53.39C123.65,64.07,123.65,59.06,120.56,55.96L120.56,55.96L120.56,55.96z M120.56,55.96L120.56,55.96L120.56,55.96 L120.56,55.96z" />
      </g>
    </svg>
  );
};
export const HTMLSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 108.35 122.88"
      xmlSpace="preserve">
      <g>
        <polygon
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#E44D26" }}
          points="108.35,0 98.48,110.58 54.11,122.88 9.86,110.6 0,0 108.35,0"
        />
        <polygon
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F16529" }}
          points="54.17,113.48 90.03,103.54 98.46,9.04 54.17,9.04 54.17,113.48"
        />
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#EBEBEB" }}
          d="M34.99,36.17h19.19V22.61H20.16l0.32,3.64l3.33,37.38h30.35V50.06H36.23L34.99,36.17L34.99,36.17L34.99,36.17z M38.04,70.41H24.43l1.9,21.3l27.79,7.71l0.06-0.02V85.29l-0.06,0.02l-15.11-4.08L38.04,70.41L38.04,70.41L38.04,70.41z"
        />
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }}
          d="M54.13,63.63h16.7l-1.57,17.59L54.13,85.3v14.11l27.81-7.71l0.2-2.29l3.19-35.71l0.33-3.64H54.13V63.63 L54.13,63.63z M54.13,36.14v0.03h32.76l0.27-3.05l0.62-6.88l0.32-3.64H54.13V36.14L54.13,36.14L54.13,36.14z"
        />
      </g>
    </svg>
  );
};

export const JSSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 122.88 122.88"
      xmlSpace="preserve">
      <g>
        <polygon
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F7DF1E" }}
          points="0,0 122.88,0 122.88,122.88 0,122.88 0,0"
        />
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd" }}
          d="M32.31,102.69l9.4-5.69c1.81,3.22,3.46,5.94,7.42,5.94c3.79,0,6.19-1.48,6.19-7.26V56.41h11.55v39.43 c0,11.96-7.01,17.4-17.24,17.4C40.39,113.24,35.03,108.46,32.31,102.69L32.31,102.69L32.31,102.69z M73.14,101.45l9.4-5.44 c2.48,4.04,5.69,7.01,11.38,7.01c4.78,0,7.84-2.39,7.84-5.69c0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4 c0-8.66,6.6-15.26,16.91-15.26c7.34,0,12.62,2.56,16.41,9.24l-8.99,5.77c-1.98-3.55-4.12-4.95-7.42-4.95 c-3.38,0-5.53,2.14-5.53,4.95c0,3.46,2.14,4.87,7.09,7.01l2.89,1.24c9.82,4.21,15.34,8.5,15.34,18.15 c0,10.39-8.17,16.08-19.14,16.08C83.45,113.25,76.52,108.13,73.14,101.45L73.14,101.45L73.14,101.45z M73.14,101.45L73.14,101.45 L73.14,101.45L73.14,101.45z"
        />
      </g>
    </svg>
  );
};

export const PythonSVG: React.FC<SVG> = (props) => {
  const { height = 100, width = 100 } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 121.54 122.88"
      xmlSpace="preserve">
      <g>
        <g>
          <defs>
            <path
              id="SVGID_1_"
              d="M60.04,0c-5.01,0.02-9.8,0.45-14.01,1.2C33.63,3.39,31.38,7.98,31.38,16.44v11.17h29.32v3.72H31.38h-11 c-8.52,0-15.98,5.12-18.31,14.86c-2.69,11.17-2.81,18.13,0,29.79c2.08,8.68,7.06,14.86,15.58,14.86h10.08V77.46 c0-9.68,8.37-18.21,18.31-18.21h29.28c8.15,0,14.66-6.71,14.66-14.9V16.44c0-7.94-6.7-13.91-14.66-15.24 C70.28,0.36,65.06-0.02,60.04,0L60.04,0z M44.19,8.99c3.03,0,5.5,2.51,5.5,5.6c0,3.08-2.47,5.57-5.5,5.57 c-3.04,0-5.5-2.49-5.5-5.57C38.69,11.5,41.15,8.99,44.19,8.99L44.19,8.99z"
            />
          </defs>
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
          </clipPath>
          <g style={{ clipPath: "url(#SVGID_2_)" }}>
            <defs>
              <rect
                id="SVGID_3_"
                x="-0.75"
                y="-0.02"
                width="90.72"
                height="90.87"
              />
            </defs>
            <clipPath id="SVGID_4_">
              <use xlinkHref="#SVGID_3_" style={{ overflow: "visible" }} />
            </clipPath>
            <g style={{ clipPath: "url(#SVGID_4_)" }}>
              <image
                style={{ overflow: "visible" }}
                width="196"
                height="193"
                xlinkHref="data:image/jpeg;base64,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"
                transform="matrix(0.48 0 0 -0.48 -1.8717 91.9867)"
              />
            </g>
          </g>
        </g>
        <g>
          <defs>
            <path
              id="SVGID_5_"
              d="M93.63,31.33v13.02c0,10.09-8.56,18.59-18.31,18.59H46.04c-8.02,0-14.66,6.86-14.66,14.9v27.91 c0,7.94,6.91,12.62,14.66,14.9c9.28,2.73,18.18,3.22,29.28,0c7.38-2.14,14.66-6.44,14.66-14.9V94.58H60.69v-3.72h29.28h14.66 c8.52,0,11.69-5.94,14.66-14.86c3.06-9.18,2.93-18.01,0-29.79c-2.11-8.48-6.13-14.86-14.66-14.86H93.63L93.63,31.33z M77.16,102.02c3.04,0,5.5,2.49,5.5,5.57c0,3.09-2.46,5.6-5.5,5.6c-3.03,0-5.5-2.51-5.5-5.6 C71.66,104.51,74.13,102.02,77.16,102.02L77.16,102.02z"
            />
          </defs>
          <clipPath id="SVGID_6_">
            <use xlinkHref="#SVGID_5_" style={{ overflow: "visible" }} />
          </clipPath>
          <g style={{ clipPath: "url(#SVGID_6_)" }}>
            <defs>
              <rect
                id="SVGID_7_"
                x="31.38"
                y="31.33"
                width="90.97"
                height="92.53"
              />
            </defs>
            <clipPath id="SVGID_8_">
              <use xlinkHref="#SVGID_7_" style={{ overflow: "visible" }} />
            </clipPath>
            <g style={{ clipPath: "url(#SVGID_8_)" }}>
              <image
                style={{ overflow: "visible" }}
                width="196"
                height="197"
                xlinkHref="data:image/jpeg;base64,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 vH2/m7wfn4X/2Q=="
                transform="matrix(0.48 0 0 -0.48 30.2589 125.0428)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
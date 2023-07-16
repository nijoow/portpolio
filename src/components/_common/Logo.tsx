import * as React from 'react'
interface ILogoProps {
  width: number
  height: number
  className: string
}
const Logo = (props: ILogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 108"
    {...props}
    className={`fill-purple-medium stroke-purple-medium dark:fill-white dark:stroke-white ${props.className}`}
  >
    <path
      className="a"
      d="M46.45 48.4q-1.79 1.05-3.82 2.2c-1.37.77-2.76 1.48-4.2 2.15a37.56 37.56 0 0 1-4.24 1.67 12.48 12.48 0 0 1-3.88.69 6.18 6.18 0 0 1-3.88-1A5.57 5.57 0 0 1 24.76 52c-.35-.8-.65-1.52-.89-2.15a1.49 1.49 0 0 0-1.52-.94 4.93 4.93 0 0 0-2.68 1c-1 .7-2.09 1.48-3.25 2.36a39.73 39.73 0 0 1-3.56 2.41 7.75 7.75 0 0 1-3.51 1.2 2.52 2.52 0 0 1-2.47-1.1 4.73 4.73 0 0 1-.42-2.67 16.82 16.82 0 0 1 .74-3.35q.57-1.78 1-3.15a1.18 1.18 0 0 1 1.16-.94c.56 0 .73.31.52.94s-.5 1.65-.88 2.73a29.14 29.14 0 0 0-.84 3.2 7 7 0 0 0-.1 2.67 1.31 1.31 0 0 0 1.47 1.11 6.25 6.25 0 0 0 3.3-1.21 40.9 40.9 0 0 0 3.67-2.73q1.83-1.52 3.51-2.72a5.27 5.27 0 0 1 2.83-1.21 1.92 1.92 0 0 1 1.89 1.1 25.88 25.88 0 0 1 1 2.47 7.57 7.57 0 0 0 1.42 2.46 4.25 4.25 0 0 0 3.35 1.1 11.68 11.68 0 0 0 3.72-.68 38.14 38.14 0 0 0 4.19-1.68A38.85 38.85 0 0 0 42.57 50c1.33-.8 2.55-1.52 3.67-2.15Z"
    />
    <path
      className="a"
      d="M66.16 48.4q-3.46 2-6.4 3.51c-1.95 1-3.74 1.87-5.34 2.57-3.43 1.4-6 2.09-7.76 2.09-1.47 0-2.23-.63-2.3-1.88a11.61 11.61 0 0 1 .78-4.41 35.78 35.78 0 0 1 2.2-4.92L49.18 42c.21-.42.59-.52 1.15-.31s.7.56.42 1.05l-1.89 3a36.06 36.06 0 0 0-2.41 4.45 14.16 14.16 0 0 0-1.26 4c-.14 1.16.42 1.73 1.68 1.73 1.75 0 4.23-.69 7.44-2.09a55.64 55.64 0 0 0 5.35-2.47q2.93-1.52 6.29-3.51ZM52.32 37.71c-.21-.21 0-.88.63-2 .35-.48.66-.89.94-1.2s.46-.47.53-.47c.28.14.07.8-.63 2a6.91 6.91 0 0 1-.84 1.2q-.42.47-.63.47Z"
    />
    <path
      className="a"
      d="M86.6 48.4q-6.93 4-13.16 8t-12.73 8.87c-.84 1.61-1.87 3.37-3.1 5.3s-2.53 3.87-3.93 5.87-2.81 3.91-4.24 5.76a63.43 63.43 0 0 1-4.14 4.88 42.36 42.36 0 0 1-6.87 6c-2.13 1.43-3.67 2.1-4.61 2s-1-1.06-.26-2.88 2.9-4.68 6.39-8.59a112.43 112.43 0 0 1 9.17-9.54 128.89 128.89 0 0 1 10.22-8.49 57.38 57.38 0 0 0 2.47-5.51Q63 57 64.06 53.74T66 47.35c.59-2.1 1.1-4 1.52-5.66A1.12 1.12 0 0 1 68 41a1.21 1.21 0 0 1 .73-.26.68.68 0 0 1 .58.26 1 1 0 0 1 .11.78q-.84 2.84-1.79 5.93c-.63 2.06-1.29 4.08-2 6.08s-1.43 3.89-2.2 5.71-1.5 3.39-2.2 4.71q3.36-2.51 6.45-4.61t6.13-4.08c2-1.33 4.07-2.61 6.13-3.83l6.45-3.83ZM44.88 86.76c1.26-1.4 2.51-2.93 3.77-4.61s2.48-3.39 3.67-5.14 2.32-3.49 3.41-5.24 2.08-3.42 3-5a118.33 118.33 0 0 0-9.59 8.07q-4.45 4.2-8.75 9-5 5.65-6.13 8.17c-.73 1.68-.68 2.52.16 2.52s2.25-.7 4.24-2.1a39 39 0 0 0 6.22-5.67Zm24.53-48.95q-.54-.21 0-1.89a6 6 0 0 1 .52-1.41c.21-.38.38-.58.52-.58s.2.18.16.53a10.72 10.72 0 0 1-.26 1.36 8.58 8.58 0 0 1-.47 1.41c-.18.39-.33.58-.47.58Z"
    />
    <path
      className="a"
      d="M139.21 48.29a21.88 21.88 0 0 1-5.34 1.63q-3.47.67-7.23 1.1t-7.24.68c-2.3.17-4.05.26-5.24.26a8.29 8.29 0 0 1-1 3 12.6 12.6 0 0 1-2 2.67 9.7 9.7 0 0 1-2.73 1.94 7.24 7.24 0 0 1-3.19.74 4.63 4.63 0 0 1-3.46-1.1 3.88 3.88 0 0 1-1-2.78 10.33 10.33 0 0 1 .79-3.72 17.14 17.14 0 0 1 2.14-3.93A17 17 0 0 1 100 51a13.27 13.27 0 0 1-3.83 1 8.29 8.29 0 0 1-1 3 12.6 12.6 0 0 1-2 2.67 9.8 9.8 0 0 1-2.72 1.94 7.29 7.29 0 0 1-3.2.74q-3.36 0-4.14-2.1a7 7 0 0 1 .16-4.82 19.27 19.27 0 0 1 3.09-5.5 13.79 13.79 0 0 1 4.66-4 1.69 1.69 0 0 1 1.78 0c.42.31.11.78-.94 1.41a20.66 20.66 0 0 0-7.28 8.55 6.41 6.41 0 0 0-.53 4.14c.32 1.18 1.42 1.78 3.3 1.78a7.3 7.3 0 0 0 5.45-2.41 10.26 10.26 0 0 0 2.7-5.4h-1.31a8.07 8.07 0 0 1-1.62 0 3.83 3.83 0 0 1-2.57-.93 1.6 1.6 0 0 1-.52-1.57 2.69 2.69 0 0 1 1.15-1.5 4.48 4.48 0 0 1 2.57-.68 2.43 2.43 0 0 1 2.41 1.26 5.13 5.13 0 0 1 .52 2.72 14.09 14.09 0 0 0 3.88-1.1 22.57 22.57 0 0 0 4.72-2.88 12.45 12.45 0 0 1 4.19-3.46 1.69 1.69 0 0 1 1.78 0c.42.31.11.78-.94 1.41a18.36 18.36 0 0 0-4.25 3.73 18.73 18.73 0 0 0-3 4.77 6.47 6.47 0 0 0-.52 4.14c.31 1.18 1.42 1.78 3.3 1.78a7.32 7.32 0 0 0 5.45-2.41 10.26 10.26 0 0 0 2.79-5.28h-1.31a8.07 8.07 0 0 1-1.62 0 3.83 3.83 0 0 1-2.62-.89 1.63 1.63 0 0 1-.53-1.57 2.72 2.72 0 0 1 1.21-1.54 4.48 4.48 0 0 1 2.57-.68 2.44 2.44 0 0 1 2.41 1.26 5.13 5.13 0 0 1 .52 2.72q1.78 0 5.19-.21t7.18-.63c2.52-.27 4.93-.63 7.23-1a20.56 20.56 0 0 0 5.35-1.58Zm-43.6 3a5.05 5.05 0 0 0-.53-2.3 2 2 0 0 0-2-1.05 4.14 4.14 0 0 0-2.09.47 1.87 1.87 0 0 0-1 1.1 1.1 1.1 0 0 0 .47 1.15 3.94 3.94 0 0 0 2.2.63 8.15 8.15 0 0 0 1.63.05c.53.01.97-.01 1.32-.01Zm18 0a5.05 5.05 0 0 0-.53-2.3 2 2 0 0 0-2-1.05 4.12 4.12 0 0 0-2.09.47 1.83 1.83 0 0 0-1 1.1 1.1 1.1 0 0 0 .47 1.15 3.91 3.91 0 0 0 2.2.63 8.15 8.15 0 0 0 1.63.05c.56.01 1-.01 1.35-.01Z"
    />
    <path
      className="a"
      d="M185 31.84a14.09 14.09 0 0 1 .1 7.44 26.59 26.59 0 0 1-2.1 5.82 37.38 37.38 0 0 1-3.57 5.81 43.35 43.35 0 0 1-4.66 5.14 27.28 27.28 0 0 1-5.4 4 24.55 24.55 0 0 1-4 1.89 14.26 14.26 0 0 1-4.14.84 11.36 11.36 0 0 1-5.39-.84 4.4 4.4 0 0 1-2.36-2.67 7.6 7.6 0 0 1 .05-4 29.15 29.15 0 0 1 1.83-5q-3 3.36-6.23 6.71T142.88 63a47.5 47.5 0 0 1-5.71 4.45 8.91 8.91 0 0 1-4.56 1.73c-1.47 0-2.2-.68-2.2-2a15.26 15.26 0 0 1 1.2-5.19 57 57 0 0 1 3.3-6.92q2.1-3.77 4.25-7.13t3.93-5.81A33.77 33.77 0 0 1 145.5 39a1.23 1.23 0 0 1 1.1-.41c.39.07.51.28.37.62s-.86 1.31-1.94 2.89-2.34 3.44-3.77 5.6-2.89 4.48-4.35 6.92-2.69 4.7-3.67 6.76a21.76 21.76 0 0 0-1.84 5.14c-.24 1.36.2 2 1.31 2a9.06 9.06 0 0 0 4.83-1.94 52.37 52.37 0 0 0 6-4.92q3.19-3 6.55-6.61t6.4-7.07h.1c.56-.56 1-.72 1.31-.47s.3.75 0 1.52c-.91 1.81-1.68 3.53-2.31 5.13a10.22 10.22 0 0 0-.83 4.25 3.46 3.46 0 0 0 1.57 2.83q1.45 1 5 .89a16 16 0 0 0 4-.74 17.11 17.11 0 0 0 3.88-1.78 27.09 27.09 0 0 0 5.19-3.93 45 45 0 0 0 4.56-5.08 30.56 30.56 0 0 0 5.55-11.32 15 15 0 0 0 .53-3.83 8.3 8.3 0 0 0-.63-3.3c-.14-.28-.11-.49.1-.63s.37-.03.49.32Z"
    />
  </svg>
)

export default Logo

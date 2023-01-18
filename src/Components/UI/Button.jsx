import { h } from 'preact'

const Button = ({
  variant,
  href,
  children,
  fontWeight,
  colorRGB = '#ffffff',
  textSize = 'sm',
  onClick,
}) => {
  const color =
    variant === 'white'
      ? 'text-black bg-white'
      : variant === 'glass'
      ? 'text-white bg-grey-light'
      : 'text-white bg-darkish-black'

  const text = textSize === 'lg' ? 'text-md lg:text-md' : 'text-sm lg:text-md'
  const map = { glass: 'rgba(245,245,245,.1)', solid: `${colorRGB}b2` }
  const customColor = map[variant]

  return (
    <a
      href={href}
      onClick={onClick}
      className={` py-2 lg:py-1 px-4 lg:px-4 mx-4 ${text} font-semibold text-center !text-sm font-plex rounded-lg ${color} cursor-pointer items-center flex justify-evenly`}
      style={{
        border: '1px solid rgba(255,255,255,0.2)',
        fontWeight,
        minWidth: '3em',
        backgroundColor: `${customColor}`,
      }}
    >
      {children}
    </a>
  )
}

export default Button

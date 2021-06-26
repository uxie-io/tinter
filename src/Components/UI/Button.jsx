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

  const text = textSize === 'lg' ? 'text-lg lg:text-xl' : 'text-md lg:text-lg'
  const map = { glass: 'rgba(245,245,245,.1)', solid: `${colorRGB}b2` }
  const customColor = map[variant]

  return (
    <a
      href={href}
      onClick={onClick}
      className={` py-2 lg:py-3 px-2 lg:px-3 mx-8 ${text} font-semibold text-center font-plex rounded-xl ${color} cursor-pointer flex justify-evenly`}
      style={{
        border: '1px solid rgba(255,255,255,0.2)',
        fontWeight,
        minWidth: '6em',
        backgroundColor: `${customColor}`,
      }}
    >
      {children}
    </a>
  )
}

export default Button

import { Fragment, h } from 'preact'
import TopImg from './../../assets/top.svg'
import Button from './Button'
import { useWindowSize } from './../../hooks/useWindowSize'
// import GithubIcon from './../../assets/github.svg'
// import BoxIcon from './../../assets/box.svg'

function Navbar() {
  const { width } = useWindowSize()
  const mobileSize = width < 715

  return (
    <div className="flex w-full py-8" style={{ zIndex: '1' }}>
      <div className="relative flex justify-start flex-1 mx-4 my-2 md:mx-16">
        <div className="w-8 h-8 rounded-full md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500" />
        <div className="absolute top-0 left-0">
          <img
            src={TopImg}
            alt="top abstract illustration"
            className="h-20 md:h-auto"
          />
        </div>
      </div>
      <div className="flex items-end justify-center flex-1 mx-4 my-2 text-3xl font-extrabold text-white lg:mx-16 lg:text-5xl focus:outline-none ">
        Tinter
        <div className="w-4 h-4 ml-4 align-bottom bg-white rounded-full" />
      </div>
      <div className="flex justify-end items-center flex-1 mx-4 my-2 lg:mx-16">
        <a
          class="buy-coffee"
          href="https://www.buymeacoffee.com/anup"
          target="_blank"
          rel="noreferrer"
          style={{ minWidth: '8em' }}
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
          />
        </a>

        {!mobileSize ? (
          <Fragment>
            <Button
              href="https://github.com/uxie-io/tinter"
              target="blank"
              fontWeight="600"
              textSize="lg"
            >
              Github
            </Button>
            <Button href="#" fontWeight="600" variant="white" textSize="lg">
              Uxie
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            {/* <a
              href="#"
              className="mx-4 text-white"
              style={{ minWidth: '20px' }}
            >
              <img src={GithubIcon} alt="" />
            </a>
            <a
              href="#"
              className="mx-4 text-white"
              style={{ minWidth: '20px' }}
            >
              <img src={BoxIcon} alt="" />
            </a> */}
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Navbar

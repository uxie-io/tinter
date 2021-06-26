import { h } from 'preact'
import MountainImage from './../assets/mountain.webp'

const AbstractArt = () => {
  return (
    <div className="block mx-auto my-8">
      <img src={MountainImage} className="max-w-full" alt="" />
    </div>
  )
}

export default AbstractArt

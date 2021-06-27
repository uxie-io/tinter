import { h } from 'preact'
import { useState } from 'preact/hooks'
import { generateColors } from '../../utils/generateColors'
import { AdjustedOutput } from './AdjustedOutput'
import { OUTPUT_IMAGES } from '../../constants'

const OutputGrid = () => {
  const [colors] = useState(() => generateColors(OUTPUT_IMAGES).reverse())

  return (
    <div className="grid grid-cols-2 mx-0 mt-8 mb-24 grid-flow-rows lg:mb-72">
      {colors.map((c, i) => (
        <AdjustedOutput key={`key ${i}`} color={c} />
      ))}
    </div>
  )
}

export default OutputGrid

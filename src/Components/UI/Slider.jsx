import { h } from 'preact'

const Slider = ({ adjustedHue, onCustomHueAdjust }) => {
  return (
    <input
      class="rounded-lg appearance-none h-2 mr-4"
      style={{
        background: '#666',
        width: '100%',
      }}
      type="range"
      min="1"
      max="100"
      step="1"
      value={adjustedHue}
      onChange={onCustomHueAdjust}
    />
  )
}

export default Slider

import { h } from 'preact'

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <label class="flex items-center space-x-3">
      <span class="text-white font-plex text-xl font-bold mr-6">{text} </span>
      <input
        type="checkbox"
        class="rounded text-pink-500 focus:ring-pink-500 w-6 h-6"
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

export default Checkbox

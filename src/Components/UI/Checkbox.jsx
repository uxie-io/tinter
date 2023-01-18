import { h } from 'preact'

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <label class="flex items-center ">
      <span class="text-white font-plex text-md font-bold mr-2">{text} </span>
      <input
        type="checkbox"
        class="rounded text-pink-500 focus:ring-pink-500 w-6 h-6 mr-4"
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

export default Checkbox

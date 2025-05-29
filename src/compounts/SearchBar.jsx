import React from 'react'

function SearchBar({SearchBar, onChange}) {
  return (
    <div>
      <input
      type='text'
      value={SearchBar}
      placeholder='search'
      className=' border focus:border-x-fuchsia-800 p-1'
      onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar

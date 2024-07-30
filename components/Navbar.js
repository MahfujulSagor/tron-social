import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* left */}
      <div>
        <Link href='/'>Social</Link>
      </div>
      {/* center */}
      <div></div>
      {/* right */}
      <div></div>
    </div>
  )
}

export default Navbar
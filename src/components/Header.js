import React from 'react'

function Header({money, total}) {
  return (
    <div>
        Harcamak için {money-total}$ paraniz var.
    </div>
  )
}

export default Header;
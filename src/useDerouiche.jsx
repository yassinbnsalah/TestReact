import React, { useState } from 'react'

function useDerouiche() {
    const [name , setName] = useState("yessine")
  return {name}
}

export default useDerouiche

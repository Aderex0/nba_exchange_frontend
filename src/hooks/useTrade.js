import { useState } from 'react'

const useTrade = () => {
  const [qty, setQty] = useState(1)

  const trackQty = qty => setQty(qty)

  return { qty, trackQty }
}

export default useTrade

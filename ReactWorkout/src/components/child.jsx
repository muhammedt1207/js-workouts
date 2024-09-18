import React from 'react'
import withLoading from './Hoc'
const child = ({data}) => {
  return (
    <div>
      {data}
      
    </div>
  )
}

export default withLoading(child)

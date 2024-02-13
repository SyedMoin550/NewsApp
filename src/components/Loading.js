import React from 'react'
import LoadingGif from './loading.gif'

function Loading () {
    return (
      <div className='mt-3 text-center'>
        <img src={LoadingGif} alt="Not Found" width="100"/>
      </div>
    )
}

export default Loading

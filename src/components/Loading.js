import React from 'react'
import loading from'./loading.gif'

 const Loading=()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{width:"5%"}} />
      </div>
    )
}
export default Loading;
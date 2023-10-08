import React from 'react'

export const Comment = ({comment}) => {
  return (
    <div>
        <div className="container p-2">
            <div className="card">
                <p className='p-2'>{comment}</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button is Clicked for function component')
    }
  return (
    <div>
         <button onClick = {clickHandler}>Click Here</button>
    </div>
  )
}

export default FunctionClick
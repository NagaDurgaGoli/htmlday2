import React from 'react'

//function Greet(){
//    return <h1>Hello NagaDurga</h1>
//}
const Greet = props => {
  const  {name,branchName} = props
    
return (
    <div>
       <h1>Hello {name} from {branchName}</h1>
       
       </div>
)
}

export default Greet
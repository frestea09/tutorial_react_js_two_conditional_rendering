import React from 'react'

function Header(props){
    const listNama = ['ilman','teguh','prasetya']
    const fixListNama = listNama.map(name=><h2>{name}</h2>)
    return(
        <div>
            {fixListNama}
            <h3>Hello World {props.namaMahasiswa}</h3>
            <button onClick={function (){
                props.metodeSayHello('ilman')
            }}>Hello</button>
        </div>
    )
}
export default Header
import React from 'react'

class Content extends React.Component{
    render(){
        return(
            <div className='Content'>
                <table>
                    <tr>
                        <td>
                            {this.props.kataSuper}
                        </td>
                        <td>
                            Name: 
                        </td>
                        <td>
                            {this.props.namaObjekMahasiswa}
                        </td>
                        <td>
                            <button onClick={this.props.metodeRubahNama}>Ubah nama</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Content
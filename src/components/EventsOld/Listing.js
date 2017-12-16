import React from 'react'

class Listing extends React.Component {
  render(){
    return(
      <div className={this.props.className}>
        <div className='title'>All Events</div>
        <table className='merchandise-table'>
          <tbody>
            <tr className='table-header'>
              <th>#</th><th>Event Name</th><th>Organizer</th><th>Team/Single</th><th>Price</th>
            </tr>
            <tr>
              <td>1</td><td>Treasure Hunt</td><td>Innovators Quest</td><td>Team of 2</td><td>Rs. 80 per person</td>
            </tr>
            <tr>
              <td>2</td><td>Treasure Hunt</td><td>Innovators Quest</td><td>Team of 2</td><td>Rs. 80 per person</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Listing

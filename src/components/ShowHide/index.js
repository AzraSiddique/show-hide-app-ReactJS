import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {hideFirstname: true, hideLastName: true}

  clickBtnFirst = () => {
    this.setState(prevState => ({
      hideFirstname: !prevState.hideFirstname,
    }))
  }

  clickBtnLast = () => {
    this.setState(prevState => ({
      hideLastName: !prevState.hideLastName,
    }))
  }

  render() {
    const {hideFirstname, hideLastName} = this.state

    return (
      <div className="container">
        <div className="name-container">
          <h1 className="heading">Show/Hide</h1>

          <div className="full-container">
            <div className="show-hide-container">
              <button
                className="btn"
                type="button"
                onClick={this.clickBtnFirst}
              >
                Show/Hide Firstname
              </button>
              {hideFirstname ? null : <p className="name">Joe</p>}
            </div>

            <div className="show-hide-container">
              <button className="btn" type="button" onClick={this.clickBtnLast}>
                Show/Hide Lastname
              </button>
              {hideLastName ? null : <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

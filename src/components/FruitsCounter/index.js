import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state
    return (
      <div className="outer-bg-container">
        <div className="inside-bg-container">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruites-container">
            <div>
              <img
                alt="mango"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <br />
              <button
                type="button"
                className="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>

            <div>
              <img
                alt="banana"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <br />
              <button
                type="button"
                className="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

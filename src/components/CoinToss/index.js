// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    resultantImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }

    this.setState({
      resultantImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {resultantImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="description"> Heads (or) Tails </p>
          <img src={resultantImage} alt="toss result" className="image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count"> Total: {totalCount} </p>
            <p className="count"> Heads: {headsCount} </p>
            <p className="count"> Tails: {tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

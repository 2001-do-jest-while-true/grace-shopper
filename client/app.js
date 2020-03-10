import React from 'react'
import {connect} from 'react-redux'
import {
  initializeCartThunk,
  fetchCart,
  setCart,
  addToCartThunk
} from './store/cart'
import {fetchAllProducts, me} from './store'
import {Header} from './components'
import Routes from './routes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      login: false
    }

    this.loginClickHandler = this.loginClickHandler.bind(this)
    this.handleMerge = this.handleMerge.bind(this)
    this.handleChecks = this.handleChecks.bind(this)
  }

  async componentDidMount() {
    await this.props.loadInitialData()
    await this.props.fetchAllProducts()
    await this.props.initializeCartThunk(this.props.loggedIn.id)
    if (this.props.orderId) await this.props.fetchCart(this.props.orderId)
    else this.props.setCart(JSON.parse(window.localStorage.getItem('cart')))

    window.addEventListener('beforeunload', async event => {
      window.localStorage.setItem('cart', JSON.stringify(this.props.cart))
    })
  }

  loginClickHandler() {
    window.localStorage.setItem('cart', JSON.stringify(this.props.cart))

    const loginStatus = this.state.login
    this.setState({
      login: !loginStatus
    })
  }

  // // Takes an array of 2 carts objects and merges them together (combining similar values)
  // mergeCarts(carts) {
  //   const newCart = carts.reduce((newObj, obj) => {
  //     const entries = Object.entries(obj)
  //     entries.forEach(([key, val]) => {
  //       newObj[key] = (newObj[key] || 0) + val
  //     })
  //     return newObj
  //   }, {})

  //   return newCart
  // }

  async handleMerge() {}

  async handleChecks() {
    const merged = JSON.parse(window.localStorage.getItem('merged'))

    if (+this.props.orderId && this.props.cartLoaded && !merged) {
      await this.handleMerge()
    }
  }

  render() {
    this.handleChecks()

    return (
      <div>
        <Header
          login={this.state.login}
          loginClickHandler={this.loginClickHandler}
        />
        <Routes />
      </div>
    )
  }
}

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    cart: state.cart.cart,
    loggedIn: state.user,
    orderId: state.cart.orderId,
    isAdmin: state.user.isAdmin,
    cartLoaded: state.cart.loaded,
    merged: state.cart.merged
  }
}

const mapDispatch = dispatch => ({
  initializeCartThunk: userId => dispatch(initializeCartThunk(userId)),
  fetchCart: orderId => dispatch(fetchCart(orderId)),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  setCart: cartObj => dispatch(setCart(cartObj)),
  addToCartThunk: (orderId, guestCart) =>
    dispatch(addToCartThunk(orderId, guestCart)),
  loadInitialData: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(App)

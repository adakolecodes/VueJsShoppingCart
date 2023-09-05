// Import the createStore function from Vuex
import { createStore } from 'vuex'

// Utility function to update the localStorage with the cart data
function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Create and export a new Vuex store instance
export default createStore({
  // Define the initial state of the store
  state: {
    // Initialize the cart as an empty array
    cart: []
  },

  // Define computed properties for accessing state data
  getters: {
    // Getter to compute the quantity of a specific product in the cart
    productQuantity: state => product => {
      // Find an item in the cart with a matching id
      const item = state.cart.find(i => i.id === product.id)

      // If found, return its quantity; otherwise, return null
      if (item) return item.quantity
      else return null
    },
    
    // Getter to return the entire cart
    cartItems: state => {
      return state.cart
    },

    // Getter to calculate the total cost of items in the cart
    cartTotal: state => {
      // Use reduce to compute the total cost
      return state.cart.reduce((total, item) => total + item.quantity * item.price, 0)
    }
  },

  // Define mutations to directly modify the state
  mutations: {
    // Mutation to add a product to the cart
    addToCart(state, product){
      // Find an item in the cart with a matching id
      let item = state.cart.find(i => i.id === product.id)

      // If found, increment its quantity; otherwise, add a new item with quantity 1
      if (item){
        item.quantity++
      }else{
        state.cart.push({...product, quantity: 1})
      }

      // Update localStorage with the updated cart data
      updateLocalStorage(state.cart)
    },

    // Mutation to remove a product from the cart
    removeFromCart(state, product){
      // Find an item in the cart with a matching id
      let item = state.cart.find(i => i.id === product.id)

      // If found, decrement its quantity; if quantity reaches 1, remove the item
      if (item){
        if(item.quantity > 1){
          item.quantity--
        }else{
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      // Update localStorage with the updated cart data
      updateLocalStorage(state.cart)
    },

    // Mutation to update the cart state from data stored in localStorage
    updateCartFromLocalStorage(state){
      // Retrieve the cart data from localStorage
      const cart = localStorage.getItem('cart')

      // If cart data exists in localStorage, parse and set it as the new cart state
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
  },

  // Define actions (empty in this case)
  actions: {
  },

  // Define modules (none in this case)
  modules: {
  }
})

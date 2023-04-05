import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS } from '../actions'

const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        let maxPrice = action.payload.map((p) => p.price)
        maxPrice = Math.max(...maxPrice); 
        return {
            ...state, 
            all_products: [...action.payload],
            filtered_products: [...action.payload],
            filters: {...state.filters, max_price: maxPrice, price: maxPrice}
        }
    }

    if (action.type === SET_GRIDVIEW) {
        return {...state, grid_view: true}
    }

    if (action.type === SET_LISTVIEW) {
        return {...state, grid_view: false}
    }

    if (action.type === UPDATE_SORT) {
        return {...state, sort: action.payload}
    }

    if (action.type === SORT_PRODUCTS) {
        const {sort, filtered_products} = state;
        let tempProducts = [...filtered_products];
        if (sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price)
            // console.log('price-lowest');
        }
        if (sort === 'price-highest') {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price)
            // console.log('price-highest');
        }
        if (sort === 'name-a') {
            tempProducts = tempProducts.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
            // console.log('name-a');
        }
        if (sort === 'name-z') {
            tempProducts = tempProducts.sort((a, b) => {
                return b.name.localeCompare(a.name); 
            })
            // console.log('name-z');
        }
        return {...state, filtered_products: tempProducts}
    }

    if (action.type === UPDATE_FILTERS) {
        const {name, value} = action.payload
        return {...state, filters: {...state.filters, [name]:value}}
    } 

    if (action.type === FILTER_PRODUCTS) {
        // console.log('filtering products');
        const { all_products } = state
        const {text, category, company, color, price, shipping} = state.filters 
        let tempProducts = [...all_products]
        //filtering - search by name 
        if (text) {
            tempProducts = tempProducts.filter((product) => {
                return product.name.toLowerCase().startsWith(text)
            })
        }
        return {...state, filtered_products: tempProducts}
    }
//   return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
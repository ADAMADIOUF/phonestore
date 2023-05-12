import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstant'

export const productListReducer = (
  state = { products: [], featured_products: [],deals_products:[] },
  action
) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return { loading: true, products: [] }
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    )
    const deals_products = action.payload.filter(
      (product) => product.deals === true
    )
    const deals_products_Two = action.payload.filter(
      (product) => product.dealsTwo === true
    )
    return { loading: false, products: action.payload, featured_products,deals_products,deals_products_Two }
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload }
  }
  return state
}


export const productDetailsReducer = (
  state = { loading: true, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

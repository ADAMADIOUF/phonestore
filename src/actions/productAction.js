import axios from 'axios'

import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstant'

import { products_url as url } from '../utils/constants'
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(url)
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}




export const listProductDetails = (id, selectOnly = false) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { products } = getState().productList;
    const selectedProduct = products.find((product) => product.id === id);

    if (selectedProduct && selectOnly) {
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: selectedProduct });

    
      sessionStorage.setItem('productDetails', JSON.stringify(selectedProduct));
    } else {
      const { data } = await axios.get(`${url}/${id}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    
      sessionStorage.setItem('productDetails', JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


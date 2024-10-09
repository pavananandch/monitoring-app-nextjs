// src/store/reducers/shopReducer.js
import { response } from '@/public/mock';
import { ASSIGN_USER, CHANGE_SHOP_STATUS } from './actions';

const initialState = {
  brands: response.brands,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_USER: {
      const { brandId, layoutId, shopId, userName } = action.payload;
      return {
        ...state,
        brands: state.brands.map((brand) => {
          if (brand.id === brandId) {
            return {
              ...brand,
              screenLayouts: brand.screenLayouts.map((layout) => {
                if (layout.id === layoutId) {
                  return {
                    ...layout,
                    shops: layout.shops.map((shop) => {
                      if (shop.id === shopId) {
                        return {
                          ...shop,
                          assigned: userName,
                        };
                      }
                      return shop;
                    }),
                  };
                }
                return layout;
              }),
            };
          }
          return brand;
        }),
      };
    }
    case CHANGE_SHOP_STATUS: {
      const { brandId, layoutId, shopId, status } = action.payload;
      return {
        ...state,
        brands: state.brands.map((brand) => {
          if (brand.id === brandId) {
            return {
              ...brand,
              screenLayouts: brand.screenLayouts.map((layout) => {
                if (layout.id === layoutId) {
                  return {
                    ...layout,
                    shops: layout.shops.map((shop) => {
                      if (shop.id === shopId) {
                        return {
                          ...shop,
                          status, // Update status to green or red
                        };
                      }
                      return shop;
                    }),
                  };
                }
                return layout;
              }),
            };
          }
          return brand;
        }),
      };
    }
    default:
      return state;
  }
};

export default shopReducer;

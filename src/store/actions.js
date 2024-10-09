export const ASSIGN_USER = "ASSIGN_USER";
export const CHANGE_SHOP_STATUS = "CHANGE_SHOP_STATUS";

export const assignUser = (brandId, layoutId, shopId, userName) => ({
  type: ASSIGN_USER,
  payload: { brandId, layoutId, shopId, userName },
});

export const changeShopStatus = (brandId, layoutId, shopId, status) => ({
  type: CHANGE_SHOP_STATUS,
  payload: { brandId, layoutId, shopId, status },
});

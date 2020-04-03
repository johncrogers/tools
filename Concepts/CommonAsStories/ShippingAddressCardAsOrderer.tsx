import React from "react";

import { Dispatch } from "redux";

import { FetchConnect } from "helpers/FetchConnect";
import { ShippingAddressCard } from "../FetchShippingAddressCard";

const ResidentShippingAddressCard: React.FC<IResidentShippingAddressCardPropTypes> = (
  props: IResidentShippingAddressCardPropTypes
) => {
  const {
    currentUser: { firstName, lastName, residentialUser }
  } = props;
  let address;
  if (residentialUser) {
    address = {
      addressLine: residentialUser.warehouseAddressLine1,
      city: residentialUser.warehouseAddressCity,
      firstName,
      lastName,
      note: residentialUser.userCode,
      postalCode: residentialUser.warehouseAddressPostalCode,
      state: residentialUser.warehouseAddressState
    };
  }

  return (
    <ShippingAddressCard
      {...{
        address,
        message: "Ship your packages using your new Fetch address above.",
        title: "Your Shipping Address"
      }}
    />
  );
};

export default FetchConnect({
  ConnectedComponent: ResidentShippingAddressCard,
  state: { stores: ["currentUser"] }
});

export interface IResidentShippingAddressCardPropTypes {
  currentUser: IUserStoreType;
  dispatch: Dispatch;
}

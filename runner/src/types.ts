export interface IDriverBatch {
  driverBatchId: number;
  buildingId: number;
  warehouseId: number;
  buildingName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  unitMapUrl?: any;
  deliveryStartDate: string;
  deliveryEndDate: string;
  stops: Stop[];
}

export interface Stop {
  packages: Package[];
  packageDeliveryPreference: number;
  status: number;
  firstName: string;
  lastName: string;
  unitNumber: string;
  deliveryNotes: Notes;
  lastModifiedDate: string;
}

export interface Package {
  driverBatchFetchPackageId: number;
  fetchPackageId: number;
  sender: string;
  carrier: number;
  carrierTracking: string;
  status: number;
  packageType?: any;
  shelfLocation?: string | string | string;
  createdDate: string;
  createdBy: string;
  lastModifiedDate: string;
  lastModifiedBy: string;
  userId: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  systemId: string;
  userCode: string;
  packageDeliveryPreference: number;
  unitNumber: string;
  buildingId: number;
  buildingName: string;
  buildingShortCode: string;
  warehouseId: number;
  warehouseName: string;
  warehouseDeliveryWindowId: number;
  residentDeliveryNote?: any;
  warehouseLocation?: any;
  requestedDeliveryStartDate: string;
  requestedDeliveryEndDate: string;
  notes: Notes;
}

export interface Notes {
  residentDelivery?: any;
  fetchDelivery?: any;
  fetchUser?: any;
  residentUser?: any;
}

import { icons } from "constants/icons";
import { BatchFormContainer } from "views/components/forms/BatchForm";
import { BuildingFormContainer } from "views/components/forms/BuildingForm";
import { PackageFormContainer } from "views/components/forms/PackageForm";
import { UserFormContainer } from "views/components/forms/UserForm";
import { WarehouseFormContainer } from "views/components/forms/WarehouseForm";
import { WarehouseLocationBatchFormContainer } from "views/components/forms/WarehouseLocationBatchCreateForm";
import { WarehouseLocationFormContainer } from "views/components/forms/WarehouseLocationForm";
import FetchSandbox from "views/common/layouts/Sandbox";
import Dashboard from "views/pages/Dashboard";
import LockScreen from "views/pages/LockScreen";
import { LoginContainer } from "views/pages/Login";
import { MyWarehouseSettingsContainer } from "views/pages/MyWarehouseSettings";
import Register from "views/pages/Register/Register";
import { UserProfileContainer } from "views/pages/UserProfile";
import { BatchesTableContainer } from "views/tables/BatchesTable";
import { BuildingsTableContainer } from "views/tables/BuildingsTable";
import { PackagesTableContainer } from "views/tables/PackagesTable";
import { UsersTableContainer } from "views/tables/UsersTable";
import { WarehouseDailyWindowsDetailContainer } from "views/tables/WarehouseDailyWindowsDetail";
import { WarehouseLocationsTableContainer } from "views/tables/WarehouseLocationsTable";
import { WarehousesTableContainer } from "views/tables/WarehousesTable";

export const nav = [
  {
    icon: icons.dashboard,
    name: "Dashboard",
    path: "/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    icon: icons.package,
    name: "Packages",
    path: "/packages/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: [
      {
        name: "Add Package",
        path: "/package/",
        permissions: {
          adminUser: true,
          warehouseUser: true
        }
      }
    ]
  },
  {
    icon: icons.user,
    name: "Users",
    path: "/users/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: [
      {
        name: "Add User",
        path: "/user/",
        permissions: {
          adminUser: true,
          warehouseUser: true
        }
      }
    ]
  },
  {
    icon: icons.building,
    name: "Buildings",
    path: "/buildings/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: [
      {
        name: "Add Building",
        path: "/building/",
        permissions: {
          adminUser: true,
          warehouseUser: true
        }
      }
    ]
  },
  {
    icon: icons.warehouse,
    name: "Warehouses",
    path: "/warehouses/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: []
  },
  {
    icon: icons.warehouseLocation,
    name: "Locations",
    path: "/warehouse/locations",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: [
      {
        name: "Manage Locations",
        path: "/warehouse/batchLocations/",
        permissions: {
          adminUser: true,
          warehouseUser: true
        }
      }
    ]
  },
  {
    icon: icons.batches,
    name: "Batches",
    path: "/batches",
    permissions: {
      adminUser: true,
      warehouseUser: true
    },
    views: [
      {
        name: "Add Batch",
        path: "/batch/",
        permissions: {
          adminUser: true,
          warehouseUser: true
        }
      },
      {
        name: "Today Detail",
        path: "/todayDetail/",
        permissions: {
          warehouseUser: true
        }
      }
    ]
  }
];

export const routes = [
  {
    component: FetchSandbox,
    layout: "/admin",
    name: "Sandbox",
    path: "/sandbox",
    permissions: {
      adminUser: true
    }
  },
  {
    component: Dashboard,
    layout: "/admin",
    name: "Dashboard",
    path: "/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: BuildingsTableContainer,
    layout: "/admin",
    name: "Buildings",
    path: "/buildings",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: BuildingFormContainer,
    layout: "/admin",
    name: "Add Building",
    path: "/building/:buildingId(\\d+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehousesTableContainer,
    layout: "/admin",
    name: "Warehouses",
    path: "/warehouses",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehouseFormContainer,
    layout: "/admin",
    name: "Edit Warehouse",
    path: "/warehouse/:warehouseId(\\d+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: PackagesTableContainer,
    layout: "/admin",
    name: "Packages",
    path: "/packages",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: PackageFormContainer,
    layout: "/admin",
    name: "Add Package",
    path: "/package/:fetchPackageId(\\d+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: UsersTableContainer,
    layout: "/admin",
    name: "Users",
    path: "/users",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: UserFormContainer,
    layout: "/admin",
    name: "Add User",
    path: "/user/:userId(.+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehouseLocationsTableContainer,
    layout: "/admin",
    name: "Warehouse Locations",
    path: "/warehouse/locations",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehouseLocationFormContainer,
    layout: "/admin",
    name: "Warehouse Location",
    path: "/warehouse/location/:warehouseLocationId(\\d+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehouseLocationBatchFormContainer,
    layout: "/admin",
    name: "Warehouse Multiple Locations",
    path: "/warehouse/batchLocations/",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: BatchesTableContainer,
    layout: "/admin",
    name: "Batches",
    path: "/batches",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: BatchFormContainer,
    layout: "/admin",
    name: "Add Batch",
    path: "/batch/:batchId(\\d+)?",
    permissions: {
      adminUser: true,
      warehouseUser: true
    }
  },
  {
    component: WarehouseDailyWindowsDetailContainer,
    layout: "/admin",
    name: "Today Detail",
    path: "/todayDetail",
    permissions: {
      warehouseUser: true
    }
  },
  {
    name: "Pages",
    path: "/buildings",
    views: [
      {
        component: LoginContainer,
        layout: "/auth",
        name: "Login",
        path: "/login"
      },
      {
        component: Register,
        layout: "/auth",
        name: "Register",
        path: "/register"
      },
      {
        component: LockScreen,
        layout: "/auth",
        name: "LockScreen",
        path: "/lock-screen"
      },
      {
        component: UserProfileContainer,
        layout: "/admin",
        name: "UserProfile",
        path: "/user-profile"
      },
      {
        component: MyWarehouseSettingsContainer,
        layout: "/admin",
        name: "MyWarehouseSettings",
        path: "/my-warehouse"
      }
    ]
  }
];

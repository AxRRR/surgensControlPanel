import { configureStore } from "@reduxjs/toolkit";
import members from "./states/members";
import user from "./states/user";


export interface AppStore {
  user: any;
  members: any
}

export default configureStore<AppStore>({
  reducer: {
        user: user,
        members: members
  }
});
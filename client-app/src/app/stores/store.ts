import ActivityStore from "./activityStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";

interface Store {
    activityStore: ActivityStore// klasa mirret dhe perdoret si type
    commonStore: CommonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);//kthen objekt ne activityStore:newActivity store
}

import ActivityStore from "./activityStore";
import {createContext, useContext} from "react";

interface Store {
    activityStore: ActivityStore// klasa mirret dhe perdoret si type
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);//kthen objekt ne activityStore:newActivity store
}

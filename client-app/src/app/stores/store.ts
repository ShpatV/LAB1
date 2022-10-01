import ActivityStore from "./activityStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import EmailActivityStore from "./emailActivityStore";
import CommentStore from "./commentStore";
import SuggestionActivityStore from "./suggestionActivityStore";

interface Store {
    activityStore: ActivityStore// klasa mirret dhe perdoret si type
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore: CommentStore;
    emailActivityStore: EmailActivityStore;
    suggestionActivityStore: SuggestionActivityStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore: new CommentStore(),
    emailActivityStore: new EmailActivityStore(),
    suggestionActivityStore: new SuggestionActivityStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);//kthen objekt ne activityStore:newActivity store
}

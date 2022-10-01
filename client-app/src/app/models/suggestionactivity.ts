import { Profile } from "./profile";
export interface SuggestionActivity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;
    host?: Profile;
    hostUsername: string;
    isHost: boolean;
    attendees: Profile[]
  }


  export class SuggestionActivity implements SuggestionActivity {
    constructor(init?: SuggestionActivityFormValues){
      Object.assign(this,init)
    }
  }

  export class SuggestionActivityFormValues {
    id?: string = undefined;
    title: string= '';
    category: string= '';
    description: string= '';
    date: Date | null = null;
    city: string = '';
    venue: string = '';

    constructor(activity?: SuggestionActivityFormValues){
      if(activity) {
        this.id = activity.id;
        this.title = activity.title;
        this.category = activity.category;
        this.description = activity.description;
        this.date = activity.date;
        this.venue = activity.venue;
        this.city = activity.city;
      }
    }
  }
  
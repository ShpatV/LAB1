export interface EmailActivity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    city: string;
    venue: string;
  }


  export class EmailActivity implements EmailActivity {
    constructor(init?: EmailActivityFormValues){
      Object.assign(this,init)
    }
  }

  export class EmailActivityFormValues {
    id?: string = undefined;
    title: string= '';
    description: string= '';
    date: Date | null = null;
    city: string = '';
    venue: string = '';

    constructor(activity?: EmailActivityFormValues){
      if(activity) {
        this.id = activity.id;
        this.title = activity.title;
        this.description = activity.description;
        this.date = activity.date;
        this.venue = activity.venue;
        this.city = activity.city;
      }
    }
  }
  
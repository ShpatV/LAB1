import {makeAutoObservable, reaction, runInAction } from "mobx";
import { EmailActivity, EmailActivityFormValues } from "../models/emailactivity";
import agent from "../api/agent";
import {format} from 'date-fns';
import { store } from "./store";

export default class EmailActivityStore {
    emailAcitvityRegistry = new Map<string, EmailActivity>();
    selectedEmailActivity: EmailActivity | undefined = undefined;
    loading=false;
    loadingInitial=false;
    
    constructor () {
        makeAutoObservable(this);
    }

    loadEmailActivities = async () => {
        this.loadingInitial = false;//bane true
        try {
            const result = await agent.EmailActivities.list();
            result.data.forEach(emailActivity => {
                this.setEmailActivity(emailActivity);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    private setEmailActivity = (emailActivity: EmailActivity)=> {
        emailActivity.date=new Date(emailActivity.date!);
        this.emailAcitvityRegistry.set(emailActivity.id, emailActivity);
        
    }

    get emailActivitiesByDate() {
        return Array.from(this.emailAcitvityRegistry.values()).sort((a, b) =>
       a.date!.getTime() - b.date!.getTime());
    }

    get groupedEmailActivities () {
        return Object.entries(//secili objekt ka key,si activity date dhe qdo dat ka activity
            this.emailActivitiesByDate.reduce((activities,activity) => {
                const date= format(activity.date!, 'dd MMM yyyy');
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
            }, {} as {[key: string]: EmailActivity[]})
        )
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    loadEmailActivity = async (id: string) => {

        let emailActivity = this.getEmailActivity(id);
        if (emailActivity) {
            this.selectedEmailActivity = emailActivity;
            return emailActivity;
        } else {
            this.loadingInitial = true;
            try {
                emailActivity = await agent.Activities.details(id);
                this.setEmailActivity(emailActivity);
                runInAction(() => {
                    this.selectedEmailActivity = emailActivity;
                })
                this.setLoadingInitial(false);
                return emailActivity;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }
    private getEmailActivity = (id: string) => {
        return this.emailAcitvityRegistry.get(id);
    }

   
    createEmailActivity = async (emailActivity: EmailActivityFormValues) => {
        const user = store.userStore.user;
       

      
        try {
            await agent.EmailActivities.create(emailActivity);
            const newEmailActivity = new EmailActivity(emailActivity);
        
          
            this.setEmailActivity(newEmailActivity);
            runInAction(() => {
             
                this.selectedEmailActivity = newEmailActivity;
              
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    deleteEmailActivity = async (emailActivity: EmailActivity) => {
        this.loading = true;
        try {
            await agent.EmailActivities.delete(emailActivity.id);
            runInAction(() => {
                
                this.emailAcitvityRegistry.delete(emailActivity.id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }

        
    }
    clearSelectedActivity = () => {
        this.selectedEmailActivity = undefined;
    }



}

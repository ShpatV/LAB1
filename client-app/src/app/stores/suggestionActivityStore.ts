import {makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import {format} from 'date-fns';
import { store } from "./store";
import { SuggestionActivity,SuggestionActivityFormValues } from "../models/suggestionactivity";
import { Pagination, PagingParams } from "../models/Pagination";
import { Profile } from "../models/profile";

export default class SuggestionActivityStore {
    suggestionActivityRegistry = new Map<string, SuggestionActivity>();
    selectedSuggestionActivity: SuggestionActivity | undefined = undefined;
    editMode=false;
    loading=false;
    loadingInitial=false;

    
    
    constructor () {
        makeAutoObservable(this);

       
    }
  

   
    updateAttendance = async () => {//remove attende object nese bohet canceled edhe shtohet nese bohet join
        const user = store.userStore.user;
        this.loading = true;
        try {
            await agent.SuggestionActivities.attend(this.selectedSuggestionActivity!.id);
            runInAction(()=> {
                if(this.selectedSuggestionActivity){
                    this.selectedSuggestionActivity.attendees = 
                         this.selectedSuggestionActivity.attendees?.filter(a=>a.username !== user?.username);
                 

                }else {
                    const attendee = new Profile(user!);
                    // this.selectedSuggestionActivity?.attendees?.push(attendee);
                 
                }
                this.suggestionActivityRegistry.set(this.selectedSuggestionActivity!.id, this.selectedSuggestionActivity!)
            })

        }catch (error){
            console.log(error);
        }finally {
            runInAction(()=> this.loading=false);
        }
    }



    loadSuggestionActivities = async () => {
        this.loadingInitial = false;//bane true
        try {
            const result = await agent.SuggestionActivities.list();
            result.data.forEach(suggestionActivity => {
                this.setSuggestionActivity(suggestionActivity);
            })
 
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

 

    private setSuggestionActivity = (suggestionActivity: SuggestionActivity)=> {
        suggestionActivity.date=new Date(suggestionActivity.date!);
        this.suggestionActivityRegistry.set(suggestionActivity.id, suggestionActivity);
        
    }

    get suggestionActivitiesByDate() {
        return Array.from(this.suggestionActivityRegistry.values()).sort((a, b) =>
       a.date!.getTime() - b.date!.getTime());
    }

    get groupedSuggestionActivities () {
        return Object.entries(//secili objekt ka key,si activity date dhe qdo dat ka activity
            this.suggestionActivitiesByDate.reduce((activities,activity) => {
                const date= format(activity.date!, 'dd MMM yyyy');
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
            }, {} as {[key: string]: SuggestionActivity[]})
        )
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    loadSuggestionActivity = async (id: string) => {

        let suggestionActivity = this.getSuggestionActivity(id);
        if (suggestionActivity) {
            this.selectedSuggestionActivity = suggestionActivity;
            return suggestionActivity;
        } else {
            this.loadingInitial = true;
            try {
                suggestionActivity = await agent.SuggestionActivities.details(id);
                this.setSuggestionActivity(suggestionActivity);
                runInAction(() => {
                    this.selectedSuggestionActivity = suggestionActivity;
                })
                this.setLoadingInitial(false);
                return suggestionActivity;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }
    private getSuggestionActivity = (id: string) => {
        return this.suggestionActivityRegistry.get(id);
    }

   
    createSuggestionActivity = async (suggestionActivity: SuggestionActivityFormValues) => {
        const user = store.userStore.user;
       

      
        try {
            await agent.SuggestionActivities.create(suggestionActivity);
            const newSuggestionActivity = new SuggestionActivity(suggestionActivity);
        
          
            this.setSuggestionActivity(newSuggestionActivity);
            runInAction(() => {
             
                this.selectedSuggestionActivity = newSuggestionActivity;
              
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    deleteSuggestionActivity = async (suggestionActivity: SuggestionActivity) => {
        this.loading = true;
        try {
            await agent.SuggestionActivities.delete(suggestionActivity.id);
            runInAction(() => {
                
                this.suggestionActivityRegistry.delete(suggestionActivity.id);
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
        this.selectedSuggestionActivity = undefined;
    }



}

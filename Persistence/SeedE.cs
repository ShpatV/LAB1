using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class SeedE
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.EmailActivities.Any()) return;
           
                var EmailActivities = new List<EmailActivity>
                 {
                    new EmailActivity
                    {
                        Title = "Past Activity 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Email 2 months ago",
                       
                        City = "London",
                        Venue = "Pub",
                       
                    },
                    new EmailActivity
                    {
                        Title = "Past Activity 2",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Email 1 month ago",
                       
                        City = "Paris",
                        Venue = "The Louvre",
                    
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "Email 1 month in future",
                      
                        City = "London",
                        Venue = "Wembly Stadium",
                    
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 2",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "Email 2 months in future",
                   
                        City = "London",
                        Venue = "Jamies Italian",
                    
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 3",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "Email 3 months in future",
                      
                        City = "London",
                        Venue = "Pub",
                   
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 4",
                        Date = DateTime.Now.AddMonths(4),
                        Description = "Email 4 months in future",
                   
                        City = "London",
                        Venue = "British Museum",
                     
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 5",
                        Date = DateTime.Now.AddMonths(5),
                        Description = "Email 5 months in future",
                      
                        City = "London",
                        Venue = "Punch and Judy",
                     
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 6",
                        Date = DateTime.Now.AddMonths(6),
                        Description = "Email 6 months in future",
                      
                        City = "London",
                        Venue = "O2 Arena",
                     
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 7",
                        Date = DateTime.Now.AddMonths(7),
                        Description = "Email 7 months in future",
                       
                        City = "Berlin",
                        Venue = "All",
                 
                    },
                    new EmailActivity
                    {
                        Title = "Future Activity 8",
                        Date = DateTime.Now.AddMonths(8),
                        Description = "Email 8 months in future",
                       
                        City = "London",
                        Venue = "Pub",
                  
                    }
                };
                

          
                await context.EmailActivities.AddRangeAsync(EmailActivities);
                await context.SaveChangesAsync();
            }
        }
    }


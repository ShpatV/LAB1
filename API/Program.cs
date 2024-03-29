using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

using Persistence;
using Microsoft.AspNetCore.Identity;
using Domain;

namespace API
{
    public class Program
    {
        public static async Task  Main(string[] args)
        {
           var host = CreateHostBuilder(args).Build();

           using var scope = host.Services.CreateScope();//host te qdo serveri scope

           var services = scope.ServiceProvider;

           try{
               var context = services.GetRequiredService<DataContext>();
            //    var contextEmail = services.GetRequiredService<DataContextE>();
            //    await contextEmail.Database.MigrateAsync();
               var userManager = services.GetRequiredService<UserManager<AppUser>>();
               
               await context.Database.MigrateAsync();
               await Seed.SeedData(context, userManager);
               await SeedE.SeedData(context);
               await SeedS.SeedData(context);

               
           }
           catch(Exception ex)
           {
               var logger = services.GetRequiredService<ILogger<Program>>();
               logger.LogError(ex, "An error occured during migration");

           }
           await host.RunAsync();
        }
        
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

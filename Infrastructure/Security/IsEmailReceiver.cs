using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security
{
    public class IsEmailReceiver : IAuthorizationRequirement
    {
        
    }

    public class IsEmailReceiverHandler : AuthorizationHandler<IsEmailReceiver> 
    {
        private readonly DataContext _dbcontext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public IsEmailReceiverHandler(DataContext dbcontext,
         IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _dbcontext = dbcontext;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsEmailReceiver requirement)
        {
            Console.WriteLine("HEREEEEEE ============ EMAIL POLICY");
            var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);
        
            if (userId == null) return Task.CompletedTask;
            
            var emailId = Guid.Parse(_httpContextAccessor.HttpContext?.Request.RouteValues
                .SingleOrDefault(x=> x.Key == "id").Value?.ToString());
           
            var email = _dbcontext.EmailActivities
                .AsNoTracking()
                .SingleOrDefaultAsync(x => x.userId.Id == userId && x.Id == emailId)
                .Result;
            

            if (email == null) return Task.CompletedTask;

            context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain 
{
    public class AppUser : IdentityUser//one to many relationship
    {
        public string DisplayName { get; set; }

        public string Bio { get; set;}

        public ICollection<ActivityAttendee> Activities { get; set; }

        public ICollection<Photo> Photos {get ; set;}

        public ICollection<UserFollowing> Followings  { get; set; }
        public ICollection<EmailActivity> Emails { get; set; }

        public ICollection<UserFollowing> Followers {get; set;}      

        public ICollection<RefreshToken> RefreshTokens {get; set;} = new List<RefreshToken>();    
    }
}
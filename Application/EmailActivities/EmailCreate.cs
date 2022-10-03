// using System.Threading;
// using System.Threading.Tasks;
// using Domain;
// using MediatR;
// using Persistence;
// using FluentValidation;
// using Application.Core;
// using Application.Interfaces;
// using Microsoft.EntityFrameworkCore;

// namespace Application.EmailActivities
// {
//     public class EmailCreate
//     {
//         public class Command :  IRequest<Result<Unit>>
//         {
//             public EmailActivity EmailActivity { get; set; }
//         }

//         public class CommandValidator : AbstractValidator<Command>
//        {
//             public CommandValidator()
//             {
//                 RuleFor(x=> x.EmailActivity).SetValidator(new EmailActivityValidator());
//             }

//         }

//          public class Handler : IRequestHandler<Command, Result<Unit>>
//         {
//             private readonly DataContext _context;
//         private readonly IUserAccessor _userAccessor;
//             public Handler(DataContext context, IUserAccessor userAccessor)
//             {
//             _userAccessor = userAccessor;
//                 _context = context;
//             }


//             public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
//             {
//                {   
//                 var user = await _context.Users.FirstOrDefaultAsync(x=> 
//                     x.UserName == _userAccessor.GetUsername());

               

               


//                 _context.EmailActivities.Add(request.EmailActivity);//shtojm aktivitetin ne memorje jo ne db
//                 var result = await _context.SaveChangesAsync()> 0;//ruan ndryshimet

//                 if (!result) return Result<Unit>.Failure("Failed to create activity");
//                 return Result<Unit>.Success(Unit.Value);
//             }
//         }
//     }
// }

using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using FluentValidation;
using Application.Core;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.EmailActivities;

namespace Application.EmailActivities
{
    public class EmailCreate
    {
        public class Command : IRequest<Result<Unit>>//command nuk kthen asgje por query
        {
            public EmailActivity EmailActivity { get; set; }

        }

          public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x=> x.EmailActivity).SetValidator(new EmailActivityValidator());
            }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
        private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
            _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {   
                var user = await _context.Users.FirstOrDefaultAsync(x=> 
                    x.UserName == _userAccessor.GetUsername());

             

               


                _context.EmailActivities.Add(request.EmailActivity);//shtojm aktivitetin ne memorje jo ne db
                var result = await _context.SaveChangesAsync()> 0;//ruan ndryshimet

                if (!result) return Result<Unit>.Failure("Failed to create activity");
                return Result<Unit>.Success(Unit.Value);
            }


        }
    }
}
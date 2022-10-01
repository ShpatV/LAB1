using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Application.Core;

namespace Application.SuggestionActivities
{
    public class SuggestionDelete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var suggestionactivity = await _context.SuggestionActivities.FindAsync(request.Id);

                _context.Remove(suggestionactivity);

                 var result=await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to delete the activity");


                 return Result<Unit>.Success(Unit.Value);
            }

           
        }
    }
}
 // public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            // {
            //     var emailactivity= await _context.EmailActivities.FindAsync(request.Id);//do provojm nese ky activity ekzisotn

            //     // if(activity == null) return null;

            //     _context.Remove(emailactivity);//nese nuk esht aj aktivitet

            //     var result=await _context.SaveChangesAsync() > 0;
            //     if(!result) return Result<Unit>.Failure("Failed to delete the activity");

            //     return Result<Unit>.Success(Unit.Value);

            // }
using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Application.Core;

namespace Application.EmailActivities
{
    public class EmailDelete
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
                var emailactivity = await _context.EmailActivities.FindAsync(request.Id);
                Console.WriteLine("EMAIL ID: " + request.Id);
                Console.WriteLine("EMAIL: " + emailactivity.Title);
                _context.Remove(emailactivity);

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
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest//command nuk kthen asgje por query
        {
            public Activity Activity { get; set; }

        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);//shtojm aktivitetin ne memorje jo ne db
                await _context.SaveChangesAsync();//ruan ndryshimet
                return Unit.Value;
            }


        }
    }
}
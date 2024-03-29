using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.SuggestionActivities
{
    public class SuggestionCreate
    {
        public class Command : IRequest
        {
            public SuggestionActivity SuggestionActivity { get; set; }
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
                _context.SuggestionActivities.Add(request.SuggestionActivity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.SuggestionActivities
{
    public class SuggestionEdit
    {
        public class Command : IRequest
        {
            public SuggestionActivity SuggestionActivity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var suggestionactivity = await _context.SuggestionActivities.FindAsync(request.SuggestionActivity.Id);

                _mapper.Map(request.SuggestionActivity, suggestionactivity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
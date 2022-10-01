using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.SuggestionActivities
{
    public class SuggestionDetails
    {
        public class Query : IRequest<SuggestionActivity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, SuggestionActivity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<SuggestionActivity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.SuggestionActivities.FindAsync(request.Id);
            }
        }
    }
}
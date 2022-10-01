using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.SuggestionActivities
{
    public class SuggestionList
    {
        public class Query : IRequest<List<SuggestionActivity>> { }

        public class Handler : IRequestHandler<Query, List<SuggestionActivity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<SuggestionActivity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.SuggestionActivities.ToListAsync(cancellationToken);
            }
        }
    }
}
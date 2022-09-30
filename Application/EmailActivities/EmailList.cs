using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.EmailActivities
{
    public class EmailList
    {
        public class Query : IRequest<List<EmailActivity>> { }

        public class Handler : IRequestHandler<Query, List<EmailActivity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<EmailActivity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.EmailActivities.ToListAsync(cancellationToken);
            }
        }
    }
}
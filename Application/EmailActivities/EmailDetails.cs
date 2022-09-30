using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.EmailActivities
{
    public class EmailDetails
    {
        public class Query : IRequest<EmailActivity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, EmailActivity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<EmailActivity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.EmailActivities.FindAsync(request.Id);
            }
        }
    }
}
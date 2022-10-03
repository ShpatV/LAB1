using System.Linq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using Application.Interfaces;

namespace Application.EmailActivities
{
    public class EmailList
    {
        public class Query : IRequest<List<EmailActivity>> { }

        public class Handler : IRequestHandler<Query, List<EmailActivity>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<List<EmailActivity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.EmailActivities
                                .Where(x => x.userId.UserName == _userAccessor.GetUsername())
                                .ToListAsync(cancellationToken);
            }
        }
    }
}
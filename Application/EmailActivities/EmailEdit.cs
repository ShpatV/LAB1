using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.EmailActivities
{
    public class EmailEdit
    {
        public class Command : IRequest
        {
            public EmailActivity EmailActivity { get; set; }
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
                var emailactivity = await _context.EmailActivities.FindAsync(request.EmailActivity.Id);

                _mapper.Map(request.EmailActivity, emailactivity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
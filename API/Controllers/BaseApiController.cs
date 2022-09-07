using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Application.Core;
using API.Extensions;

namespace API.Controllers//kqyr ne menyre automatike
{
    [ApiController]//kqyr ne menyre automatike gjeneron http responses nga validimi
    [Route("api/[controller]")]  //api/activities shfaq endpoints
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices//ben mediator available to qfar do klase te APIcontroller
            .GetService<IMediator>();

        protected ActionResult HandleResult<T>(Result<T> result)    
        {
            if(result == null) return NotFound();
            if(result.IsSuccess && result.Value !=null)
                return Ok(result.Value);
            if(result.IsSuccess && result.Value == null)
                return NotFound();
            return BadRequest(result.Error);   

        }

          protected ActionResult HandlePagedResult<T>(Result<PagedList<T>> result)    
        {
            if(result == null) return NotFound();
            if(result.IsSuccess && result.Value !=null)
            {
                Response.AddPaginationHeader(result.Value.CurrentPage, result.Value.PageSize,
                    result.Value.TotalCount,result.Value.TotalPages);
                 return Ok(result.Value);
            }
               
            if(result.IsSuccess && result.Value == null)
                return NotFound();
            return BadRequest(result.Error);   

        }
    }
}
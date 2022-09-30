using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Activities;
using Application.EmailActivities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmailActivitiesController : BaseApiController
    {
   
        [HttpGet]
        public async Task<ActionResult<List<EmailActivity>>> GetActivities()
        {
            return await Mediator.Send(new EmailList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmailActivity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new EmailDetails.Query{Id = id});
        }
      
        [HttpPost]
        public async Task<IActionResult> CreateActivity(EmailActivity emailactivity)
        {
            return Ok(await Mediator.Send(new EmailCreate.Command {EmailActivity = emailactivity}));
        }
        [Authorize(Policy = "IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, EmailActivity emailactivity)
        {
            emailactivity.Id = id;
            return Ok(await Mediator.Send(new EmailEdit.Command{EmailActivity = emailactivity}));
        }
        [Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
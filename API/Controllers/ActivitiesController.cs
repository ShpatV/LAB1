using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Application.Activities;

namespace API.Controllers

{


    public class ActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());//kthen response back te mediatr handler dhe mirret prej baseApicontroller
        }

        [HttpGet("{id}")]//per activity tveqanta endpoint
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id= id});//kthen dhe remove error 
        }
        [HttpPost]
        public async Task<IActionResult>CreateActivity(Activity activity)//jep akses ne http response type
        {
            return Ok(await Mediator.Send(new Create.Command{Activity=activity}));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult>EditActivity(Guid id,Activity activity)
        {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Activity=activity}));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id= id}));
        }
    }   
}
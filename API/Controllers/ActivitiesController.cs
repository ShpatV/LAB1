using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Domain;
using System;
using Application.Activities;
using Microsoft.AspNetCore.Authorization;
using Application.Core;

namespace API.Controllers

{


    public class ActivitiesController : BaseApiController
    {
      

        [HttpGet]
        public async Task<IActionResult> GetActivities([FromQuery]ActivityParams param)
        {
            return HandlePagedResult (await Mediator.Send(new List.Query{Params = param}));//kthen response back te mediatr handler dhe mirret prej baseApicontroller
        }


       
        [HttpGet("{id}")]//per activity tveqanta endpoint
        public async Task<IActionResult> GetActivity(Guid id)
        {
      

            return HandleResult(await Mediator.Send(new Details.Query{Id= id})); 
          
        }
        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)//jep akses ne http response type
        {
            return HandleResult(await Mediator.Send(new Create.Command{Activity=activity}));
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id,Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Activity=activity}));
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id= id}));
        }

        [HttpPost("{id}/attend")]
        public async Task<IActionResult> Attend (Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateAttendance.Command{Id=id}));
        }
    }   
}
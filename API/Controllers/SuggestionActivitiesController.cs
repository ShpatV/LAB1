using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Activities;
using Application.SuggestionActivities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers

{


    public class SuggestionActivitiesController : BaseApiController
    {
      

       [HttpGet]
        public async Task<ActionResult<List<SuggestionActivity>>> GetActivities()
        {
            return await Mediator.Send(new SuggestionList.Query());
        }
       
        [HttpGet("{id}")]
        public async Task<ActionResult<SuggestionActivity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new SuggestionDetails.Query{Id = id});
        }
      
        [HttpPost]
        public async Task<IActionResult> CreateActivity(SuggestionActivity suggestionactivity)//jep akses ne http response type
        {
            return Ok(await Mediator.Send(new SuggestionCreate.Command {SuggestionActivity = suggestionactivity}));
        }

       [Authorize(Policy = "IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, SuggestionActivity suggestionactivity)
        {
            suggestionactivity.Id = id;
            return Ok(await Mediator.Send(new SuggestionEdit.Command{SuggestionActivity = suggestionactivity}));
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id= id}));
        }

    }   
}
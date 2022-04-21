using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using System;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers

{


public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)//db me klient
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]//per activity tveqanta endpoint
        public async Task<ActionResult<Activity>>GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}
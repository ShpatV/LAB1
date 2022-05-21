using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()//lidhja objektit me objekt
        {
            CreateMap<Activity, Activity>();

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class SuggestionActivity
    {
        public Guid Id { get; set; }//gjenerimi i id nga db

        public string Title { get; set; }

        public DateTime Date { get; set; }

        public String Category { get; set; }

        public string Description { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }


    }
}
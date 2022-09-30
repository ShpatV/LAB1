using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence {
    public class SeedB {
     public static async Task SeedData(DataContext context)
     {
      if (context.Authors.Any()) return; 

      var authors = new List<Author>
      {
          new Author
          {
              Name = "Ismail",
              Surname = "Kadare",
              Description = "ismail born  .. ipsum...",
          },
          new Author
          {
              Name = "Jeronim",
              Surname = "Derada",
              Description = "Shpat Vata was ...",
          },
          new Author
          {
              Name = "Naim",
              Surname = "Frasheri",
              Description = "Naim was born in Ferizaj...",
          },
            new Author
          {
              Name = "Shkelzen",
              Surname = "Morina",
              Description = "Shkelzen was ...",
          },
            new Author
          {
              Name = "Jetim ",
              Surname = "Vllasaliu",
              Description = "Jetim was ...",
          },
      };

      
       if (context.Books.Any()) return; 

      var books = new List<Book>
      {
          new Book
          {
              BookName = "Bageti e Bujqesi",
              PublicationYear = 2002,
              Publisher = "No Clue",
          },
            new Book
          {
              BookName = "Lulet e Veres",
              PublicationYear = 2004,
              Publisher = "No Clue",
          },
           new Book
          {
              BookName = "Vera e Gjate",
              PublicationYear = 2001,
              Publisher = "No Clue",
          },
              new Book
          {
              BookName = "Fjalet e Qiririt",
              PublicationYear = 2002,
              Publisher = "No Clue",
          },
             new Book
          {
              BookName = "Gjuetari Ushtarak",
              PublicationYear = 2003,
              Publisher = "No Clue",
          },
      };

      await context.Authors.AddRangeAsync(authors);
      await context.Books.AddRangeAsync(books);
      await context.SaveChangesAsync(); 
     }

    }
}


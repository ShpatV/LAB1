using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Application.Core
{
    public class PagedList<T> : List<T>
    {
        public PagedList(IEnumerable<T> items,int count, int pageNumber, int pageSize)
        {
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            PageSize = pageSize;
            TotalCount = count;
            AddRange(items);
        }

        public int CurrentPage { get; set; }

        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
        //per current,total,page edhe total pages
        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize)
        {
            var count = await source.CountAsync();//sa items jan total
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();//nese kena list me12 items edhe page size esht 10 per me rezultu me 10 recorde
            return new PagedList<T> (items,count,pageNumber,pageSize);
        }

        
    }
}
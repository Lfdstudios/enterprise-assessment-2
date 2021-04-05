  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("api/blogs")]
    public class BlogController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Blog> Get()
        {
            return FakeData.getBlogs();
        }
        // [HttpGet("{_id}")]
        // public async Task<ActionResult<Blog>> GetBlogItem(string _id)
        // {
        //     var blogItem = blogItems.FindAsync(_id);
        //     if (blogItem == null)
        //     {
        //         return NotFound();
        //     }
        //     return Blog(blogItem);
        // }


    }
}
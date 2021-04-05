  
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
        [HttpPut("api/blogs/update")]
        public void Put(Blog blog)
        {
            FakeData.UpdateBlog(blog.views, blog._id);
        }


    }
}
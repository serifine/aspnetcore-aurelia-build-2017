using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace todo.Controllers
{
  [Route("api/[controller]")]
  public class TodosController : Controller
  {
    [HttpGet]
    public IEnumerable<Todo> Get()
    {
      return data;
    }

    [HttpPost]
    public void Post([FromBody]Todo todo)
    {
      data.Add(todo);
    }

    [HttpDelete]
    public void Delete([FromBody]Todo todo)
    {
      var found = data.FirstOrDefault(x => x.description == todo.description);
      if (found != null)
      {
        data.Remove(found);
      }
    }

    public class Todo
    {
      public string description { get; set; }
      public bool done { get; set; }
    }

    static IList<Todo> data = new List<Todo>();
  }
}

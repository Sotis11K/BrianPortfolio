using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BrianPortfolio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        
    }
}

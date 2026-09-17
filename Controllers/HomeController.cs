using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using System.Diagnostics;
using BrianPortfolio.Models;

namespace BrianPortfolio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            
            var projects = new List<ProjectPopup> 
            { 
                new ProjectPopup
                {
                    Id = 1,
                    Title = "Portfolio Website",
                    Description = "My portfolio website built with ASP.NET Core MVC.",
                    Link = "https://github.com/",
                    Image = "images/goofy-brian.png"
                },

                new ProjectPopup
                {
                    Id = 2,
                    Title = "Movie Application",
                    Description = "A movie application built with C# and an API.",
                    Link = "https://github.com/",
                    Image = "images/goofy-brian.png"
                },

                new ProjectPopup
                {
                    Id = 3,
                    Title = "Another Project",
                    Description = "A description for another project.",
                    Link = "https://github.com/",
                    Image = "images/goofy-brian.png"
                },
                new ProjectPopup
                {
                    Id = 4,
                    Title = "Testing",
                    Description = "this is my own testing thing",
                    Link = "https://youtube.com",
                    Image = "images/goofy-brian.png"

                }
            };




            return View(projects);
        }


    }
}
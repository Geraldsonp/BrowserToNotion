using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using Backend.Models;

namespace BrowserToNotion
{
    public static class GetDataFromDbFunction
    {
        [FunctionName("GetDataFromDbFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "{databaseId}")] HttpRequest req,
            ILogger log, [FromRoute] string databaseId)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            string name = req.Query["name"];

            if (!req.Headers.ContainsKey("Notion-Version") && !req.Headers.ContainsKey("Notion-Secret") && !req.Headers.ContainsKey("Notion-Token"))
            {
                return new BadRequestObjectResult("Notion-Version, Notion-Secret and Notion-Token are required");
            }
            

            var notionVersion = req.Headers["Notion-Version"];
            var notionToken = req.Headers["Notion-Token"];

            HttpClient client = new();
            client.DefaultRequestHeaders.Add("Notion-Version", notionVersion.ToString());
            client.DefaultRequestHeaders.Add("Notion-Token", notionToken.ToString());

            var response = await client.GetAsync($"https://api.notion.com/v1/databases/{databaseId}");

            if (!response.IsSuccessStatusCode)
            {
                return new BadRequestObjectResult("Notion API call failed");
            }

            var responseContent = await response.Content.ReadAsStringAsync();

            return new OkObjectResult(responseContent);   
        }
    }
}

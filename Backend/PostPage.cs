using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Backend;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using Backend.Models;

namespace BrowserToNotion
{
    public static class PostPage
    {
        [FunctionName("PostPage")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {   
            log.LogInformation("C# HTTP trigger function processed a request.");

            var client = NotionClient.CreateClient(req.Headers);
            if (client == null)
            {
                return new BadRequestObjectResult("Notion-Version, Notion-Secret and Notion-Token are required");
            }
    //Todo Find out why is not working
            string requestBody = await new StreamReader(req.Body, Encoding.UTF8).ReadToEndAsync();
            var result = await client.PostAsJsonAsync("pages", new StringContent(requestBody, Encoding.UTF8, "application/json"));
            if (!result.IsSuccessStatusCode)
            {
                return new BadRequestObjectResult("Notion API call failed");
            }
            var responseContent = await result.Content.ReadAsStringAsync();

            string responseMessage = string.IsNullOrEmpty("name")
                ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
                : $"Hello, bobo. This HTTP triggered function executed successfully.";

            return new OkObjectResult(responseMessage);
        }
    }
}

using System;
using System.Net.Http;
using Microsoft.AspNetCore.Http;

namespace Backend
{
    public class NotionClient
    {
        private NotionClient()
        {
            
        }
        
        public static HttpClient CreateClient(IHeaderDictionary headers)
        {
            if (!headers.ContainsKey("Notion-Version") && !headers.ContainsKey("Notion-Secret") && !headers.ContainsKey("Notion-Token"))
            {
                return null;
            }


            var notionVersion = headers["Notion-Version"];
            var notionToken = headers["Notion-Token"];

            HttpClient client = new();
            client.BaseAddress = new Uri("https://api.notion.com/v1/");
            client.DefaultRequestHeaders.Add("Notion-Version", notionVersion.ToString());
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", notionToken.ToString());
            return client;
        }
    }
}

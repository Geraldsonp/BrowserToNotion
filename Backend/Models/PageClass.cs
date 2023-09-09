using System;
using System.Collections.Generic;

using System.Text.Json;
using System.Text.Json.Serialization;
using System.Globalization;
namespace Backend.Models
{


    public partial class Page
    {
        [JsonPropertyName("parent")]
        public Parent Parent { get; set; }

        [JsonPropertyName("icon")]
        public Icon Icon { get; set; }

        [JsonPropertyName("properties")]
        public Properties Properties { get; set; }
    }

    public partial class Icon
    {
        [JsonPropertyName("emoji")]
        public string Emoji { get; set; }
    }

    public partial class Parent
    {
        [JsonPropertyName("database_id")]
        public string DatabaseId { get; set; }
    }

    public partial class Properties
    {
        [JsonPropertyName("Name")]
        public Name Name { get; set; }

        [JsonPropertyName("Description")]
        public Description Description { get; set; }
    }

    public partial class Description
    {
        [JsonPropertyName("rich_text")]
        public RichText[] RichText { get; set; }
    }

    public partial class RichText
    {
        [JsonPropertyName("text")]
        public Text Text { get; set; }
    }

    public partial class Text
    {
        [JsonPropertyName("content")]
        public string Content { get; set; }
    }

    public partial class Name
    {
        [JsonPropertyName("title")]
        public RichText[] Title { get; set; }
    }
}

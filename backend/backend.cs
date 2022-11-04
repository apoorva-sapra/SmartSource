String apiKey = "ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717";
Hashtable ht = new Hashtable();
ht.Add("engine", "google");
ht.Add("q", "Coffee");

try
{
  GoogleSearch search = new GoogleSearch(ht, apiKey);
  JObject data = search.GetJson();
  var organic_results = data["organic_results"];
}
catch (SerpApiSearchException ex)
{
  Console.WriteLine("Exception:");
  Console.WriteLine(ex.ToString());
}
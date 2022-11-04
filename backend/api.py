from serpapi import GoogleSearch

params = {
  "engine": "google",
  "q": "Coffee",
  "api_key": "ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717"
}

search = GoogleSearch(params)
results = search.get_dict()
organic_results = results["organic_results"]

print(results)
print(organic_results)
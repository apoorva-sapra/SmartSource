import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'
import SerpApiSearch from 'google-search-results-nodejs';
const app = express()

app.use(cors())


let query='site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“PaaS” OR “SaaS” OR “IaaS” OR “Openstack” OR “Terraform” OR “Cloudformation” OR “Ansible” OR “Chef” OR “Puppet” OR “Azure” OR “AWS” OR "automation" OR "CICD" OR “EC2” OR “RDS” OR “S3” OR “Cloudwatch” OR “Cloudfront” OR “Openshift” OR “Git) - "DevOps principal or lead" AND "Australia"'
let API_KEY= 'ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717';

var url1='https://serpapi.com/search.json?engine=google&q='+ query + '&api_key='+ API_KEY;


const search = new SerpApiSearch.GoogleSearch("ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717");

const params = {
  engine: "google",
  q: "Coffee"
};

const callback = function(data) {
  console.log(data["organic_results"]);
};

// Show result as JSON
search.json(params, callback);

app.get("/", async (req, res) => {
    const response= await fetch(url1);
    res.json(await response.json())
})


app.listen(5001, () => {
    console.log("Listening on 5001")
})
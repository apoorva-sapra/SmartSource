// var query='site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“PaaS” OR “SaaS” OR “IaaS” OR “Openstack” OR “Terraform” OR “Cloudformation” OR “Ansible” OR “Chef” OR “Puppet” OR “Azure” OR “AWS” OR "automation" OR "CICD" OR “EC2” OR “RDS” OR “S3” OR “Cloudwatch” OR “Cloudfront” OR “Openshift” OR “Git) - "DevOps principal or lead" AND "Australia"';
var linkedInSearchString='site:linkedin.com inurl:in OR inurl:pub -inurl:dir ';
var API_KEY= 'ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717';
const API_KEY2='76a666bccd3b622d2d5118638f5d0709';

// var url= 'http://api.serpstack.com/search?access_key=' + API_KEY2 + '&type=web&query=' + 'site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“selenium” OR “appium” OR “postman” OR “java” OR test*) - "automation OR test OR engineer" AND "gold coast" OR "Queensland"';

// console.log(url1)
// console.log(url)




console.log("hua");

document.getElementById("submitSearchForm").onclick = function () {
    createSearchString()
};


function createSearchString() {
    var country = document.getElementById("country").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var keywords = document.getElementById("keywords").value;
    document.getElementById("pthere").innerHTML = jobTitle;
    document.getElementById("pathere").innerHTML = keywords;
    searchQuery = linkedInSearchString.concat('(', keywords, ')', ' - ' , jobTitle, ' AND ', country);
    console.log(searchQuery);
    var url1='https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google&q='+ searchQuery + '&api_key='+ API_KEY;
    $.get(url1, function(data){
        console.log(data);
    })
};
  

// // fetch api
// fetch(url1);
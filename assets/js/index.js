const firebaseConfig = {
    apiKey: "AIzaSyBoni0BSgzE8iAo2mhKVOiRt4LWS7cPbaQ",
    authDomain: "sourcign-2a97a.firebaseapp.com",
    databaseURL: "https://sourcign-2a97a-default-rtdb.firebaseio.com",
    projectId: "sourcign-2a97a",
    storageBucket: "sourcign-2a97a.appspot.com",
    messagingSenderId: "829422727128",
    appId: "1:829422727128:web:537e95c6000459234b0cad",
    measurementId: "G-4NRHX5X53Q"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        console.log("not logged in");
        location.replace("../../../login/login_page.html")
    }
    else{
        console.log(user)
    }
})


// var query='site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“PaaS” OR “SaaS” OR “IaaS” OR “Openstack” OR “Terraform” OR “Cloudformation” OR “Ansible” OR “Chef” OR “Puppet” OR “Azure” OR “AWS” OR "automation" OR "CICD" OR “EC2” OR “RDS” OR “S3” OR “Cloudwatch” OR “Cloudfront” OR “Openshift” OR “Git) - "DevOps principal or lead" AND "Australia"';
var linkedInSearchString='site:linkedin.com inurl:in OR inurl:pub -inurl:dir ';
var API_KEY= 'ea129d0e45632d59617087eacf26bf48e3ce39458e0bb086c5513df96c413717';
const API_KEY2='76a666bccd3b622d2d5118638f5d0709';

// var url= 'http://api.serpstack.com/search?access_key=' + API_KEY2 + '&type=web&query=' + 'site:linkedin.com inurl:in OR inurl:pub -inurl:dir (“selenium” OR “appium” OR “postman” OR “java” OR test*) - "automation OR test OR engineer" AND "gold coast" OR "Queensland"';

// console.log(url1)
// console.log(url)

document.getElementById("submitSearchForm").onclick = function () {
    createSearchString()
};


function createSearchString() {
    var place = document.getElementById("place").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var keywords = document.getElementById("keywords").value;

    searchQuery = linkedInSearchString.concat('(', keywords, ')', ' - ' , jobTitle, ' AND ', place);
    
    console.log(searchQuery);

    var resultArray=[];

    var url1='https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google&q='+ searchQuery + '&api_key='+ API_KEY;
    if (place && jobTitle && keywords){
        $.get(url1, function(data){
            resultArray=data;
            console.log(resultArray);
            buildResultTable(resultArray);
        })
    }

    function buildResultTable(resultArray){
        var table=document.getElementById('resultTable');
        console.log("length of res" & resultArray.organic_results[length]);
        var lengthOfResults=resultArray.organic_results.length;

        for (var i=0; i<lengthOfResults; i++){
            var row=`<tr class>
                        <td> ${resultArray.organic_results[i].title} </td>
                        <td> table.href= </td>
                    </tr>`
            table.innerHTML+=row
                    
        }
    }
    
};


// // fetch api
// fetch(url1);
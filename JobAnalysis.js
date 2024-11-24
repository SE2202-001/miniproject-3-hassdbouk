// retrieve the whole json data into a constant variable jobData
const jobData = require('./upwork_jobs.json');
// create array for each property that will be displayed on the html page
var jobTitles = [];
var jobTypes = [];
var jobLevels = [];
var jobsPosted = []
// populate each array with the properties of each object in the json file
jobData.forEach((job) => {
    jobTitles.push(job.Title);
    jobTypes.push(job.Type);
    jobLevels.push(job.Level);
    jobsPosted.push(job.Posted);
});

const display = document.querySelector('#display');

function displayJobs(){
    for (let i = 0; i < jobTitles.length; i++){
        display.value = `${jobTitles[i]} - ${jobTypes[i]} (${jobLevels[i]})`;
    }
}





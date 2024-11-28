// retrieve the whole json data into a constant variable jobData
const jobData = require('./upwork_jobs.json');

class Job{
    // create a constructor that will accept the properties of a job in the JSON
    constructor(title, time_post, type, level, skill, detail){
        // set the arguments to the fields of the job class
        this.title = title;
        this.time_post = time_post;
        this.type = type;
        this.level = level;
        this.skill = skill;
        this.detail = detail;
    }
    // return the properties of a job that will be printed in the html layout
    getTitle(){
        return this.title;
    }
    getType(){
        return this.type;
    }
    getLevel(){
        return this.level;
    }
    getPosted(){
        return this.time_post; 
    }
    
}
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

jobData.map(job => {
    dataElement.insertAdjacentHTML('afterbegin', `
        <div>
            ${job.Title} - ${job.Type} (${job.Level})
        </div>
  `)
  })







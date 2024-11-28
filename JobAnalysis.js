// retrieve the whole json data into a constant variable jobData
const jobData = require('./upwork_jobs.json');

class job{
    constructor(title, time_post, type, level, skill, detail){
        this.title = title;
        this.time_post = time_post;
        this.type = type;
        this.level = level;
        this.skill = skill;
        this.detail = detail;
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







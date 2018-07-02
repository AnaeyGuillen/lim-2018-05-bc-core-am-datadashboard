/*url users = '.../data/cohorts/lim-2018-03-pre-core-pw/users.json';
url cohort = '.../data/cohorts.json'
url progress = '.../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const getJson=(url,callback)=> {
    const request = new XMLHttpRequest();
    request.open = ('GET', url);
    request.onload = callback;
    request.onerror = handError;
    request.send();
}

const handError=() => {
    console.log ("Sin conexión");
}
const dataUserProgCohort = ()=>{
    const users= JSON.parse(event.target.responseText);
    const courses = ['intro'];
    const addProgress = ()=>{
        const Progress = JSON.parse;
        computeUserStats (users, progress, courses);
    }
    getJson(url progress, addProgress);
}
getJson(url cohort, dataUserProgCohort);
getJson(url users, dataUserProgCohort);*/

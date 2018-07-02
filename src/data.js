//import { readSync } from "fs";
//import { totalmem } from "os";

//FUNCION VINCULA USER.JSON CON PROGRESS.JSON
//open: ABRE CONEXION
//GET: obtener información
//TRUE :SINCRONO
//SOLICITAR CUALQUIER TIPO DE ARCHIVO
//4:Requerimiento finalizado,respuesta lista
//200:conexion correcta /OK
//RESPUESTA FINALIZADA Y CORRECTA
//responseText: retorna respuesta como texto
//da  un array del archivo users.json

const listCohorts = (idCohort) => {
    selectCohorts.innerHTML = "";
    let cohortsJsonVariable = [];
    //const traerJson = () => {
        fetch('../data/cohorts.json')
            .then(res => res.json())
            .then(cohortsJson => {

                cohortsJson.map((elementCohorts) => {
                     console.log(elementCohorts);}
                    /*let idCohort = elementCohorts.id;
                    selectCohorts.innerHTML += "<option value='" + idCohort + "'>" + idCohort + "</option>";
                    cohortsJsonVariable.push(elementCohorts);
                    return cohortsJsonVariable;

                });
            })
    //}
    //traerJson();
}*/
/*url users = ".../data/cohorts/lim-2018-03-pre-core-pw/users.json";
url Cohorts = ".../data/cohorts.json";
url progress = ".../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

const id= "lim-2018-03-pre-core-pw"

const listCohorts = (id.Cohort)
fetch{(url users)
.then(res=>res json())
.then(res
}


const asc = dataUsers.sort((users,orderby)=>{
    if (users.name>obj2.name) {
        return 1        
    } else if (users.name<obj2.name) {
        return -1
    }
    return 0
})
console.log(asc);

//***************CONEXION PARA OBTENER EL USER.JSON**********************************************/

/*let xmlhttp = new XMLHttpRequest();
let url = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
xmlhttp.open("GET", url, true);
xmlhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let arrUsers = JSON.parse(this.responseText);

        //***************CONEXION PARA OBTENER EL PROGRESS.JSON**********************************************/

        /*let xmlhttp2 = new XMLHttpRequest();
        var url2 = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";
        xmlhttp2.open("GET", url2, true);
        xmlhttp2.onload = function (event) {
            let ObjectProgress = JSON.parse(this.responseText);


            //***************CONEXION PARA OBTENER LOS COHORTS.JSON**********************************************/

            /*let xmlhttp3 = new XMLHttpRequest();
            var url3 = "../data/cohorts.json";
            xmlhttp3.open("GET", url3, true);
            xmlhttp3.onload = function (event) {
                let arrCohorts = JSON.parse(this.responseText);
        for (const iteratorCohorts of arrCohorts) {
                
                    let body = document.getElementById('tbody');
    
                    for (const iteratorUsers of arrUsers) {
                        if (iteratorCohorts.id === 'lim-2018-03-pre-core-pw') {
                       
                            if (iteratorUsers.role === 'student') {
                                console.log(iteratorCohorts.id + ' ' + iteratorUsers.role + ' ' + iteratorUsers.name + ' ' + iteratorCohorts.start);
                                body.innerHTML += `
                              <tr>
                                <td>${ iteratorUsers.name}</td>
                                <td>${ iteratorUsers.signupCohort}</td>
                                <td>${ iteratorUsers.timezone}</td>
                            </tr>
                                  `
                            }
                        }
                    }
                }
            };
            xmlhttp3.send();
        };
        //********************ENVIA REQUEST AL SERVIDOR PROGRESS*******************************
        xmlhttp2.send();
    }
};
//********************ENVIA REQUEST AL SERVIDOR USERS*******************************
xmlhttp.send();

//ComputeUserStats(users, progress, courses)//Recorre users calcula progreso de cada uno. Debe devolver array de alumnos con su stats

/*window.computeUserStats(user,progress,courses)=>{
    function computeUserStats(){

    try{

    }
    catch(error){
    console.log(error);
    }
}

//window.computeUserStats (user, progress, courses) => {
    /*const list = users.map(userWithStats =>{
        try{
            userWithStats.stats={
                percent: progress[userWithStats.id].intro.percent;
                exercises:
                const completedExercises = (progress, courses) =>{
                    const count = 0;
                    courses.map(=>{
                        const valorUnit = Object.keys(progress[course].Units);
                        valorUnit.map(nameUnit => {
                            const valorNameUnit = Object.keys(progress[course].Units[nameUnit].parts);
                            valorNameUnit.map(nameParts=>{
                                const ValorExercises=progress[course].Units[nameUnit].parts.[nameParts;
                                if(ValorExercises.HasOwnProperty('exercises'){
                                    const ValorExercises= Object.keys(ValorExercises.exercises);
                                    ValorExercises.map(valorCompleted=>{
                                        const valorCompleted=ValorExercises.exercises[valorCompleted].completed;
                                        if(valorCompleted==1){
                                            count ++
                                        }
                                    })
                                })]
                            })
                        })
                    })
                }
                    total:
                    completed:
                    percent:
                reads:
                    total
                    completed
                    percent
                    
                quizzes
                    total
                    completed
                    percent
                    scoreSum
                    scoreAvg 
                    
            }
        }
    })
    catch{
        return{}
    }
    return list;
}*/
export const listStudyPrograms = () =>{
    return fetch("http://localhost:8080/study_programs");
};

export const deleteStudyProgram  = (index)=> {
    return fetch("http://localhost:8080/study_programs/"+index, {
        method:"DELETE"
    });
};

export const postNewStudyProgram = (name) => {
    return fetch("http://localhost:8080/study_programs/", {
        method: 'POST',
        body: JSON.stringify(name),
        headers:{
            'Content-Type':"application/json"
        }
    });

};

export const patchStudyProgramDetails = (student) => {
    return fetch("http://localhost:8080/study_programs/" + student.id, {
        method: 'PATCH',
        body: JSON.stringify(student),
        headers:{
            'Content-Type':"application/json"
        }
    });

};
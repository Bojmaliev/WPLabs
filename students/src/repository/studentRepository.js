export const listStudents = () => {
    return fetch('http://localhost:8080/students/all');
};

export const getStudentDetails = (index) => {
    return fetch("http://localhost:8080/students/"+index);
};

export const patchStudentDetails = (student) => {
    return fetch("http://localhost:8080/students/" + student.index, {
        method: 'PATCH',
        body: JSON.stringify(student),
        headers:{
            'Content-Type':"application/json"
        }
    });

};
export const postNewStudent = (student) => {
    return fetch("http://localhost:8080/students/", {
        method: 'POST',
        body: JSON.stringify(student),
        headers:{
            'Content-Type':"application/json"
        }
    });

};
export const deleteStudent  = (index)=> {
    return fetch("http://localhost:8080/students/"+index, {
        method:"DELETE"
    });
};


export const checkStatus = (res)=> {
    if(res.status  < 200 || res.status > 299){
        if(res.status == 500)throw new Error("Server not responding");
        if(res.status == 404)throw new Error("Not found");
        if(res.status == 400)throw new Error("Validation failed");
        throw new Error("Something went wrong.");
    }
    return res;
};
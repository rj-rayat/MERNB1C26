// const bio = {
//     name: "Ahakam",
//     study: "Eleven",
//     guardian: {
//         father: "Jahid Hossain",
//         father_bio: {
//             skill: "Programmer", 
//             address: "Feni",
//         },
//         mother: "Sweety Akter",
//         mother_bio : {
//             skill: "Homeworker", 
//             address: "Feni",
//         }
//     },

//     status: () =>{return "He lived here"},
//     marks: [34, 56, 78]
// }

// console.log(bio.guardian.father_bio.skill);
// console.log(bio.guardian.mother_bio.skill);
// console.log(bio.status());

// console.log(bio.marks);


const bio = {
    name: "Mridula",
    study:"Honurs",
    guardian: {
        father_name: "Jakir Hossain",
        others:{
            hobby:"Mridula",
            skill:"Business Man"
        },
        mother_name: "Shamsun Nahar",
        mothers_skill:{
            hobby: "Cooking",
            skill: 0
        }
    },

    marks : [34, 56, 78],
    status : () => {return "Status is alive"},


}

// console.log(bio.guardian.mothers_skill.skill)
// console.log(bio.status())

const bio2 = {
    name: 'rayat',
    2:50,
    'is Married' : true,
    family:{
        khandan: 'Raja',
        prodhan: 'Raja Mia'
    }
}


console.log(bio2.family?.mother)

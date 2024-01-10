//code-1
function fibona(){
    var arr=[0,1];
    for(i=2;i<=6;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr;
}

var result=fibona()
console.log(result);


//code-2
function passwordcheck(str){
    if(str.length >6){
        if(str.length<14){
            if(!str[0].isupperCase){   //uppercase problem
                    if((str.match(/[@]/g).length==1)){
                        console.log("Password is valid")
                    }
                    else{
                        console.log("Password is not valid {@}")
                    }
            }
            else{
                console.log("Password is not valid {Uppercase}")
            }
        }
        else{
            console.log("Password is not valid {len max 14}")
        }
    }else{
        console.log("Password is not valid {len min 6}")
    }

}
console.log(passwordcheck("Test@123"));  //output: Password is valid
console.log(passwordcheck("Test23"));   //output: Password is not valid {len min 6}
console.log(passwordcheck("Test@23")); //output: Password is valid


//code-3

//code-4

const data=[
    {name:'John',age:30},
    {name:'Alice',age:25},
    {name:'Bob',age:35}
]
var sortobjet=data.sort((a,b)=>{return a.age-b.age})
console.log(sortobjet);

// output: 
// 0: {name: 'Alice', age: 25}
// 1: {name: 'John', age: 30}
// 2: {name: 'Bob', age: 35}

//code-5

var abc=[1,2,3,4,5,6,7,8,9]
var cde=[]
var abcd=[]

//push
for(let i=0;i<abc.length;i++){
    if(cde.length<3){
        cde.push(abc[i])
    }
    else if(cde.length==3){
        abcd.push(cde);   //subarray push in main array (abcd)
        cde.length=0;    //clear array {[1,2,3] clear [4,5,6] clear [7,8,9]}
        cde.push(abc[i]) 
    }
}

console.log(abcd)


//code-6

let ar=[2,3,10[12,4[100,99],4],[3,2,99],0]
var fl=ar.flat().sort((a,b)=>{a-b})
console.log(fl);
console.log(ar[-1]) //last index print max number

//code-7

var emp=[
    {
        firstname:"Dharmik",
        lastname:"Kachhadiya",
        mobile:101,
        email:"dharmik@123",
        salary:45000,
        address:{
            line1:1102,
            line2:"Apple",
            area:"mota varachha",
            pincode:1000,
            city:"Surat",
            state:"Gujarat",
        }
    },
    {
        firstname:"Nikunj",
        lastname:"Sonigara",
        mobile:102,
        email:"nikunj@123",
        salary:46000,
        address:{
            line1:1502,
            line2:"silvasa",
            area:"yogichok",
            pincode:1001,
            city:"Surat",
            state:"Gujarat",
        }
    },
    {
        firstname:"Rushik",
        lastname:"Soni",
        mobile:103,
        email:"rushik@123",
        salary:44000,
        address:{
            line1:402,
            line2:"star",
            area:"amroli",
            pincode:1002,
            city:"Surat",
            state:"Gujarat",
        }
    }   
]

//display all emp data
console.log(emp); 
//output:
// 0: {firstname: 'Dharmik', lastname: 'Kachhadiya', mobile: 101, email: 'dharmik@123', salary: 45000, …}
// 1: {firstname: 'Nikunj', lastname: 'Sonigara', mobile: 102, email: 'nikunj@123', salary: 46000, …}
// 2: {firstname: 'Rushik', lastname: 'Soni', mobile: 103, email: 'rushik@123', salary: 44000, …}

const [emp1,emp2,emp3]=emp;

//update data
emp1.firstname="Dharmik2003"
console.log(emp1)
//output:{firstname: 'Dharmik2003', lastname: 'Kachhadiya', mobile: 101, email: 'dharmik@123', salary: 45000, …}


//delete data
delete emp[2]
console.log(emp);
//output:
// 0: {firstname: 'Dharmik', lastname: 'Kachhadiya', mobile: 101, email: 'dharmik@123', salary: 45000, …}
// 1: {firstname: 'Nikunj', lastname: 'Sonigara', mobile: 102, email: 'nikunj@123', salary: 46000, …}


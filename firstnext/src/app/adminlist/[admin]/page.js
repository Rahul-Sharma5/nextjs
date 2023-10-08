
"use client"
export default function Admin_login({params}){
    return(
        <div>
            <h1>Admin Details</h1>
            <h3>Name : {params.admin}</h3>
        </div>
    )
}
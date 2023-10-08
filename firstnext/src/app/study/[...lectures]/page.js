"use client"
export default function Lecture({params}) {
    console.log(params)
    return (
        <div>
            <h1>Day of College {params.lectures[0]}</h1>
            <h3>Lecture No : {params.lectures[1]}</h3>
        </div>
    )
}
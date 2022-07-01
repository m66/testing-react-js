import { useEffect, useState } from "react";

function DataFetching() {
    // const [category, setCategory] = useState("");
    const [datas, setDatas] = useState();
    const categories = [
        "posts",
        "comments",
        "albums",
        "photos",
        "todos",
        "users"
    ]
    // if(!datas) return <div>loading...</div>

    const onSubmit = (item) => {
        console.log(item)
        fetch(`https://jsonplaceholder.typicode.com/${item}`)
            .then(res => res.json())
            .then(data => {setDatas(data); console.log(data)})
            .catch(err => console.log(err))
    }

    return ( 
        <div style={{display: 'flex'}}>
            <ul>
                {
                    categories.map(item => <li onClick={() => onSubmit(item)}>{item}</li>)
                }
            </ul>
            <ul>
                {
                    datas ? datas.map(data => <li key={data?.id}>{data?.title}</li>) : "Not selcted data yet"
                }
            </ul>
        </div>
     );
}

export default DataFetching;
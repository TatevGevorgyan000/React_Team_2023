function ListReduce({list}) {
    return(
        <div>
            <h2>Our List</h2>
            <ul>
                {list ? (list.map((elem,index) => {
                    return <li key={index}>{typeof(elem)=='number' ? <h1>{list.reduce((a, b) => a + b)}</h1> : 'string'}</li>
                })) : null}
            </ul>
            <hr/>
        </div>
    )
}

function ListRender({data}) {
    return(
        <div>
            {data.map((el,ind)=> {
                return (
                <h3 key={el.id}>"NAME": {el.name} "AGE": {el.age}</h3> 
                )
            })}
        </div>
    )
}

function FilterComponent({list,options}) {
    const myFu = () => {
        return list.filter(item => item.gender === options.gender)
        .map(el => {
            return el.name
        })
    }
    console.log(myFu(),'myFu()');
    return(
        <div>
            <pre>{JSON.stringify(myFu(),null,1)}</pre>
        </div>
    )
}
function SortComponent({list, options}) {
    const myFunction = () => {
        return list.sort((a,b)=> {
            if (options.type === "z-a") {
                return a[options.params] - b[options.params]
            }else{
                return b[options.params] - a[options.params]
            }
        })
    }
    let result = myFunction()
    return(
        <div><pre>{JSON.stringify(result,null,1)}</pre></div>
    )
}

function App() {
    let arr = [1,2,5,7,'t'];
    let obj = [
        {id:1, name:'Tatev', age:22, gender:"female", selary: 400_000},
        {id:2, name:'Mary', age:28, gender:"female", selary: 450_000},
        {id:3, name:'Lia', age:32, gender:"female", selary: 330_000},
        {id:4, name:'Narek', age:19, gender:"male", selary: 470_000},
        {id:5, name:'Suren', age:29, gender:"male", selary: 70_000},

    ]
    return(
        <div>
            <FilterComponent list={obj} options={{gender: 'male' , type: "string"}}/>
            <ListReduce list={arr} />
            <ListReduce />
            <ListRender data={obj}/>
            <SortComponent list={obj} options={{params: "age", type: "z-a"}}/>
        </div>
    )
}


















let container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />)
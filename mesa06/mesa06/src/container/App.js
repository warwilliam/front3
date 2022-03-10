import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";

const list1=[
    {
        id:"1",
        nome:"Nicolas",
        estaNaLista:true,
        tarefa:"batata-frita"
    },

    {
        id:"2",
        nome:"Pedro",
        estaNaLista:false,
        tarefa:"pizza"
    },

    {
        id:"1",
        nome:"Carol",
        estaNaLista:true,
        tarefa:"bebidas"
    },

]

function App() {
  return (
    
    <div className="App">
    <h3>Convidado:</h3>
    {
        list1.map((item)=>(<ClassComponent 
        key={item.id}
        nome={item.nome} 
        estaNaLista={item.estaNaLista}/>
        ))
    }
    <h3>Tarefas: </h3>
    {
        list1.map((item)=>(
        <FunctionComponent
         key={item.id}
         nome={item.nome}
         tarefa={item.tarefa} />
            ))
    }
    </div>
  );
}

export default App;

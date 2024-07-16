

const App = () => {
  let marks=70;
  return (
    /*<div>
      <h1 style={
        {color:'green'}
      }>I am learning react</h1>
      <input placeholder="my name"/>
      <h1>{2+2}</h1>
      <button onClick={()=>alert("Hello")}>Submit</button>
      <button>Learn more</button>
    </div>

    <div>
      {
        marks>80?
        <h1>Brilliant Result</h1>
        :
        <h1>Average Result</h1>
      }
    </div>*/
    <div>
      {(()=>{
        if(marks>80 && marks<100){
          return <h1>A+</h1>
        }
         else if(marks>70 && marks<80){
          return <h1>A</h1>
        }
        else if(marks>60 && marks<70){
          return <h1>A-</h1>
        }
        else if(marks>50 && marks<60){
          return <h1>B</h1>
        }
        else if(marks>40 && marks<50){
          return <h1>D</h1>
        }
        else{
        return <h1>F</h1>
        }
      })}
    </div>

  );
};

export default App;

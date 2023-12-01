import React from "react";
import { useForm,useWatch,FormProvider } from "react-hook-form";
import './App.css';


const MyForm=()=>{
  const methods=useForm();
  const {handleSubmit}=methods;

const watchedFields=useWatch({
  control:methods.control,
  defaultValue:"default values",
  name:["inputA","inputB"],
});

const onSubmit=(data)=>{
  console.log(data);
};

return(
  <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="inputA">Input A</label>
      <input {...methods.register("inputA")}/>
    <label htmlFor="inputB">Input B</label>
      <input {...methods.register("inputB")}/>

      <p>Watched Values:</p>
      <ul>
        {watchedFields.map((value,index)=>(
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button type="submit">Submit</button>
  </form>
);
};
const App=()=>{
  const methods=useForm();
  return(
    <FormProvider {...methods}>
      <MyForm/>
    </FormProvider>
  );
};
export default App;
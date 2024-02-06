import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, getValues, formState: {errors} } = useForm();

  function submit(values) {
    console.log(values);
  }

  // console.log(getValues());

  return (
    <div className="d-flex flex-row justify-content-center align-items-center" 
    style={{backgroundColor: "#fefefe", height: "100vh", width: "100%"}}> 

    <form onSubmit={handleSubmit(submit)}>
      <div className="d-flex flex-column mb-20">
        <label className="mb-5" htmlFor="age">Age</label>
        <input {...register("age" ,{
          valueAsNumber: true
        })} id="age" type="number" />
      </div>
      <button className="btn btn-primary">Save</button>
      {/* {errors?.age && <p>{errors.age.message}</p>} */}
    </form>
    </div>
  )
}
export default App

import FormikForm from "./component/formik"
import Header from "./component/header";

/**
 * 
 * @returns 
 */
function App() {

  return (
    <div className="p-4 w-[1200px] mx-auto">
      <Header />
      <FormikForm />
    </div>
  )
}

export default App

// import FormikForm from "./component/formik"
// import Header from "./component/header";

// /**
//  * 
//  * @returns 
//  */
// function App() {

//   return (
//     <div className="p-4 w-[1200px] mx-auto">
//       <Header />
//       <FormikForm />
//     </div>
//   )
// }

// export default App


// App.js
import React from 'react';
import withLogging from './hoc/useHoc';
import Button from './hoc/button';

// Create the new, enhanced component
const LoggedButton = withLogging(Button);

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      aaa
      <LoggedButton text="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;

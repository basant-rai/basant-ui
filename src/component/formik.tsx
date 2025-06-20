import { useFormik } from "formik";
import { Button, FormInput, FormTextArea } from "simple_ui_elements"
import { LoginSchema, type LoginFormValues } from "../validation/auth";
import { toFormikValidationSchema } from "zod-formik-adapter"
/**
 * 
 * @returns 
 */
const FormikForm = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
      description: ""
    },
    validationSchema: toFormikValidationSchema(LoginSchema),    onSubmit: async (values, actions) => {
      console.log(values)
    }
  })
  console.log(formik.errors)
  return (
    <div className="border p-4 rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          type="email"
          placeholder="m@example.com"
          {...formik.getFieldProps("email")}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : undefined
          }
          disabled={formik.isSubmitting}
          label="Email"
          required
        />
        <FormTextArea
          id="description"
          placeholder="Enter description here..."
          {...formik.getFieldProps("description")}
          error={formik.errors?.description}
          disabled={formik.isSubmitting}
          label="Description"
          required
        />
        {/* <FormSelect
          name={field.name}
          items={options}
          value={options.find((opt) => opt.value === values.year) || ""}
          onSelect={(option) => setFieldValue("year", option?.value || "")}
          placeholder="Choose an option"
        /> */}
        <Button
          color={"primary"}
          size={"md"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default FormikForm
//
// export function FormikForm (){
//  const formik = useFormik<LoginFormValues>({
//     initialValues: {
//       email: "",
//       description:"",
//       year:""
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, actions) => {
//     }
//  })
//  return(
//   <form onSubmit={formik.handleSubmit}>
//     <FormInput
//       id="email"
//       type="email"
//       placeholder="m@example.com"
//       {...formik.getFieldProps("email")}
//       error={
//         formik.touched.email && formik.errors.email
//           ? formik.errors.email
//           : undefined
//       }
//       disabled={formik.isSubmitting}
//       label="Email"
//       required
//     />
//     <FormTextAreaInput
//       id="description"
//       placeholder="Enter description here..."
//       {...formik.getFieldProps("description")}
//       error={formik.errors?.description}
//       disabled={isSubmitting}
//       label="Description"
//       required
//     />
//     <FormSelect
//       name={field.name}
//       items={options}
//       value={options.find((opt) => opt.value === values.year) || ""}
//       onSelect={(option) => setFieldValue("year", option?.value || "")}
//       placeholder="Choose an option"
//      />
//     <Button
//       color={"primary"}
//       size={"md"}
//       type="submit
//     >
//       Submit
//     </Button>
//   </form>
//  )
// }


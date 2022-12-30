import { Formik, useFormik } from "formik";
import Joi from "joi";
import FormikUsingJoi from "../utils/formikUsingJoi";
import { useState } from "react";
import PageHeader from "./common/pageHeader";
import Input from "./input";
import { createCard } from "./services/cardsServices";
import { useNavigate } from "react-router-dom";
const CreateCard = () => {
  const navigate = useNavigate();
  const [errorApiRequest, setErrorApiRequest] = useState("");
  const form = useFormik({
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: FormikUsingJoi({
      bizName: Joi.string().min(2).max(255).required(),
      bizDescription: Joi.string().min(2).max(1024).required(),
      bizAddress: Joi.string().min(2).max(400).required(),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/),
      bizImage: Joi.string().min(11).max(1024),
    }),
    onSubmit: async (values) => {
      // console.log("this is values:", values);
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        await createCard(body);
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setErrorApiRequest(response.data);
        }
      }
    },
  });

  //   const errors = {};
  //   if (values.bizName === "") {
  //     errors.bizName = "bizName cant be empty";
  //   } else if (!values.bizName.endsWith(".com") && values.bizName.length > 4) {
  //     errors.bizName = `"bizName must end with ".com"`;
  //   } else if (values.bizName.length < 3) {
  //     errors.bizName = "bizName cant less then 2 chars";
  //   }
  //   //   else if(!values.email.includes(".com")){
  //   //     errors.email = "email cant be without com"
  //   //   }
  //   return errors;

  console.log(Object.keys(form.errors));
  return (
    <>
      <PageHeader title={<h1>create card page</h1>} />
      <p>fill the form to create a card</p>
      <form onSubmit={form.handleSubmit}>
        {errorApiRequest && (
          <div className="alert alert-danger">{errorApiRequest}</div>
        )}
        <Input
          onChange={form.handleChange}
          error={form.errors.bizName}
          name="biz-name"
          type="text"
          id="biz-name"
          {...form.getFieldProps("bizName")}
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.bizDescription}
          name="bizDescription"
          type="text"
          id="bizDescription"
          {...form.getFieldProps("bizDescription")}
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.bizAddress}
          name="bizAddress"
          type="text"
          id="bizAddress"
          {...form.getFieldProps("bizAddress")}
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.bizPhone}
          name="bizPhone"
          type="text"
          id="bizPhone"
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.bizImage}
          name="bizImage"
          type="text"
          id="bizImage"
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={Object.keys(form.errors).length}
        >
          create card
        </button>
      </form>
    </>
  );
};
export default CreateCard;
// {
//     bizName: Joi.string().min(2).max(255).required(),
//     bizDescription: Joi.string().min(2).max(1024).required(),
//     bizAddress: Joi.string().min(2).max(400).required(),
//     bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
//     bizImage: Joi.string().min(11).max(1024),
//   }

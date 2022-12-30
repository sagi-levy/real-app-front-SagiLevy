import { Formik, useFormik } from "formik";
import Joi from "joi";
import FormikUsingJoi from "../utils/formikUsingJoi";
import { useState } from "react";
import PageHeader from "./common/pageHeader";
import Input from "./input";
import { updateCard } from "./services/cardsServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useCard from "../hooks/UseCard";
const EditCard = () => {
  const navigate = useNavigate();
  // useEffect(() => {}, []);
  const { id } = useParams();
  console.log(id);
  const card = useCard(id);
  console.log(card);
  useEffect(() => {
    if (!card) {
      return;
    }
    const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;
    form.setValues({ bizName, bizDescription, bizAddress, bizPhone, bizImage });
  }, [card]);
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
        console.log(values);
        if (bizImage) {
          body.bizImage = bizImage;
        }

        await updateCard(id, values);
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
      <PageHeader title={<h1>edit card page</h1>} />
      <p>you can edit the card by savig the new valus</p>
      <form onSubmit={form.handleSubmit}>
        {errorApiRequest && (
          <div className="alert alert-danger">{errorApiRequest}</div>
        )}
        <Input
          onChange={form.handleChange}
          error={form.errors.bizName}
          name="bizName"
          type="text"
          id="bizName"
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
          {...form.getFieldProps("bizPhone")}
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.bizImage}
          name="bizImage"
          type="text"
          id="bizImage"
          {...form.getFieldProps("bizImage")}
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={Object.keys(form.errors).length}
        >
          save
        </button>
      </form>
    </>
  );
};
export default EditCard;
// {
//     bizName: Joi.string().min(2).max(255).required(),
//     bizDescription: Joi.string().min(2).max(1024).required(),
//     bizAddress: Joi.string().min(2).max(400).required(),
//     bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
//     bizImage: Joi.string().min(11).max(1024),
//   }

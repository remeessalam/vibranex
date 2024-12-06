import React, { useContext } from "react";
import SubHeading from "../SubHeading";
import bgImg from "../../assets/images/landingpage/landing-contactus.webp";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";

const ContactForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      id="contact"
      className="py-[5rem] bg-cover bg-[100%_40%] relative min-h-[40rem] flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-secondary/80"></div>
      <div className="wrapper relative z-10 w-full">
        <div className="flex flex-col items-center gap-5">
          <SubHeading heading="Contact Us" />
          <h2
            data-aos="fade-up"
            className="heading-2 max-w-[60rem] mx-auto font-light text-center"
          >
            Connect With Us Today!
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          data-aos="fade-up"
          className="flex flex-col max-w-xl mx-auto gap-4 mt-5"
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Subject"
              className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              rows="3"
              placeholder="Message"
              className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="primary-btn mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

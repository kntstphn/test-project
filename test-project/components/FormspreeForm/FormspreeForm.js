import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm("mvonedqd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className="max-w-5xl mx-auto my-5" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <Input
        id="email"
        type="email"
        name="email"
        style={{ border: "1px solid" }}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="border-solid border-slate-400 p-1 hover:border-slate-500"
        id="message"
        name="message"
        style={{ border: "1px solid" }}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

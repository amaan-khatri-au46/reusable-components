/** @format */

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import type { CommonProps } from "@/@types/common";
import ActionLink from "@/components/shared/ActionLink";
import PasswordInput from "@/components/shared/PasswordInput";
import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import { FormItem, FormContainer } from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import useAuth from "@/utils/hooks/useAuth";
import useTimeOutMessage from "@/utils/hooks/useTimeOutMessage";

interface SignInFormProps extends CommonProps {
  disableSubmit?: boolean;
  forgotPasswordUrl?: string;
  signUpUrl?: string;
}

type SignInFormSchema = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(50).required("Please enter your password"),
});

const SignInForm = (props: SignInFormProps) => {
  const {
    disableSubmit = false,
    className,
    forgotPasswordUrl = "/forgot-password",
    // signUpUrl = '/sign-up',
  } = props;

  const [message, setMessage] = useTimeOutMessage();

  const { signIn } = useAuth();

  // const onSignIn = async (
  //     values: SignInFormSchema,
  //     setSubmitting: (isSubmitting: boolean) => void
  // ) => {
  //     const { email, password } = values
  //     setSubmitting(true)

  //     const result = await signIn({ email, password })

  //     if (result?.status === 'failed') {
  //         setMessage(result.message)
  //     }

  //     setSubmitting(false)
  // }

  const onSignIn = async (
    values: SignInFormSchema,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    // const { email, password } = values

    // const encrptEmail = encrypt(email)
    // const encryptPassword = encrypt(password)

    // const payload: any = {
    //     data: {
    //         encrptEmail,
    //         encryptPassword,
    //     },
    // };

    const encrptPayload: any = { data: values };

    setSubmitting(true);

    const result = await signIn(encrptPayload);

    if (result?.status === "failed") {
      setMessage(result.message);
    }

    setSubmitting(false);
  };

  return (
    <div className={className}>
      {message && (
        <Alert showIcon className="" type="danger">
          <>{message}</>
        </Alert>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values, "here Is The Updated Values ");
          if (!disableSubmit) {
            onSignIn(values, setSubmitting);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <FormContainer>
              <FormItem
                label="Email"
                size="sm"
                invalid={(errors.email && touched.email) as boolean}
                errorMessage={errors.email}
              >
                <Field
                  type="text"
                  autoComplete="off"
                  name="email"
                  size="sm"
                  placeholder="Email"
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Password"
                size="sm"
                invalid={(errors.password && touched.password) as boolean}
                errorMessage={errors.password}
              >
                <Field
                  autoComplete="off"
                  name="password"
                  size="sm"
                  placeholder="Password"
                  component={PasswordInput}
                />
              </FormItem>
              <Button
                block
                loading={isSubmitting}
                variant="solid"
                size="sm"
                type="submit"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
              <div className="mt-4 text-center">
                <ActionLink to={forgotPasswordUrl}>Forgot Password?</ActionLink>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;

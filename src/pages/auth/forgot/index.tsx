import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { ReactNode } from "react";

function ForgotPage() {
  return <ForgotPasswordForm />;
}

ForgotPage.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default ForgotPage;

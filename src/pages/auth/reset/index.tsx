import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { ReactNode } from "react";

function ResetPage() {
  return <ResetPasswordForm />;
}

ResetPage.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default ResetPage;

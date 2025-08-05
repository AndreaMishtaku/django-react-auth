import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/api/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form submitted:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex min-h-svh w-screen items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                    />
                    {errors.first_name && (
                      <span className="text-red-500 text-sm">
                        {errors.first_name.message as string}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.last_name && (
                      <span className="text-red-500 text-sm">
                        {errors.last_name.message as string}
                      </span>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message as string}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                    {errors.username && (
                      <span className="text-red-500 text-sm">
                        {errors.username.message as string}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-500 text-sm">
                        {errors.password.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Sign up
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  <a href="/login" className="underline underline-offset-4">
                    Login
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

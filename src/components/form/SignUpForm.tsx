"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleLoginButton from "@/components/ui/GoogleSignInBtn";
import GithubSignInBtn from "@/components/ui/GithubSignInBtn";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(50),
    Email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    Password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const SignUpForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      Email: "",
      Password: "",
      confirmPassword: "",
    },
  });

  //!For NextAuth Sign In
  const session = useSession();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.username,
        email: values.Email,
        password: values.Password,
      }),
    });
    if (response.ok) {
      router.push("/signIn");
    } else {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Call Marc.",
        variant: "destructive",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-black"> Username </FormLabel>
                <FormControl>
                  <Input placeholder="Johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-black"> Email </FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-black"> Password </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-black">
                  {" "}
                  Re-enter your password{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit" variant="secondary">
          Sign up
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        <p className="dark:text-black">or</p>
      </div>
      <div className="flex-col justify-center">
        <GoogleLoginButton>Sign up with Google</GoogleLoginButton>
        <GithubSignInBtn>Sign up with Github</GithubSignInBtn>
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you already have an account, please&nbsp;
        <Link className="text-blue-500  text-sm underline" href="/signIn">
          Sign in.
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;

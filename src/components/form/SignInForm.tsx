"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleLoginButton from "@/components/ui/GoogleSignInBtn";
import GithubLoginButton from "@/components/ui/GithubSignInBtn";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const FormSchema = z.object({
  Email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  Password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  //!For NextAuth Sign In
  const session = useSession();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.Email,
      password: values.Password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Call Marc.",
        variant: "destructive",
      });
    } else {
      router.refresh();
      router.push("/admin");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
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
        </div>
        <Button className="w-full mt-6" type="submit" variant="secondary">
          Sign in
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        <p className="dark:text-black">or</p>
      </div>
      <div className="flex-col justify-center">
        <GoogleLoginButton>Sign in with Google</GoogleLoginButton>
        <GithubLoginButton>Sign in with GitHub</GithubLoginButton>
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 underline text-sm" href="/signUp">
          Sign up.
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;

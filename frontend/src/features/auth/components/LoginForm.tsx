import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../types/AuthSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "@/components/shared/AppLogo";
import { supabase } from "@/utils/supabase";
import { toast } from "sonner";
import { AuthError } from "@supabase/supabase-js";

export const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      const { data: newUser, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error && error.message) {
        return toast.error(error.message);
      }
      toast.success("Logged in successfully");
      navigate("/app");
      console.log("newUser", newUser);
    } catch (error) {
      if (error instanceof AuthError) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      } else {
        toast.error("Something went worng while logging in");
      }
      console.log("login user error ", error);
    }
  }

  return (
    <div>
      <Link to="/">
        <AppLogo />
      </Link>

      <div className="my-10">
        <h2 className="font-bold text-3xl">Sign in to your account</h2>
        <div className="flex items-center gap-2 mt-2">
          Don&apos; have an account?
          <Button variant="ghost" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
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

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg" className="w-full h-12">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

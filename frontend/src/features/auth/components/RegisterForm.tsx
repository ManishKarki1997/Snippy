import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "../types/AuthSchema";
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

export const RegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error && error.message) {
        return toast.error(error.message);
      }
      toast.success("Registered successfully. Please sign in to get started");
      form.reset();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      if (error instanceof AuthError) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      } else {
        toast.error("Something went worng while registering");
      }
    }
  }

  return (
    <div>
      <Link to="/">
        <AppLogo />
      </Link>

      <div className="my-10">
        <h2 className="font-bold text-3xl">Register for an account account</h2>
        <div className="flex items-center gap-2 mt-2">
          Already have an account?
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Login
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Retype your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg" className="w-full h-12">
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

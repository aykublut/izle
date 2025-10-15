"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import useStore from "@/store/store";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "firstName is required"),
  lastName: z.string().min(1, "lastName is required"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const { texts } = useStore();
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok === false) {
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};
        setError(result.message || "Registration failed");
      }
      if (response.ok === true) {
        setSuccess("Success");
        setTimeout(() => {
          router.push("/login");
        }, 4000);
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-25  p-4">
      <div className="bg-slate-800 shadow-md shadow-white/40 rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {texts.auth.registerButton}
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>{texts.auth.email}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={texts.auth.emailPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>{texts.auth.username}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={texts.auth.usernamePlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>{texts.auth.password}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={texts.auth.passwordPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>{texts.auth.firstname}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={texts.auth.firstnamePlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>{texts.auth.lastname}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={texts.auth.lastnamePlaceholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row items-center justify-between">
              <Button
                type="submit"
                variant="outline"
                className="cursor-pointer hover:bg-white shadow-sm hover:shadow-white/10"
              >
                {texts.auth.registerButton}
              </Button>

              <Link
                className="font-bold text-sm text-blue-500 hover:text-blue-800 hover:border-b hover:border-blue-800"
                href="/login"
              >
                {texts.auth.loginButton}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;

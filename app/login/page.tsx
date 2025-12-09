'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { loginSchema, LoginSchema } from '@/lib/schemas';

export default function LoginPage() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: LoginSchema) {
    console.log('LOGIN:', values);
  }

  return (
    <div className="max-w-sm mx-auto py-10 space-y-6">
      {/* Branding Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Vardha</h1>
        <p className="text-muted-foreground">
          Welcome back to Vardha! Log in to continue where you left off.
        </p>
      </div>

      {/* Main Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="you@example.com" />
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
                  <Input {...field} type="password" placeholder="••••••" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot Password link */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>

      {/* Social Auth Section */}
      <div className="space-y-3">
        <p className="text-center text-sm text-muted-foreground">
          Or continue with
        </p>

        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <FcGoogle className="mr-2" /> Login with Google
          </Button>

          <Button variant="outline" className="w-full">
            <FaGithub className="mr-2" /> Login with GitHub
          </Button>

          <Button variant="outline" className="w-full">
            <FaApple className="mr-2" /> Login with Apple
          </Button>
        </div>
      </div>

      {/* Register Link */}
      <p className="text-center text-sm mt-3">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
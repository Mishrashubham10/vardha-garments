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
import { FaGithub, FaApple } from 'react-icons/fa';
import { registerSchema, RegisterSchema } from '@/lib/schemas';

export default function RegisterPage() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: RegisterSchema) {
    console.log('REGISTER:', values);
  }

  return (
    <div className="max-w-sm mx-auto py-10 space-y-6">
      {/* Branding Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Vardha</h1>
        <p className="text-muted-foreground">
          Join Vardha today. Create an account and start your journey.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>

      {/* Social Auth Section */}
      <div className="space-y-3">
        <p className="text-center text-sm text-muted-foreground">
          Or sign up with
        </p>

        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <FcGoogle className="mr-2" /> Continue with Google
          </Button>

          <Button variant="outline" className="w-full">
            <FaGithub className="mr-2" /> Continue with GitHub
          </Button>

          <Button variant="outline" className="w-full">
            <FaApple className="mr-2" /> Continue with Apple
          </Button>
        </div>
      </div>

      {/* Login Redirect */}
      <p className="text-center text-sm mt-3">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
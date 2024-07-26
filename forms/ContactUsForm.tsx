"use client";
import { FormEvent } from "react";
import { Label } from "@/components/UI/label";
import { Input } from "@/components/UI/input";
import { cn } from "@/utils/cn";
import toast from "react-hot-toast";

interface ContactUsFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  isLoading: boolean;
  setFirstName: (e: any) => void;
  setLastName: (e: any) => void;
  setEmail: (e: any) => void;
  setMessage: (e: any) => void;
  submitHandler: any;
}

export function ContactUsForm({
  firstName,
  lastName,
  email,
  message,
  isLoading,
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
  submitHandler,
}: ContactUsFormInterface) {
  return (
    <div
      className="mx-auto rounded-xl md:rounded-2xl p-4 md:p-0 bg-white dark:bg-black overflow-auto"
      style={{ width: "500px", maxWidth: "85vw", maxHeight: "85vh" }}
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Hit us up!
      </h2>
      <p className="text-neutral-600 text-sm max-w-xs mt-2 dark:text-neutral-300 text-center mt-2 mr-auto ml-auto">
        Get one step closer to building your dream website.
      </p>

      <form
        className="mt-8"
        onSubmit={(e) =>
          //Trigger Toaster component and call the submit handler
          toast.promise(
            submitHandler(e),
            {
              loading: "Sending...",
              success: "Thanks for reaching out",
              error: "Oops, looks like something went wrong, please try again!",
            },
            {
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
            }
          )
        }
      >
        <div className="flex justify-evenly mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder="Tyler"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Durden"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mt-8">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mt-8">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            required
            rows={3}
            className={cn(
              `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 cursor-none
           `
            )}
          />
        </LabelInputContainer>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <button
          className="p-[3px] relative w-full mt-8"
          type="submit"
          disabled={isLoading}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Fire away &rarr;
          </div>
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

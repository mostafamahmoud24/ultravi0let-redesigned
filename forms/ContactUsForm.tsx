"use client";
import React from "react";
import { Label } from "@/components/UI/label";
import { Input } from "@/components/UI/input";
import { cn } from "@/utils/cn";

export function ContactUsForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
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

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex justify-evenly mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mt-8">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mt-8">
          <Label htmlFor="email">Message</Label>
          <textarea
            required
            rows={3}
            className={cn(
              `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `
            )}
          />
        </LabelInputContainer>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <button className="p-[3px] relative w-full mt-8" type="submit">
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

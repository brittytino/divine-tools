import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Navbar from "@/sections/Navbar";
import { Domain } from "../types";
import { domains } from "../constants";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { User, GraduationCap, CalendarClock, Code } from "lucide-react";

export interface UserDetails {
  name: string;
  collegeName: string;
  year: string;
  interestedDomain: Domain;
}

interface UserDetailsFormProps {
  onSubmit: (details: UserDetails) => void;
  initialDetails?: UserDetails;
}

const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Final Year"];

export function UserDetailsForm({ onSubmit, initialDetails }: UserDetailsFormProps) {
  const [details, setDetails] = useState<UserDetails>(
    initialDetails || {
      name: "",
      collegeName: "",
      year: "",
      interestedDomain: "web" as Domain,
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!details.name.trim()) newErrors.name = "Name is required";
    if (!details.collegeName.trim()) newErrors.collegeName = "College name is required";
    if (!details.year) newErrors.year = "Year is required";
    if (!details.interestedDomain) newErrors.interestedDomain = "Domain is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(details);
    }
  };

  return (
    <>
      <Navbar />

      {/* Full fixed screen below navbar */}
      <div className="h-full w-full flex items-center justify-center ">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
          {/* Left Side Gimmick */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-300 leading-tight">
              Build. Learn. <br />
              Share Your Project Ideas
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-md">
              Fuel your creativity with innovation. Join a community of tech minds and share your unique solutions to real-world problems.
            </p>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-white">Get Started</h2>
                <p className="text-white/70 text-sm">Fill in your details to begin</p>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white flex items-center gap-2">
                  <User className="h-4 w-4 text-lime-400" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  className="bg-neutral-800 border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-lime-400"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              {/* College Name */}
              <div className="space-y-2">
                <Label htmlFor="college" className="text-white flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-lime-400" />
                  College Name
                </Label>
                <Input
                  id="college"
                  value={details.collegeName}
                  onChange={(e) => setDetails({ ...details, collegeName: e.target.value })}
                  className="bg-neutral-800 border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-lime-400"
                  placeholder="Enter your college name"
                />
                {errors.collegeName && <p className="text-red-400 text-sm">{errors.collegeName}</p>}
              </div>

              {/* Year Select */}
              <div className="space-y-2">
                <Label htmlFor="year" className="text-white flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-lime-400" />
                  Current Year
                </Label>
                <Select
                  value={details.year}
                  onValueChange={(value) => setDetails({ ...details, year: value })}
                >
                  <SelectTrigger className="bg-neutral-800 border-white/10 text-white">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-white/10">
                    {yearOptions.map((year) => (
                      <SelectItem
                        key={year}
                        value={year}
                        className="text-white hover:bg-white/10"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.year && <p className="text-red-400 text-sm">{errors.year}</p>}
              </div>

              {/* Domain Select */}
              <div className="space-y-2">
                <Label htmlFor="domain" className="text-white flex items-center gap-2">
                  <Code className="h-4 w-4 text-lime-400" />
                  Interested Domain
                </Label>
                <Select
                  value={details.interestedDomain}
                  onValueChange={(value) => setDetails({ ...details, interestedDomain: value as Domain })}
                >
                  <SelectTrigger className="bg-neutral-800 border-white/10 text-white">
                    <SelectValue placeholder="Select your preferred domain" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-white/10">
                    {domains.map((domain) => (
                      <SelectItem
                        key={domain.id}
                        value={domain.id}
                        className="text-white hover:bg-white/10"
                      >
                        <span className="flex items-center gap-2">
                          {domain.icon} {domain.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.interestedDomain && (
                  <p className="text-red-400 text-sm">{errors.interestedDomain}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg hover:shadow-[0_0_12px_#84cc16] transition-all duration-300"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PartyContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    guests: "",
    email: "",
    occasion: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Thank you! We'll get back to you in less than 6 hours.");
      setFormData({
        name: "",
        phone: "",
        city: "",
        date: "",
        guests: "",
        email: "",
        occasion: "",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="bg-insp-regal-charcoal border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-white/5 px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-white insp-font-display">
            Plan Your{" "}
            <span className="text-insp-primary italic">Royal Celebration</span>
          </h2>
          <p className="text-stone-400 text-sm mt-2 insp-font-sans">
            We&apos;ll get back to you in less than 6 hours
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                Name *
              </label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`bg-insp-bg-dark border-white/10 text-white placeholder:text-stone-600 focus:border-insp-primary/50 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.name}</p>
              )}
            </div>

            {/* Phone and City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                  Contact Number *
                </label>
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`bg-insp-bg-dark border-white/10 text-white placeholder:text-stone-600 focus:border-insp-primary/50 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                  City *
                </label>
                <Input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={`bg-insp-bg-dark border-white/10 text-white placeholder:text-stone-600 focus:border-insp-primary/50 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                />
                {errors.city && (
                  <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Date and Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                  Date *
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className={`bg-insp-bg-dark border-white/10 text-white focus:border-insp-primary/50 ${
                    errors.date ? "border-red-500" : ""
                  }`}
                />
                {errors.date && (
                  <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.date}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                  Number of Guests *
                </label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => handleChange("guests", value)}
                >
                  <SelectTrigger
                    className={`bg-insp-bg-dark border-white/10 text-white focus:border-insp-primary/50 ${
                      errors.guests ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-insp-regal-charcoal border-white/10">
                    <SelectItem value="less-than-15" className="text-stone-300 focus:bg-insp-bg-dark focus:text-white">
                      Less than 15
                    </SelectItem>
                    <SelectItem value="15-25" className="text-stone-300 focus:bg-insp-bg-dark focus:text-white">
                      15-25
                    </SelectItem>
                    <SelectItem value="25-50" className="text-stone-300 focus:bg-insp-bg-dark focus:text-white">
                      25-50
                    </SelectItem>
                    <SelectItem value="50+" className="text-stone-300 focus:bg-insp-bg-dark focus:text-white">
                      50+
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.guests && (
                  <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.guests}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                Email Address *
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`bg-insp-bg-dark border-white/10 text-white placeholder:text-stone-600 focus:border-insp-primary/50 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 insp-font-sans">{errors.email}</p>
              )}
            </div>

            {/* Occasion */}
            <div>
              <label className="text-sm font-medium text-stone-400 mb-2 block insp-font-sans">
                What&apos;s the occasion?
              </label>
              <Textarea
                placeholder="Tell us about your celebration..."
                value={formData.occasion}
                onChange={(e) => handleChange("occasion", e.target.value)}
                className="bg-insp-bg-dark border-white/10 text-white placeholder:text-stone-600 focus:border-insp-primary/50 min-h-[80px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-insp-primary hover:bg-insp-primary/90 text-insp-bg-dark font-bold h-11 uppercase tracking-widest insp-font-sans hover:scale-[1.02] transition-transform"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    
    // Basic validation
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
      // Form is valid - show success message
      alert("Thank you! We'll get back to you in less than 6 hours.");
      // Reset form
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
    // Clear error when user starts typing
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
      <Card className="bg-warm-brown border-royal-gold/30 shadow-xl">
        <CardHeader className="border-b border-royal-gold/20">
          <CardTitle className="heading-md text-center">
            Plan Your Royal Celebration
          </CardTitle>
          <p className="text-light-tan text-sm text-center mt-2">
            We'll get back to you in less than 6 hours
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-light-tan mb-2 block">
                Name *
              </label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`bg-dark-brown/50 border-border text-foreground ${
                  errors.name ? "border-destructive" : ""
                }`}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone and City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-light-tan mb-2 block">
                  Contact Number *
                </label>
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`bg-dark-brown/50 border-border text-foreground ${
                    errors.phone ? "border-destructive" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-light-tan mb-2 block">
                  City *
                </label>
                <Input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={`bg-dark-brown/50 border-border text-foreground ${
                    errors.city ? "border-destructive" : ""
                  }`}
                />
                {errors.city && (
                  <p className="text-destructive text-xs mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Date and Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-light-tan mb-2 block">
                  Date *
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className={`bg-dark-brown/50 border-border text-foreground ${
                    errors.date ? "border-destructive" : ""
                  }`}
                />
                {errors.date && (
                  <p className="text-destructive text-xs mt-1">{errors.date}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-light-tan mb-2 block">
                  Number of Guests *
                </label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => handleChange("guests", value)}
                >
                  <SelectTrigger
                    className={`bg-dark-brown/50 border-border text-foreground ${
                      errors.guests ? "border-destructive" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-warm-brown border-royal-gold/30">
                    <SelectItem value="less-than-15" className="text-foreground">
                      Less than 15
                    </SelectItem>
                    <SelectItem value="15-25" className="text-foreground">
                      15-25
                    </SelectItem>
                    <SelectItem value="25-50" className="text-foreground">
                      25-50
                    </SelectItem>
                    <SelectItem value="50+" className="text-foreground">
                      50+
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.guests && (
                  <p className="text-destructive text-xs mt-1">{errors.guests}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-light-tan mb-2 block">
                Email Address *
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`bg-dark-brown/50 border-border text-foreground ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Occasion */}
            <div>
              <label className="text-sm font-medium text-light-tan mb-2 block">
                What's the occasion?
              </label>
              <Textarea
                placeholder="Tell us about your celebration..."
                value={formData.occasion}
                onChange={(e) => handleChange("occasion", e.target.value)}
                className="bg-dark-brown/50 border-border text-foreground min-h-[80px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-royal-gold hover:bg-royal-gold/90 text-dark-brown font-semibold h-11"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, User, Mail, Phone, MapPin, School, Send } from "lucide-react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  type?: "registration" | "syllabus" | "enquiry"
}

export function RegistrationModal({ isOpen, onClose, type = "registration" }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    schoolName: "",
    location: "",
    grade: "",
    parentName: "",
    enquiryType: type,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "IEOF Website",
          type,
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      toast({
        title: "Submitted!",
        description:
          "Thank you for your interest. We’ve received your details and sent them to our team. You’ll get payment instructions shortly.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        schoolName: "",
        location: "",
        grade: "",
        parentName: "",
        enquiryType: type,
      })
      onClose()
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your details. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getModalContent = () => {
    switch (type) {
      case "syllabus":
        return {
          title: "Get Syllabus Booklet",
          description: "Fill in your details to purchase the official GEO syllabus booklet for ₹100.",
        }
      case "enquiry":
        return {
          title: "General Enquiry",
          description: "Have questions about the Global English Olympiad? We're here to help!",
        }
      default:
        return {
          title: "Register for GEO 2025",
          description: "Join the Global English Olympiad for just ₹299. Fill in your details to get started.",
        }
    }
  }

  const modalContent = getModalContent()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{modalContent.title}</DialogTitle>
          <DialogDescription className="text-base">{modalContent.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-primary" />
                <span>Student Name *</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter student's full name"
                required
              />
            </div>

            {/* Parent Name */}
            <div className="space-y-2">
              <Label htmlFor="parentName" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-primary" />
                <span>Parent/Guardian Name *</span>
              </Label>
              <Input
                id="parentName"
                value={formData.parentName}
                onChange={(e) => handleInputChange("parentName", e.target.value)}
                placeholder="Enter parent/guardian name"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Email Address *</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Phone Number *</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Grade */}
            <div className="space-y-2">
              <Label htmlFor="grade" className="flex items-center space-x-2">
                <School className="w-4 h-4 text-primary" />
                <span>Student's Grade *</span>
              </Label>
              <Select value={formData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      Grade {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>City/State *</span>
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Enter city and state"
                required
              />
            </div>
          </div>

          {/* School Name */}
          <div className="space-y-2">
            <Label htmlFor="schoolName" className="flex items-center space-x-2">
              <School className="w-4 h-4 text-primary" />
              <span>School Name *</span>
            </Label>
            <Input
              id="schoolName"
              value={formData.schoolName}
              onChange={(e) => handleInputChange("schoolName", e.target.value)}
              placeholder="Enter school name"
              required
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Complete Address *</span>
            </Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter complete address"
              rows={3}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-secondary hover:bg-secondary/90">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit {type === "registration" ? "Registration" : type === "syllabus" ? "Order" : "Enquiry"}
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
          </div>

          <div className="text-sm text-muted-foreground text-center pt-2">
            <p>
              By submitting this form, you agree to be contacted by our team regarding the Global English Olympiad.
              {type === "registration" && " Payment instructions will be shared after form submission."}
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

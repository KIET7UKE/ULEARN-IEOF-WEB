"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, XCircle, BookOpen, AlertCircle } from "lucide-react";

interface GradeCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCodeValidated: (grade: number) => void;
}

// Static grade codes for validation
const GRADE_CODES = {
  1: "IEOFGEO01@5821",
  2: "IEOFGEO02@1947",
  3: "IEOFGEO03@7603",
  4: "IEOFGEO04@0189",
  5: "IEOFGEO05@4390",
  6: "IEOFGEO06@8032",
  7: "IEOFGEO07@2274",
  8: "IEOFGEO08@6908",
  9: "IEOFGEO09@3156",
  10: "IEOFGEO010@9041",
};

export function GradeCodeModal({
  isOpen,
  onClose,
  onCodeValidated,
}: GradeCodeModalProps) {
  const [enteredCode, setEnteredCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    grade?: number;
    message: string;
  } | null>(null);
  const [fieldError, setFieldError] = useState<string>("");

  const validateCodeLength = (code: string): boolean => {
    // Count alphanumeric characters in the code
    const alphanumericCount = (code.match(/[a-zA-Z0-9]/g) || []).length;
    return alphanumericCount === 13;
  };

  const validateCode = async () => {
    setIsValidating(true);
    setValidationResult(null);
    setFieldError("");

    const code = enteredCode.trim().toUpperCase();

    // Check if code has exactly 13 alphanumeric characters
    if (!validateCodeLength(code)) {
      setFieldError("Code must contain exactly 13 alphanumeric characters.");
      setIsValidating(false);
      return;
    }

    // Simulate validation delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const grade = Object.entries(GRADE_CODES).find(
      ([_, gradeCode]) => gradeCode === code
    )?.[0];

    if (grade) {
      setValidationResult({
        isValid: true,
        grade: parseInt(grade),
        message: `Valid code! Access granted for Grade ${grade} syllabus.`,
      });
    } else {
      setValidationResult({
        isValid: false,
        message: "Invalid code. Please check your code and try again.",
      });
    }

    setIsValidating(false);
  };

  const handleAccessSyllabus = () => {
    if (validationResult?.isValid && validationResult.grade) {
      onCodeValidated(validationResult.grade);
      onClose();
    }
  };

  const resetForm = () => {
    setEnteredCode("");
    setValidationResult(null);
    setFieldError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Access Grade-Specific Syllabus
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Enter your unique grade code to access the syllabus content for your
            grade level.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Code Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Enter Your Grade Code</span>
              </CardTitle>
              <CardDescription>
                Use the code provided by your school or organization to access
                your grade-specific syllabus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="grade-code">Grade Code</Label>
                <div className="flex space-x-2">
                  <Input
                    id="grade-code"
                    placeholder="e.g., IEOFGEO5@xxxx"
                    value={enteredCode}
                    onChange={(e) => {
                      setEnteredCode(e.target.value);
                      setFieldError("");
                    }}
                    className={`flex-1 ${
                      fieldError ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    onKeyPress={(e) => e.key === "Enter" && validateCode()}
                  />
                  <Button
                    onClick={validateCode}
                    disabled={
                      !enteredCode.trim() ||
                      isValidating ||
                      !validateCodeLength(enteredCode)
                    }
                    className="px-6"
                  >
                    {isValidating ? "Validating..." : "Validate"}
                  </Button>
                </div>
                {fieldError && (
                  <div className="flex items-center space-x-2 text-red-600 text-sm">
                    <XCircle className="w-4 h-4" />
                    <span>{fieldError}</span>
                  </div>
                )}
              </div>

              {/* Validation Result */}
              {validationResult && (
                <div
                  className={`p-4 rounded-lg border ${
                    validationResult.isValid
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {validationResult.isValid ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                    <span className="font-medium">
                      {validationResult.message}
                    </span>
                  </div>
                </div>
              )}

              {/* Access Button */}
              {validationResult?.isValid && (
                <Button
                  onClick={handleAccessSyllabus}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Access Grade {validationResult.grade} Syllabus
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800">
                    Important Notice
                  </h4>
                  <p className="text-sm text-amber-700">
                    These codes provide access only to syllabus content for the
                    specific grade. They do not grant access to lessons,
                    exercises, or other learning materials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

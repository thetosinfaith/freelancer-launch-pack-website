"use client";

import type React from "react";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/hooks/use-site-content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import User from "../assets/girl.webp";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import InstagramWidget from "./about/InstagramWidget";
import ScrollingBanner from "./ScrollingBanner";

const MIN_LEN_ABOUT_BUSINESS = 50;
const MIN_LEN_HOW_CAN_I_HELP = 30;

const MIN_LEN_BRIEF_DESCRIPTION = 30;
const MIN_LEN_EVENT_AUDIENCE = 30;
const MIN_LEN_PROJECT_OPPORTUNITY = 30;

const serviceOptions = [
  { name: "Need a Website", cost: "$500/above" },
  { name: "Consult me", cost: "$150/hour)" },
  { name: "Invite me to speak", cost: "$500/hour" },
  { name: "Add me to a project", cost: "$1,000" },
];

const businessDurationOptions = [
  "Less than 1 year",
  "1 - 2 years",
  "3 - 5 years",
  "5+ years",
];

const TosinFaithServiceOptions = [
  "Just Get Me Online",
  "Website Glow-up",
  "One-Day Website",
  "The Shop & Sell (Ecommerce)",
  "Do It All For Me",
];

const consultHelpOptions = [
  "Website Review",
  "Tech Advice",
  "Design Feedback",
  "Branding Strategy",
  "Something Else",
];

const sessionDurationOptions = [
  "30 minutes",
  "1 hour",
];

const speakTopicOptions = [
  "Tech & Creativity",
  "Freelancing / Career",
  "Life After Home",
  "Gen Z & Adulthood",
  "Something Else",
];

const teamRoleOptions = [
  "Frontend Developer",
  "Tech Team Collaborator",
  "Intern / Volunteer",
  "Something Else",
];

type ServiceOption = {
  name: string;
  cost: string;
};

export default function BookingForm() {
  const content = useSiteContent();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    window.scrollTo(0, 0);

    AOS.refresh();
  }, []);

  const [selectedService, setSelectedService] = useState<string | null>(
    "Need a Website"
  );
  const [showServiceError, setShowServiceError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "", 
    organization: "",
    extraInfo: "", 
    howFoundTosinFaith: "",

    websiteUrl: "",
    instagramHandle: "",
    businessDuration: "",
    aboutBusiness: "",
    interestedService: "", 
    projectBudget: "", 
    howCanIHelp: "",
    whyTosinFaith: "",
    brandIdentity: "",

    whatHelpWith: "", 
    briefDescription: "",
    sessionDuration: "", 
    preferredDateTime: "", 

    eventName: "", 
    topicOfInterest: "", 
    eventAudience: "",
    eventDate: "", 
    invitationType: "",

    teamCompanyName: "", 
    roleInterestedIn: "", 
    projectOpportunity: "", 
    locationType: "",
    projectStartDate: "", 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formErrors, setFormErrors] = useState({
    email: false,
    firstName: false,
    lastName: false,
    phone: false, 
    organization: false,
    websiteUrl: false,
    instagramHandle: false,
    businessDuration: false,
    aboutBusiness: false,
    interestedService: false,
    projectBudget: false,
    howCanIHelp: false,
    whyTosinFaith: false,
    brandIdentity: false,
    whatHelpWith: false,
    briefDescription: false,
    sessionDuration: false,
    preferredDateTime: false,
    eventName: false,
    topicOfInterest: false,
    eventAudience: false,
    eventDate: false,
    invitationType: false,
    teamCompanyName: false,
    roleInterestedIn: false,
    projectOpportunity: false,
    locationType: false,
    projectStartDate: false,
  });

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService((prev) => (prev === serviceName ? null : serviceName));
    if (showServiceError) setShowServiceError(false);
  };

  const relevantFields = useMemo(() => {
    const fields = {
      email: true,
      firstName: true,
      lastName: true,
      phone: true, 

      organization: false,
      websiteUrl: false,
      instagramHandle: false,
      businessDuration: false,
      aboutBusiness: false,
      interestedService: false,
      projectBudget: false,
      howCanIHelp: false,
      whyTosinFaith: false,
      brandIdentity: false,

      whatHelpWith: false,
      briefDescription: false,
      sessionDuration: false,
      preferredDateTime: false,

      eventName: false,
      topicOfInterest: false,
      eventAudience: false,
      eventDate: false,
      invitationType: false,

      teamCompanyName: false,
      roleInterestedIn: false,
      projectOpportunity: false,
      locationType: false,
      projectStartDate: false,

      extraInfo: false,
      howFoundTosinFaith: false,
    };

    if (selectedService === "Need a Website") {
      fields.organization = true;
      fields.websiteUrl = true;
      fields.instagramHandle = true;
      fields.businessDuration = true;
      fields.aboutBusiness = true;
      fields.interestedService = true;
      fields.projectBudget = true;
      fields.howCanIHelp = true;
      fields.whyTosinFaith = true;
      fields.brandIdentity = true;
    } else if (selectedService === "Consult me") {
      fields.organization = false;
      fields.whatHelpWith = true;
      fields.briefDescription = true;
      fields.sessionDuration = true;
      fields.preferredDateTime = true;
    } else if (selectedService === "Invite me to speak") {
      fields.eventName = true;
      fields.topicOfInterest = true;
      fields.eventAudience = true;
      fields.eventDate = true;
      fields.invitationType = true;
    } else if (selectedService === "Join a team") {
      fields.teamCompanyName = true;
      fields.roleInterestedIn = true;
      fields.projectOpportunity = true;
      fields.locationType = true;
      fields.projectStartDate = true;
    }

    return fields;
  }, [selectedService]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = Object.fromEntries(
      Object.keys(formErrors).map((key) => [key, false])
    ) as typeof formErrors;

    if (!selectedService) {
      setShowServiceError(true);
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.firstName) {
      newErrors.firstName = true;
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = true;
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = true;
      isValid = false;
    }

    if (selectedService === "Need a Website") {
      if (relevantFields.organization && !formData.organization.trim()) {
        newErrors.organization = true;
        isValid = false;
      }
      if (relevantFields.websiteUrl && !formData.websiteUrl.trim()) {
        newErrors.websiteUrl = true;
        isValid = false;
      }
      if (relevantFields.instagramHandle && !formData.instagramHandle.trim()) {
        newErrors.instagramHandle = true;
        isValid = false;
      }
      if (relevantFields.businessDuration && !formData.businessDuration) {
        newErrors.businessDuration = true;
        isValid = false;
      }
      if (
        relevantFields.aboutBusiness &&
        formData.aboutBusiness.trim().length < MIN_LEN_ABOUT_BUSINESS
      ) {
        newErrors.aboutBusiness = true;
        isValid = false;
      }
      if (
        relevantFields.interestedService &&
        !formData.interestedService.trim()
      ) {
        newErrors.interestedService = true;
        isValid = false;
      }
      if (relevantFields.projectBudget && !formData.projectBudget.trim()) {
        newErrors.projectBudget = true;
        isValid = false;
      }
      if (
        relevantFields.howCanIHelp &&
        formData.howCanIHelp.trim().length < MIN_LEN_HOW_CAN_I_HELP
      ) {
        newErrors.howCanIHelp = true;
        isValid = false;
      }
      if (relevantFields.whyTosinFaith && !formData.whyTosinFaith) {
        newErrors.whyTosinFaith = true;
        isValid = false;
      }
      if (relevantFields.brandIdentity && !formData.brandIdentity.trim()) {
        newErrors.brandIdentity = true;
        isValid = false;
      }
    } else if (selectedService === "Consult me") {
      if (relevantFields.whatHelpWith && !formData.whatHelpWith) {
        newErrors.whatHelpWith = true;
        isValid = false;
      }
      if (
        relevantFields.briefDescription &&
        formData.briefDescription.trim().length < MIN_LEN_BRIEF_DESCRIPTION
      ) {
        newErrors.briefDescription = true;
        isValid = false;
      }
      if (relevantFields.sessionDuration && !formData.sessionDuration) {
        newErrors.sessionDuration = true;
        isValid = false;
      }
      if (
        relevantFields.preferredDateTime &&
        !formData.preferredDateTime.trim()
      ) {
        newErrors.preferredDateTime = true;
        isValid = false;
      }
    } else if (selectedService === "Invite me to speak") {
      if (relevantFields.eventName && !formData.eventName.trim()) {
        newErrors.eventName = true;
        isValid = false;
      }
      if (relevantFields.topicOfInterest && !formData.topicOfInterest) {
        newErrors.topicOfInterest = true;
        isValid = false;
      }
      if (
        relevantFields.eventAudience &&
        formData.eventAudience.trim().length < MIN_LEN_EVENT_AUDIENCE
      ) {
        newErrors.eventAudience = true;
        isValid = false;
      }
      if (relevantFields.eventDate && !formData.eventDate.trim()) {
        newErrors.eventDate = true;
        isValid = false;
      }
      if (relevantFields.invitationType && !formData.invitationType) {
        newErrors.invitationType = true;
        isValid = false;
      }
    } else if (selectedService === "Join a team") {
      if (relevantFields.teamCompanyName && !formData.teamCompanyName.trim()) {
        newErrors.teamCompanyName = true;
        isValid = false;
      }
      if (relevantFields.roleInterestedIn && !formData.roleInterestedIn) {
        newErrors.roleInterestedIn = true;
        isValid = false;
      }
      if (
        relevantFields.projectOpportunity &&
        formData.projectOpportunity.trim().length < MIN_LEN_PROJECT_OPPORTUNITY
      ) {
        newErrors.projectOpportunity = true;
        isValid = false;
      }
      if (relevantFields.locationType && !formData.locationType) {
        newErrors.locationType = true;
        isValid = false;
      }
      if (
        relevantFields.projectStartDate &&
        !formData.projectStartDate.trim()
      ) {
        newErrors.projectStartDate = true;
        isValid = false;
      }
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      const payload: Record<string, string> = {
        _subject: `New Booking Request for Tosin Faith from ${formData.firstName} ${formData.lastName}`,
        "Service Selected": selectedService,
        "Email Address": formData.email,
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Phone Number": formData.phone,
        "Additional Info": formData.extraInfo,
        "How Found Tosin Faith": formData.howFoundTosinFaith,
      };

      if (selectedService === "Need a Website") {
        payload["Organization"] = formData.organization;
        payload["Website URL"] = formData.websiteUrl;
        payload["Instagram Handle"] = formData.instagramHandle;
        payload["Business Duration"] = formData.businessDuration;
        payload["About Business"] = formData.aboutBusiness;
        payload["Most Interested Service"] = formData.interestedService;
        payload["Project Budget"] = formData.projectBudget;
        payload["How Can I Help (Website)"] = formData.howCanIHelp;
        payload["What Type of Service from Tosin Faith"] =
          formData.whyTosinFaith;
        payload["Brand Identity Status"] = formData.brandIdentity;
      } else if (selectedService === "Consult me") {
        payload["Organization (Consult)"] = formData.organization; 
        payload["What do you need help with?"] = formData.whatHelpWith;
        payload["Brief Description (Consult)"] = formData.briefDescription;
        payload["Preferred Session Duration"] = formData.sessionDuration;
        payload["Preferred Date/Time (Consult)"] = formData.preferredDateTime;
      } else if (selectedService === "Invite me to speak") {
        payload["Organization / Event Name"] = formData.eventName;
        payload["Topic of Interest (Speak)"] = formData.topicOfInterest;
        payload["About the Event / Audience"] = formData.eventAudience;
        payload["Event Date or Timeline"] = formData.eventDate;
        payload["Invitation Type"] = formData.invitationType;
      } else if (selectedService === "Join a team") {
        payload["Team or Company Name"] = formData.teamCompanyName;
        payload["Role Interested In"] = formData.roleInterestedIn;
        payload["About the Project / Opportunity"] =
          formData.projectOpportunity;
        payload["Location Type"] = formData.locationType;
        payload["Project Duration or Start Date"] = formData.projectStartDate;
      }

      try {
        const response = await fetch("https://formspree.io/f/xnnvkdvz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert(
            "Thank you! Your booking request has been submitted successfully. Tosin Faith will be in touch soon!"
          );
          setSelectedService(null); 
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            organization: "",
            extraInfo: "",
            websiteUrl: "",
            instagramHandle: "",
            businessDuration: "",
            aboutBusiness: "",
            interestedService: "",
            projectBudget: "",
            howCanIHelp: "",
            whyTosinFaith: "",
            brandIdentity: "",
            howFoundTosinFaith: "",
            whatHelpWith: "",
            briefDescription: "",
            sessionDuration: "",
            preferredDateTime: "",
            eventName: "",
            topicOfInterest: "",
            eventAudience: "",
            eventDate: "",
            invitationType: "",
            teamCompanyName: "",
            roleInterestedIn: "",
            projectOpportunity: "",
            locationType: "",
            projectStartDate: "",
          });
          setFormErrors(
            Object.fromEntries(
              Object.keys(formErrors).map((key) => [key, false])
            ) as typeof formErrors
          );
        } else {
          const errorData = await response.json();
          alert(
            `Submission failed: ${
              errorData.message || "An unknown error occurred."
            } Please try again.`
          );
          console.error("Formspree error:", errorData);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "There was an issue submitting your form. Please check your internet connection and try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormErrors((prev) => ({ ...prev, [field]: false })); 
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const estimatedCostDisplay = useMemo(() => {
    if (!selectedService) {
      return "(Select a service to see the cost)";
    }
    const service = serviceOptions.find((s) => s.name === selectedService);
    return service ? `${service.name}: ${service.cost}` : "";
  }, [selectedService]);

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white pt-24 pb-0 lg:py-24 w-full">
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #f9a8d4 30%, #ec4899 100%);
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
    background: #ffe4f0;
            border-radius: 8px;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
    scrollbar-color: #f9a8d4 #ffe4f0;
          }
        `}
      </style>
      <div
        className="w-full max-w-7xl mx-auto rounded-none shadow-none backdrop-blur-lg p-0 md:p-0"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 items-stretch w-full pl-4 pr-0 md:px-10 pb-2 mt-4 lg:mt-10">
          <div
            className="flex justify-center lg:justify-end items-start w-full"
            data-aos="fade-right"
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-[300px] md:h-[400px] lg:h-[600px] flex items-center pr-4 md:pr-0 mt-2 md:mt-4 lg:mt-8">
              {" "}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-purple-100 w-full h-full flex items-center">
                <img
                  src={User}
                  alt="Professional headshot of Tosin Faith"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 w-full pr-2 pt-8" data-aos="fade-left">
            <div className="flex items-center gap-2">
              <span className="text-3xl">👋🏽</span>
              <h2 className="text-2xl md:text-3xl text-brand-primary font-bold italic">
                Hi, Welcome...
              </h2>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight -mt-2">
                {content.booking.title}
              </h1>
              <p className="text-gray-600 mb-4 text-base md:text-lg">
                {content.booking.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                {serviceOptions.map((service) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => handleServiceSelect(service.name)}
                    className={`px-5 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ease-in-out
                      ${
                        selectedService === service.name
                          ? "border-brand-primary bg-brand-background text-gray-700 shadow-md"
                          : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
              {showServiceError && (
                <p className="text-red-600 text-sm mt-2">
                  Please select one service option to proceed.
                </p>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 h-[400px] overflow-y-auto pr-2 custom-scrollbar"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs italic mt-1">
                    A valid email address is required.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs italic mt-1">
                    First Name is required.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-xs italic mt-1">
                    Last Name is required.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(123) 456-7890"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs italic mt-1">
                    Phone Number is required.
                  </p>
                )}
              </div>

              {selectedService === "Need a Website" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                    Website Project Details
                  </h3>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.organization
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Your Organization"
                    />
                    {formErrors.organization && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Organization is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="websiteUrl"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Current Website URL (if any){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="url"
                      id="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        handleInputChange("websiteUrl", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.websiteUrl
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="https://yourwebsite.com"
                    />
                    {formErrors.websiteUrl && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Website URL is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="instagramHandle"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Instagram Handle (if applicable){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={(e) =>
                        handleInputChange("instagramHandle", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.instagramHandle
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="@yourhandle"
                    />
                    {formErrors.instagramHandle && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Instagram Handle is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="businessDuration"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      How long has your business been operating?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessDuration"
                        value={formData.businessDuration}
                        onChange={(e) =>
                          handleInputChange("businessDuration", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.businessDuration
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select duration</option>
                        {businessDurationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.businessDuration && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select how long your business has been operating.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="aboutBusiness"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Tell me about your business (briefly).{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="aboutBusiness"
                      value={formData.aboutBusiness}
                      onChange={(e) =>
                        handleInputChange("aboutBusiness", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-y ${
                        formErrors.aboutBusiness
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={`Describe your business, its mission, and target audience (min ${MIN_LEN_ABOUT_BUSINESS} chars)...`}
                    />
                    {formErrors.aboutBusiness && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide more details about your business (minimum{" "}
                        {MIN_LEN_ABOUT_BUSINESS} characters).
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="interestedService"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Which type of website service are you most interested in?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="interestedService"
                      value={formData.interestedService}
                      onChange={(e) =>
                        handleInputChange("interestedService", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.interestedService
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g., Ecommerce website, Portfolio website"
                    />
                    {formErrors.interestedService && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please specify the website service you are interested
                        in.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="projectBudget"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      What is your estimated project budget?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="projectBudget"
                      value={formData.projectBudget}
                      onChange={(e) =>
                        handleInputChange("projectBudget", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.projectBudget
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g., $1000 - $5000 or NGN equivalent"
                    />
                    {formErrors.projectBudget && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide an estimated project budget.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="howCanIHelp"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      How can a new or redesigned website best help you achieve
                      your goals? <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="howCanIHelp"
                      value={formData.howCanIHelp}
                      onChange={(e) =>
                        handleInputChange("howCanIHelp", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-y ${
                        formErrors.howCanIHelp
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={`Tell me more about what you're looking for (min ${MIN_LEN_HOW_CAN_I_HELP} chars)...`}
                    />
                    {formErrors.howCanIHelp && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please describe how I can best help you (minimum{" "}
                        {MIN_LEN_HOW_CAN_I_HELP} characters).
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="whyTosinFaith"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      What specific type of website service do you need?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="whyTosinFaith"
                        value={formData.whyTosinFaith}
                        onChange={(e) =>
                          handleInputChange("whyTosinFaith", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.whyTosinFaith
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a service type</option>
                        {TosinFaithServiceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.whyTosinFaith && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select the type of service you are looking for.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="brandIdentity"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Do you have a brand identity (logo, colors, fonts, etc.)?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="brandIdentity"
                      value={formData.brandIdentity}
                      onChange={(e) =>
                        handleInputChange("brandIdentity", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.brandIdentity
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Yes, fully defined; Partially; No, need help"
                    />
                    {formErrors.brandIdentity && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please indicate your brand identity status.
                      </p>
                    )}
                  </div>
                </>
              )}

              {selectedService === "Consult me" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                    Consultation Details
                  </h3>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-gray-700 text-sm font-mediumd mb-2"
                    >
                      Organization (Optional)
                    </label>
                    <Input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.organization
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="whatHelpWith"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      What do you need help with?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="whatHelpWith"
                        value={formData.whatHelpWith}
                        onChange={(e) =>
                          handleInputChange("whatHelpWith", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.whatHelpWith
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select an option</option>
                        {consultHelpOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.whatHelpWith && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select what you need help with.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="briefDescription"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Briefly describe your project or challenge{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="briefDescription"
                      value={formData.briefDescription}
                      onChange={(e) =>
                        handleInputChange("briefDescription", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-y ${
                        formErrors.briefDescription
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={`Provide a brief overview (min ${MIN_LEN_BRIEF_DESCRIPTION} chars)...`}
                    />
                    {formErrors.briefDescription && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please describe your project or challenge (minimum{" "}
                        {MIN_LEN_BRIEF_DESCRIPTION} characters).
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="sessionDuration"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Preferred session duration{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="sessionDuration"
                        value={formData.sessionDuration}
                        onChange={(e) =>
                          handleInputChange("sessionDuration", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.sessionDuration
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select duration</option>
                        {sessionDurationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.sessionDuration && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select a preferred session duration.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="preferredDateTime"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Preferred date/time{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="datetime-local"
                      id="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={(e) =>
                        handleInputChange("preferredDateTime", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.preferredDateTime
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {formErrors.preferredDateTime && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide a preferred date and time.
                      </p>
                    )}
                  </div>
                </>
              )}

              {selectedService === "Invite me to speak" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                    Speaking Engagement Details
                  </h3>
                  <div>
                    <label
                      htmlFor="eventName"
                      className="block text-gray-700 text-smfont-medium mb-2"
                    >
                      Organization / Event Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="eventName"
                      value={formData.eventName}
                      onChange={(e) =>
                        handleInputChange("eventName", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.eventName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g., Annual Tech Conference, My University"
                    />
                    {formErrors.eventName && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Organization or Event Name is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="topicOfInterest"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Topic you're interested in{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="topicOfInterest"
                        value={formData.topicOfInterest}
                        onChange={(e) =>
                          handleInputChange("topicOfInterest", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.topicOfInterest
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a topic</option>
                        {speakTopicOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.topicOfInterest && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select a topic of interest.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="eventAudience"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Tell me about the event / audience{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="eventAudience"
                      value={formData.eventAudience}
                      onChange={(e) =>
                        handleInputChange("eventAudience", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-y ${
                        formErrors.eventAudience
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={`Describe the event, target audience, format, etc. (min ${MIN_LEN_EVENT_AUDIENCE} chars)...`}
                    />
                    {formErrors.eventAudience && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide details about the event and audience
                        (minimum {MIN_LEN_EVENT_AUDIENCE} characters).
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Event date or timeline{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) =>
                        handleInputChange("eventDate", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.eventDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {formErrors.eventDate && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide the event date or timeline.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Is this a paid or volunteer invitation?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paidInvitation"
                          name="invitationType"
                          value="Paid"
                          checked={formData.invitationType === "Paid"}
                          onChange={(e) =>
                            handleInputChange("invitationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="paidInvitation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Paid
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="volunteerInvitation"
                          name="invitationType"
                          value="Volunteer"
                          checked={formData.invitationType === "Volunteer"}
                          onChange={(e) =>
                            handleInputChange("invitationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="volunteerInvitation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Volunteer
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="notSureInvitation"
                          name="invitationType"
                          value="Not Sure Yet"
                          checked={formData.invitationType === "Not Sure Yet"}
                          onChange={(e) =>
                            handleInputChange("invitationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="notSureInvitation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Not Sure Yet
                        </label>
                      </div>
                    </div>
                    {formErrors.invitationType && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please select the invitation type.
                      </p>
                    )}
                  </div>
                </>
              )}

              {selectedService === "Join a team" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                    Team / Collaboration Details
                  </h3>
                  <div>
                    <label
                      htmlFor="teamCompanyName"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Team or Company Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="teamCompanyName"
                      value={formData.teamCompanyName}
                      onChange={(e) =>
                        handleInputChange("teamCompanyName", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.teamCompanyName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g., Google, Open Source Project X"
                    />
                    {formErrors.teamCompanyName && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Team or Company Name is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="roleInterestedIn"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      What role are you reaching out for?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="roleInterestedIn"
                        value={formData.roleInterestedIn}
                        onChange={(e) =>
                          handleInputChange("roleInterestedIn", e.target.value)
                        }
                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.roleInterestedIn
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a role</option>
                        {teamRoleOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.roleInterestedIn && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please specify the role you are reaching out for.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="projectOpportunity"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Tell me about the project / opportunity{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="projectOpportunity"
                      value={formData.projectOpportunity}
                      onChange={(e) =>
                        handleInputChange("projectOpportunity", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-y ${
                        formErrors.projectOpportunity
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder={`Describe the project, responsibilities, team, etc. (min ${MIN_LEN_PROJECT_OPPORTUNITY} chars)...`}
                    />
                    {formErrors.projectOpportunity && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide details about the project or opportunity
                        (minimum {MIN_LEN_PROJECT_OPPORTUNITY} characters).
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Is this remote or in-person?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="remoteLocation"
                          name="locationType"
                          value="Remote"
                          checked={formData.locationType === "Remote"}
                          onChange={(e) =>
                            handleInputChange("locationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="remoteLocation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remote
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="inpersonLocation"
                          name="locationType"
                          value="In-person"
                          checked={formData.locationType === "In-person"}
                          onChange={(e) =>
                            handleInputChange("locationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="inpersonLocation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          In-person
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="hybridLocation"
                          name="locationType"
                          value="Hybrid"
                          checked={formData.locationType === "Hybrid"}
                          onChange={(e) =>
                            handleInputChange("locationType", e.target.value)
                          }
                          className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
                        />
                        <label
                          htmlFor="hybridLocation"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Hybrid
                        </label>
                      </div>
                    </div>
                    {formErrors.locationType && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please specify the location type.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="projectStartDate"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Project Duration or Start Date{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="projectStartDate"
                      value={formData.projectStartDate}
                      onChange={(e) =>
                        handleInputChange("projectStartDate", e.target.value)
                      }
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.projectStartDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g., 6 months, ASAP, Jan 2026"
                    />
                    {formErrors.projectStartDate && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please provide the project duration or start date.
                      </p>
                    )}
                  </div>
                </>
              )}

              {selectedService && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                    General Information
                  </h3>
                  <div>
                    <label
                      htmlFor="howFoundTosinFaith"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      How did you hear about Tosin Faith? (Optional)
                    </label>
                    <Input
                      type="text"
                      id="howFoundTosinFaith"
                      value={formData.howFoundTosinFaith}
                      onChange={(e) =>
                        handleInputChange("howFoundTosinFaith", e.target.value)
                      }
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                      placeholder="e.g., Social media, Referral, Google search"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="extraInfo"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Any additional information or questions? (Optional)
                    </label>
                    <Textarea
                      id="extraInfo"
                      value={formData.extraInfo}
                      onChange={(e) =>
                        handleInputChange("extraInfo", e.target.value)
                      }
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 bg-white leading-tight focus:outline-none focus:shadow-outline h-24 resize-y border-gray-300"
                      placeholder="Is there anything else you'd like me to know?"
                    />
                  </div>
                </>
              )}

              <div className="bg-[#ffe4f6] p-6 rounded-2xl shadow-lg border border-[#ffc2ea] transform hover:scale-105 transition-all duration-300 ease-in-out">
                <p className="text-lg font-medium text-[#c0268a] mb-1">
                  Service Cost:
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[#a31a74] tracking-tight drop-shadow-sm">
                  <span className="text-[#e83e8c]">{estimatedCostDisplay}</span>
                </h3>
              </div>

            <div className="flex justify-end">
  <button
    type="submit"
    className="group flex items-center border-brand-primary bg-brand-primary hover:bg-brand-accent text-white hover:text-gray-600 font-medium rounded-full px-6 py-3 text-base lg:text-lg
    shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-brand-primary"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <span className="flex items-center gap-2">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        Submitting...
      </span>
    ) : (
      <>
        <span className="bg-white text-[#5a3d35] rounded-full p-2 mr-2 transition-transform duration-200 group-hover:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
        {content.booking.submitButton}
      </>
    )}
  </button>
</div>

            </form>
          </div>
        </div>
      </div>
    </div>
   
    </>
    
  );
}

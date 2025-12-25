'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Upload, Clock, BriefcaseIcon, MapPin } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Join our core ML team to develop cutting-edge AI-assisted labeling algorithms that power our platform.",
    posted: "2 weeks ago",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "London, UK",
    type: "Full-time",
    remote: "Remote",
    description: "Help design intuitive interfaces for complex data annotation workflows and visualization tools.",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time",
    remote: "In-Office",
    description: "Work directly with enterprise customers to ensure they get maximum value from our platform.",
    posted: "1 month ago",
  },
  {
    id: 4,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: "Remote",
    description: "Build responsive and accessible user interfaces using React, Next.js, and modern web technologies.",
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Singapore",
    type: "Full-time",
    remote: "Hybrid",
    description: "Manage our cloud infrastructure and help scale our platform to handle millions of annotations daily.",
    posted: "2 days ago",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description: "Drive growth through content marketing, SEO, and digital campaigns focused on AI and ML audiences.",
    posted: "3 weeks ago",
  },
]

export function OpenPositions() {
  const [department, setDepartment] = useState("all")
  const [location, setLocation] = useState("all")
  const [jobType, setJobType] = useState("all")
  const [showNoOpenings, setShowNoOpenings] = useState(false)

  const filteredJobs = jobListings.filter((job) => {
    return (
      (department === "all" || job.department === department) &&
      (location === "all" || job.location.includes(location)) &&
      (jobType === "all" || job.type === jobType)
    )
  })

  const displayedJobs = showNoOpenings ? [] : filteredJobs

  return (
    <section id="open-positions" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Join Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and help us build the future of data labeling.
            </p>

            {/* Toggle for demo purposes */}
            <div className="mt-4">
              <Button variant="outline" onClick={() => setShowNoOpenings(!showNoOpenings)} className="text-xs">
                {showNoOpenings ? "Show Sample Jobs" : "Show 'No Openings' View"}
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <Label htmlFor="department-filter">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="department-filter">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Customer Success">Customer Success</SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location-filter">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location-filter">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="London">London</SelectItem>
                  <SelectItem value="Singapore">Singapore</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="type-filter">Job Type</Label>
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger id="type-filter">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Listings */}
          {displayedJobs.length > 0 ? (
            <div className="space-y-6">
              {displayedJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[1fr_auto] gap-4">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-primary/5">
                              {job.department}
                            </Badge>
                            <Badge variant="outline" className="bg-primary/5">
                              {job.remote}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BriefcaseIcon className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{job.description}</p>
                      </div>

                      <div className="flex items-center justify-center p-6 bg-muted/20">
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardHeader className="text-center">
                <CardTitle>We&apos;re not hiring at the moment, but we&apos;d love to stay in touch!</CardTitle>
                <CardDescription>
                  Join our talent pool to be notified when new positions open up that match your skills and interests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Preferred Department</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="customer-success">Customer Success</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume</Label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose File
                      </Button>
                      <span className="text-sm text-muted-foreground">No file chosen</span>
                    </div>
                    <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT. Max 5MB.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea id="message" placeholder="Tell us about your skills and interests..." rows={4} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notify" className="rounded border-gray-300" />
                    <Label htmlFor="notify" className="text-sm font-normal">
                      Notify me about future job openings that match my profile
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Join Talent Pool
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

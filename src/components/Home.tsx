import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Share2, Plus, Edit, User } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto  p-8 ">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Card */}
        <Card className="relative overflow-hidden shadow-xl">
          {/* Trusted Investor Banner */}
          <div className="absolute -left-14 top-10 rotate-[-45deg] bg-[#0FB3AF] px-16 py-1 text-center font-bold">
            <span className="block text-center text-white">Trusted Investor</span>
          </div>

          <div className="p-8">
            <div className="flex mt-12">
              {/* Profile Section */}
              <div className="flex items-start justify-between mt-10">
                <div className="relative">
                  <div className="relative h-32 w-32">
                    <div className="h-full w-full rounded-full bg-[#0FB3AF]/90">
                      <div className="h-full w-full rounded-full bg-[#7FB7B5]/10"></div>
                      <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-white" />
                    </div>
                    <button className="absolute bottom-0 right-0 rounded-full bg-[#7FB7B5] p-2 text-white hover:bg-[#7FB7B5]/90">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-2">
                {/* Title and Name */}
                <div className="mt-6">
                  <p className="text-lg text-[#7FB7B5]">
                    CPO & Co-founder Realtor
                  </p>
                  <div className="flex items-center gap-2 justify-between">
                    <h1 className="mt-2 text-4xl font-bold">Test User</h1>
                    <button className="text-[#7FB7B5] hover:text-[#7FB7B5]/90 ">
                      <Edit className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-lg text-gray-600">
                  Welcome to my profile! I'm Test User, a real estate investor
                  with a focus on high-value residential and commercial
                  properties. With years of experience I...
                </p>
              </div>
            </div>

            {/* Share Button */}
            <div className="mt-8 flex justify-end rounded-full">
              <Button
                variant="outline"
                className="gap-2 border-[#6eaaa8] bg-[#7FB7B5]/10 text-black hover:bg-[#7FB7B5]/10 rounded-full"
              >
                <Share2 className="h-6 w-6 bg-[#7FB7B5] text-white p-0.5 rounded" />
                SHARE
              </Button>
            </div>
          </div>
        </Card>

        {/* Right Card */}
        <Card className="shadow-lg">
          <div className="p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">More information</h2>
              <Edit className="h-6 w-6 text-[#7FB7B5]" />
            </div>

            <p className="mb-10 text-lg text-gray-600">
              For more details please use below provided modes, I will try to
              revert back ASAP.
            </p>

            {/* Contact Options */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Mail className="h-8 w-8 text-[#7FB7B5]" />
                <div>
                  <p className="text-gray-600">Send me a message</p>
                  <Button className="mt-2 bg-[#7FB7B5] hover:bg-[#7FB7B5]/90">
                    Get in Contact
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-8 w-8 items-center justify-center text-[#7FB7B5]">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Visit my website</p>
                  <a
                    href="http://www.test_user.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center text-[#7FB7B5] hover:underline"
                  >
                    www.test_user.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141616] text-zinc-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Contact Section */}
          <div className="bg-[#202020] w-[18rem] p-5 rounded-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ad46/b1d7/2403c28e995c4f099c23d0fb97df41f4?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h8n84JTt7vwxArhAQmN28rbTZcYOGDn-KZoE7q8Jm8oKxEuIwe0UgIzBY8mZrs~y2VX8jQLK5J-rWR8EmMoC-ip29P61T4lpb1oBv0XGU2In71VhtwY8YGNa3sshJ~8Be1IsLEk2U8ciLJBlJNWAMf6U45m7mnVvinKJbfldkSGmCwBE-xtIc-bNFKVCaD5AYsy~TyLSe--Ud0gl115ARBdl16uwrRBGrt~8yJt91F5JpiPa0Br4kh-ZFnygiCTX19YinLEoYqGmVZ5mfwobBJMnwdCCFJ~PtNgXjT5sN9udndbRqgbHXI4lIcewGZRqrbX3GgxhAPLLdrzssl5RIw__"
                  alt="Realtor Logo"
                  width={160}
                  height={40}
                  className="h-10 w-40"
                />
              </div>

              <div className="space-y-4 max-w-lg">
                <p className="text-sm font-medium text-white">
                  Empowering trusted connections between agents and investors.
                </p>
                <p className="text-sm text-white">
                  Fostering opportunities through trust and collaboration.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  CONTACT US
                </h3>
                <div className="flex gap-2">
                  {[MapPin, Phone, Mail, Globe].map((Icon, index) => (
                    <div
                      key={index}
                      className="bg-[#333333] p-4 rounded-full hover:bg-[#444444] transition-colors cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="lg:col-span-1 lg:ml-16">
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a
                  href="/about"
                  className="hover:text-teal-300 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/agents"
                  className="hover:text-teal-300 transition-colors"
                >
                  Agents
                </a>
              </li>
              <li>
                <a
                  href="/agencies"
                  className="hover:text-teal-300 transition-colors"
                >
                  Agencies
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="hover:text-teal-300 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/policies"
                  className="hover:text-teal-300 transition-colors"
                >
                  REALTOR Policies
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-teal-300 transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">FEATURES</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a
                  href="/live-feeds"
                  className="hover:text-teal-300 transition-colors"
                >
                  Live Feeds
                </a>
              </li>
              <li>
                <a
                  href="/messenger"
                  className="hover:text-teal-300 transition-colors"
                >
                  Messenger
                </a>
              </li>
              <li>
                <a
                  href="/investment-plans"
                  className="hover:text-teal-300 transition-colors"
                >
                  Investment Plans
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-teal-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="hover:text-teal-300 transition-colors"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Twitter ( X )
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  Gmail
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-sm mb-4">
              Join the worldwide community!. Never miss an update!
              <span className="text-teal-300"> Subscribe</span> for instant
              notifications and daily newsletters tailored for you.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 bg-[#202020] rounded-[28px] p-2 w-full max-w-xl"
            >
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border-0 text-gray-300 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:outline-none text-lg h-12"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-[#7FD6D3] hover:bg-[#6BC4C1] rounded-full h-12 w-12 p-0"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            Copyright {new Date().getFullYear()}, All Right Reserved Realtor
          </p>
          <nav className="flex gap-6">
            <a
              href="/"
              className="text-sm hover:text-teal-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/terms"
              className="text-sm hover:text-teal-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-sm hover:text-teal-300 transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-teal-300 transition-colors"
            >
              Contact us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

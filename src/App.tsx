import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  Play,
  ExternalLink,
  Heart,
  Star,
  Shield,
  Zap,
  Target,
  Menu,
  X,
} from "lucide-react";

const LinkBlitzLanding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "1-Click Automation",
      description:
        "Connect instantly with the click of a button. No manual work required.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Targeting",
      description:
        "Only works on people pages. Intelligent and precise targeting.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description:
        "Built with LinkedIn's best practices. Your account stays protected.",
      color: "from-pink-500 to-orange-500",
    },
  ];

  const steps = [
    "Install from Chrome Web Store",
    "Open LinkedIn",
    "Click 'Auto Connect'",
    "Grow your network!",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "LinkBlitz saved me hours of manual work. My network grew 300% in just one month!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      content:
        "The automation is seamless and safe. Highly recommend for anyone serious about networking.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  src="/icon512_rounded.png"
                  alt="LinkBlitz Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">LinkBlitz</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Demo
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                How It Works
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Install Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#demo"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Demo
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                How It Works
              </a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full font-medium">
                Install Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Now Available on Chrome Web Store
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Automate Your
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {" "}
                LinkedIn{" "}
              </span>
              Networking
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with thousands of professionals effortlessly. Grow your
              network 10x faster with smart automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold px-8 py-4 lg:px-10 lg:py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50">
                <span className="flex items-center justify-center">
                  Install LinkBlitz Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a
                href="#demo"
              >
              <button className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium px-6 py-3 rounded-full hover:bg-white/50 transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              </a>
            </div>

            {/* Social Proof */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>10,000+ active users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>2M+ connections made</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose LinkBlitz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful automation tools designed to supercharge your LinkedIn
              networking while keeping your account safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 lg:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Live Demo
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              See LinkBlitz in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to automate your LinkedIn connections and
              grow your professional network.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Video Container with Modern Design */}
            <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Video Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 lg:p-4 shadow-2xl border border-white/30 overflow-hidden">
                {/* Demo Badge */}
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  DEMO CONTENT
                </div>

                {/* Video Wrapper */}
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  {/* Video Overlay for Demo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10 pointer-events-none"></div>

                  <iframe
                    src="https://www.youtube.com/embed/C8hEa2qb46k"
                    title="Demo Video - Foundations for Machine Learning"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  ></iframe>

                  {/* Demo Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              L
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">
                              LinkBlitz Demo
                            </div>
                            <div className="text-white/70 text-xs">
                              Placeholder content for demonstration
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-white/90 text-xs font-medium">
                            LIVE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info Section */}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        Automated LinkedIn Networking
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base">
                        See how LinkBlitz can help you connect with thousands of
                        professionals automatically.
                        <span className="inline-block ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Demo content shown
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>HD Quality</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>2:30 min</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                      Try LinkBlitz Now
                    </button>
                    <button className="flex-1 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold py-3 px-6 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  2M+
                </div>
                <div className="text-sm text-gray-600">Connections Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start automating your LinkedIn connections in under 5 minutes. No
              technical knowledge required.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg scale-110"
                        : "bg-white/60 border-2 border-gray-200 text-gray-400"
                    }`}
                  >
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0 pt-2">
                    <p
                      className={`text-lg font-medium transition-colors duration-500 ${
                        index <= activeStep ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Loved by Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="relative bg-white/80 backdrop-blur-sm border-t border-white/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  src="/icon512_rounded.png"
                  alt="LinkBlitz Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">LinkBlitz</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by</span>
              <a
                href="https://devansh-singh-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                Devansh Singh
              </a>
            </div>

            <div className="flex justify-center">
              <a
                href="https://devansh-singh-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>View Portfolio</span>
                <ExternalLink className="w-4 h-4 text-blue-500" />
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-2">
                © 2025 LinkBlitz. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Supercharge your LinkedIn networking with intelligent automation
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkBlitzLanding;

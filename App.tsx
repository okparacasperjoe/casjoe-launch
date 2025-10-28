import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import PaymentModal from './components/PaymentModal';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; value: string }> = ({ icon, title, description, value }) => (
  <div className="bg-[#010175] p-6 rounded-xl shadow-lg hover:shadow-[#ffa600]/20 transform hover:-translate-y-1 transition-all duration-300 border border-[#ffa600]/20">
    <div className="flex items-center space-x-4">
      <div className="bg-[#000066] p-3 rounded-full">{icon}</div>
      <div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
    <p className="mt-4 text-right font-semibold text-[#ffa600]">{value}</p>
  </div>
);

const BenefitItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-[#010175] p-3 rounded-full text-[#ffa600]">
            {icon}
        </div>
        <div>
            <h4 className="text-xl font-bold text-white">{title}</h4>
            <p className="mt-1 text-gray-300">{description}</p>
        </div>
    </div>
);


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const targetDate = "2025-12-07T23:59:59";

  const shareUrl = encodeURIComponent('https://casjoe.com/founders-offer');
  const shareTitle = encodeURIComponent("Don't miss the Casjoe Founder's Offer!");
  const shareTextTwitter = encodeURIComponent("Get over ₦1 Million ($700+) worth of business tools for a one-time payment with the Casjoe Founder's Offer!");
  const shareTextLinkedIn = encodeURIComponent("Get over ₦1 Million ($700+) worth of business tools for a one-time payment of just ₦100,000 ($70). This is a limited-time offer!");
  const shareHashtags = "Casjoe,FoundersOffer,BusinessTools";

  const features = [
    { title: "Casjoe ERP Platform", description: "Manage your entire business operations", value: "Worth: $120/year", icon: <BriefcaseIcon /> },
    { title: "Casjoe Pay", description: "Get your virtual card and receive global payments", value: "Worth: Priceless", icon: <CreditCardIcon /> },
    { title: "Casjoe Shop", description: "Sell physical and digital products", value: "Worth: $150/year", icon: <ShoppingCartIcon /> },
    { title: "Casjoe Link", description: "Create a smart business link hub", value: "Worth: $120/year", icon: <LinkIcon /> },
    { title: "Casjoe School", description: "2 years free access to a full ERP for schools", value: "Worth: $240", icon: <AcademicCapIcon /> },
    { title: "Casjoe Mail", description: "Send unlimited marketing emails", value: "Worth: $180/year", icon: <EnvelopeIcon /> },
    { title: "Casjoe Academy", description: "Sell your online courses", value: "Worth: $100/year", icon: <BookOpenIcon /> },
    { title: "Casjoe Post", description: "Manage and schedule posts across all platforms", value: "Worth: $96/year", icon: <CalendarDaysIcon /> },
    { title: "Casjoe Cloud (1TB)", description: "Secure file storage for 1 year", value: "Worth: $150", icon: <CloudIcon /> },
  ];

  const benefits = [
      { title: "Pay once — no subscriptions", description: "Own these tools forever. No hidden costs or recurring fees.", icon: <SparklesIcon /> },
      { title: "Save ₦900,000+ instantly", description: "Get over ₦1M worth of tools for just ₦100K.", icon: <CurrencyDollarIcon /> },
      { title: "All-in-one ecosystem", description: "Everything integrated seamlessly to power your business.", icon: <CpuChipIcon /> },
      { title: "Founding user community", description: "Join an exclusive network of early adopters.", icon: <UsersIcon /> },
  ];

  return (
    <div className="min-h-screen bg-[#000066] text-white font-sans">
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Event Hero Section */}
        <section id="event-hero" className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                You're Invited to the
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#ffa600] mt-2">
                Casjoe Virtual Product Launch
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                Join us as we unveil the future of business tools and celebrate our official launch.
            </p>
            <div className="mt-8 inline-block bg-[#010175] border border-[#ffa600]/30 rounded-2xl p-8 md:p-10 shadow-xl">
                 <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 gap-x-12 text-lg">
                    <div className="flex items-center gap-3">
                      <EventCalendarIcon />
                      <span className="font-semibold">Sunday, 7th December 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon />
                      <span className="font-semibold">4:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ZoomIcon />
                      <span className="font-semibold">Live on Zoom</span>
                    </div>
                 </div>
            </div>
            <div className="mt-10">
                <a
                  href="https://luma.com/xxghk9dr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#ffa600]/30"
                >
                  Register for Event
                </a>
            </div>
        </section>

        <CountdownTimer targetDate={targetDate} />

        {/* Offer Header Section */}
        <header className="text-center pt-8 md:pt-12">
          <div className="inline-block bg-[#ffa600] text-[#000066] font-bold px-4 py-1 rounded-full text-sm mb-4 animate-pulse">
            Limited Time Founder's Offer - Ends December 7th, 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Get Over <span className="text-[#ffa600]">₦1 Million ($700+)</span> Worth of Tools
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">for Just <span className="text-[#ffa600]">₦100,000 or $70</span></h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Pay once. Own forever. Build your business the smart way.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#ffa600]/30">
              Claim Offer Now
            </button>
            <a href="https://flutterwave.com/pay/casjoepay" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border-2 border-[#ffa600] text-[#ffa600] hover:bg-[#ffa600] hover:text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300">
               Become a Sponsor
            </a>
          </div>

           {/* Social Share Section */}
           <div className="mt-12">
            <p className="text-gray-300 font-semibold">Share This Unbeatable Offer</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="inline-block bg-[#010175] p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#1877F2]">
                <FacebookIcon />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTextTwitter}&hashtags=${shareHashtags}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="inline-block bg-[#010175] p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#1DA1F2]">
                <TwitterIcon />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${shareTextLinkedIn}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="inline-block bg-[#010175] p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#0A66C2]">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </header>

        {/* What You'll Get Section */}
        <section id="features" className="py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What You'll Get Instantly with the Offer</h2>
            <p className="mt-3 text-lg text-gray-300">A complete business ecosystem worth over ₦1,000,000</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
            <div className="bg-[#010175] border border-[#ffa600]/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-2xl shadow-[#ffa600]/10">
                <h3 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffa600] to-[#ffc34d]">₦100,000</h3>
                <p className="text-2xl font-semibold text-white mt-2">One-Time Payment</p>
                <p className="text-gray-200 mt-1">Pay once, own forever</p>

                <div className="mt-8">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-200 mb-2">
                        <span>Limited slots available</span>
                        <span>75% claimed</span>
                    </div>
                    <div className="w-full bg-[#000066] rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-[#ffa600] to-[#ffc34d] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm text-[#ffa600] mt-3 font-semibold">After December 7th: <span className="line-through">₦100,000</span> ₦600,000+</p>
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-10 w-full max-w-md bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#ffa600]/30">
                    Claim This Offer Now
                </button>
            </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Why This Offer Is Unbeatable</h2>
            </div>
            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold">Don't Miss The Launch & This Limited Offer</h2>
            <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">Join thousands of businesses building smarter with Casjoe</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-[#ffa600]/30">
                Get The Offer Now
            </button>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto bg-[#010175] rounded-2xl p-8 text-center border border-transparent">
            <h2 className="text-2xl md:text-3xl font-bold">Stay Updated with Digital Insights</h2>
            <p className="mt-3 text-gray-300">Get the latest trends, tips, and strategies for digital transformation delivered to your inbox. Join 1,000+ business leaders who trust our insights.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md bg-[#000066] border border-[#010175] focus:ring-2 focus:ring-[#ffa600] focus:outline-none text-white" />
              <button type="submit" className="flex-shrink-0 bg-[#ffa600] hover:bg-[#ffb733] text-[#000066] font-bold py-3 px-6 rounded-md transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Casjoe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// --- SVG Icons ---
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);
const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);
const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);
const EnvelopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const CalendarDaysIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4 4-4 5.293 5.293a1 1 0 010 1.414L10 21" />
    </svg>
);
const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);
const CpuChipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1m-7 1h14a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const EventCalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ZoomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffa600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

// --- Social Media Icons ---
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.62 1.924 2.422 3.314 4.557 3.354-1.742 1.365-3.929 2.16-6.302 2.16-.41 0-.814-.024-1.21-.072 2.115 1.362 4.63 2.176 7.334 2.176 8.804 0 13.616-7.29 13.616-13.617 0-.207-.005-.412-.014-.617.935-.675 1.75-1.52 2.4-2.493z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);


export default App;
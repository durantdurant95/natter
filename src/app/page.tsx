import { Button } from "@/components/ui/button";
import {
  MessagesSquare,
  Moon,
  PenLine,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Footerdemo } from "@/components/ui/footer-section";
import { ModeToggle } from "@/components/ui/mode-toggle";
import loginImage from "../../public/login-image.jpg";

const features = [
  {
    icon: PenLine, // Icon for posting
    title: "Real-Time Posting",
    description:
      "Share your thoughts instantly. Your posts appear in real-time for your followers to engage with.",
  },
  {
    icon: MessagesSquare, // Icon for conversations
    title: "Engaging Conversations",
    description:
      "Reply, like, and repost messages effortlessly to keep the conversation going and build your community.",
  },
  {
    icon: TrendingUp, // Icon for trending topics
    title: "Trending Topics",
    description:
      "Stay updated with trending discussions and join the hottest conversations happening in real time.",
  },
  {
    icon: Search, // Icon for search
    title: "Advanced Search",
    description:
      "Find people, posts, and hashtags quickly with a powerful search engine designed for precision.",
  },
  {
    icon: ShieldCheck, // Icon for security
    title: "Privacy & Security",
    description:
      "Control who sees your content and interact with others while keeping your data secure.",
  },
  {
    icon: Moon, // Icon for dark mode
    title: "Light & Dark Mode",
    description:
      "Customize your experience with a sleek, user-friendly interface available in both light and dark themes.",
  },
];

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Content Creator",
    quote:
      "Natter has completely changed the way I engage with my audience. The real-time interaction is a game-changer!",
  },
  {
    name: "David Carter",
    role: "Tech Entrepreneur",
    quote:
      "I love how smooth and intuitive Natter is. It's the perfect platform for sharing ideas and networking with like-minded people.",
  },
  {
    name: "Sophia Martinez",
    role: "Journalist",
    quote:
      "As a journalist, staying on top of trending topics is crucial. Natter makes it easy to follow breaking news and engage with the community.",
  },
  {
    name: "Michael Lee",
    role: "Marketing Specialist",
    quote:
      "The engagement on Natter is incredible! The platform is built for meaningful interactions, making it ideal for brand growth.",
  },
  {
    name: "Jessica Brown",
    role: "Freelance Writer",
    quote:
      "I love the clean and modern interface. Posting, discovering new content, and interacting with others has never been easier!",
  },
  {
    name: "Daniel Robinson",
    role: "Software Engineer",
    quote:
      "Natter is fast, responsive, and fun to use. It’s my go-to platform for tech discussions and staying updated with industry trends!",
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-xl font-extrabold text-primary">Natter</span>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-60 bg-gradient-to-b from-background to-background/80 dark:from-background/20 dark:to-background/0">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-in">
                    Connect, Share, and Natter: Your Voice, Your Community!
                  </h1>
                  <p className="text-muted-foreground md:text-xl animate-in">
                    Welcome to Natter, where your voice matters! Connect and
                    engage with a vibrant community that values authentic
                    conversations. Share your thoughts and make every natter
                    count!
                  </p>
                </div>
              </div>
              <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border bg-background p-2 shadow-2xl animate-in">
                <Image
                  src={loginImage}
                  alt="Donezo Dashboard Preview"
                  width={1200}
                  height={800}
                  className="w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your tasks and projects
                  efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="relative h-80">
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <div className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                      <div className="relative flex flex-1 flex-col items-center justify-center gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-3 text-center">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                            {feature.title}
                          </h3>
                          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Voices of Natter
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real people. Real conversations. See how Natter is
                  transforming the way users connect, share, and engage—one post
                  at a time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <div className="relative flex flex-col justify-between space-y-4 rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                      <div className="space-y-2">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                        <p className="text-muted-foreground italic">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of teams already using Donezo to boost their
                productivity
              </p>
              <Button size="lg" asChild>
                <Link href="/login">Sign Up for Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* <Footerdemo /> */}
    </div>
  );
}

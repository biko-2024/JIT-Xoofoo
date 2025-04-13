import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="JIT Xoofoo Logo"
              width={200}
              height={200}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            JIT Xoofoo W/Q/GIYOORGISII
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Serving our community with dedication, unity, and spiritual growth.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-white text-blue-800 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
              <Link href="/members">Join Our Community</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
              <Link href="/background">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Welcome to JIT Xoofoo
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg sm:leading-7">
            Our organization is dedicated to fostering spiritual growth, community service, and education.
          </p>
        </div>

        <div className="mx-auto grid gap-4 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Member Registration</CardTitle>
              <CardDescription>Join our growing community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Register as a member to participate in our various activities and programs.
              </p>
              <Button asChild>
                <Link href="/members">Register Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
              <CardDescription>How we serve the community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                We offer various services including education, community support, and spiritual guidance.
              </p>
              <Button asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
              <CardDescription>Learn about our journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Discover the rich history and background of JIT Xoofoo W/Q/GIYOORGISII.
              </p>
              <Button asChild>
                <Link href="/history">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Telegram Community Section */}
      <section className="bg-blue-50 py-12">
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight">
              Join Our Telegram Communities
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg sm:leading-7">
              Stay connected with our various departments and participate in community discussions
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <a
              href="https://t.me/yaaiimooraaxwg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.376c-.3.048-.512.026-.784-.04-.273-.066-3.334-1.265-3.78-1.54-.16-.1-.41-.252-.457-.252-.09 0-.18.252-.18.252-.09.181-.273.597-1.183.252 0 0-2.833-1.54-3.196-2.832-.362-1.292.542-2-1.732-5.063-1.732-3.062 3.015-1.37 3.015-1.37 1.275.767 1.458 1.67 1.458 2.022 0 .351-.09 1.832 2.107 0 0 0 2.698-3.62 3.787-3.62 1.09 0 4.285 1.292 1.732 2.434 0 0-1.82.893-2.743 1.54-.922.646-.922 1.232.18 1.918 0 0 3.407 2.553 3.497 2.765.09.212.362.404.09.767-.271.362-1.722.524-2.02.739-.273.292.362.646.362.646l1.444.767c.18.212.09.575-.09.767-.181.191-.844.34-1.444.19l-1.09-.646c-.182-.212-.635-.06-.635.151 0 .212.453.767.453.767.09.151.09.362-.09.404z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Main Group</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Waliigal Yaa'ii Moora
              </p>
            </a>

            <a
              href="https://t.me/kutaa_faaruu_jimma_jit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Kutaa Faaruu</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Faaruu Jit
              </p>
            </a>

            <a
              href="https://t.me/+xWxS_8rQTOthOGI0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Kutaa Midiyaa</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Midiyaa Jit
              </p>
            </a>

            <a
              href="https://t.me/http_TKXWQG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Kutaa Mana Galmee</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Mana Galmee Jit
              </p>
            </a>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
              <Link href="/services">View All Groups</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Ready to Get Involved?</h2>
            <p className="mb-6 max-w-[600px] text-muted-foreground md:text-lg">
              Join our community today and be a part of our mission to serve and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                <Link href="/members">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <a href="https://t.me/bikila2022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.376c-.3.048-.512.026-.784-.04-.273-.066-3.334-1.265-3.78-1.54-.16-.1-.41-.252-.457-.252-.09 0-.18.252-.18.252-.09.181-.273.597-1.183.252 0 0-2.833-1.54-3.196-2.832-.362-1.292.542-2-1.732-5.063-1.732-3.062 3.015-1.37 3.015-1.37 1.275.767 1.458 1.67 1.458 2.022 0 .351-.09 1.832 2.107 0 0 0 2.698-3.62 3.787-3.62 1.09 0 4.285 1.292 1.732 2.434 0 0-1.82.893-2.743 1.54-.922.646-.922 1.232.18 1.918 0 0 3.407 2.553 3.497 2.765.09.212.362.404.09.767-.271.362-1.722.524-2.02.739-.273.292.362.646.362.646l1.444.767c.18.212.09.575-.09.767-.181.191-.844.34-1.444.19l-1.09-.646c-.182-.212-.635-.06-.635.151 0 .212.453.767.453.767.09.151.09.362-.09.404z"/>
                  </svg>
                  Contact Developer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

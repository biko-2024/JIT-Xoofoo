import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Layers, BookOpen, UserPlus, Music, Video, HeartHandshake, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    title: "Education",
    description: "We provide educational programs and resources to help our members grow in knowledge and wisdom.",
    telegramLink: "",
  },
  {
    icon: <Music className="h-10 w-10 text-blue-600" />,
    title: "Kutaa faaruu",
    description: "Our music department organizes worship sessions and trains members in various musical instruments and vocals.",
    telegramLink: "https://t.me/kutaa_faaruu_jimma_jit",
  },
  {
    icon: <Video className="h-10 w-10 text-blue-600" />,
    title: "Kutaa midiyaa",
    description: "Our media department handles all audio-visual needs, live streaming, and content creation for our community.",
    telegramLink: "https://t.me/+xWxS_8rQTOthOGI0",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-blue-600" />,
    title: "Kutaa gochagarii",
    description: "This department focuses on community service, outreach programs, and volunteering opportunities.",
    telegramLink: "",
  },
  {
    icon: <Building className="h-10 w-10 text-blue-600" />,
    title: "Kutaa mana galmee",
    description: "This department manages our facilities, resources, and ensures everything runs smoothly during our activities.",
    telegramLink: "https://t.me/http_TKXWQG",
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-600" />,
    title: "Kutaa misomaa",
    description: "This department is responsible for planning, organizing, and executing our various programs and activities.",
    telegramLink: "",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    title: "Kutaa barumsaa",
    description: "Our education department provides teaching, training, and mentorship to our members.",
    telegramLink: "",
  },
  {
    icon: <UserPlus className="h-10 w-10 text-blue-600" />,
    title: "Kutaa baachii",
    description: "This department focuses on membership recruitment, onboarding, and maintaining member relationships.",
    telegramLink: "",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-muted-foreground">
          We provide various services to our members and the community at large.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="transition-all duration-300 hover:shadow-lg flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              {service.icon}
              <div>
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
            {service.telegramLink && (
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="outline" className="w-full gap-2">
                  <a href={service.telegramLink} target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.376c-.3.048-.512.026-.784-.04-.273-.066-3.334-1.265-3.78-1.54-.16-.1-.41-.252-.457-.252-.09 0-.18.252-.18.252-.09.181-.273.597-1.183.252 0 0-2.833-1.54-3.196-2.832-.362-1.292.542-2-1.732-5.063-1.732-3.062 3.015-1.37 3.015-1.37 1.275.767 1.458 1.67 1.458 2.022 0 .351-.09 1.832 2.107 0 0 0 2.698-3.62 3.787-3.62 1.09 0 4.285 1.292 1.732 2.434 0 0-1.82.893-2.743 1.54-.922.646-.922 1.232.18 1.918 0 0 3.407 2.553 3.497 2.765.09.212.362.404.09.767-.271.362-1.722.524-2.02.739-.273.292.362.646.362.646l1.444.767c.18.212.09.575-.09.767-.181.191-.844.34-1.444.19l-1.09-.646c-.182-.212-.635-.06-.635.151 0 .212.453.767.453.767.09.151.09.362-.09.404z"/>
                    </svg>
                    Join Telegram Group
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-slate-50 p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Community Telegram Groups</h2>
          <p className="mt-2 text-muted-foreground">
            Join our Telegram groups to stay connected with our community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Waliigal Yaa'ii Moora</CardTitle>
              <CardDescription>
                Our general assembly group for important announcements and discussions
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="default" className="w-full gap-2">
                <a href="https://t.me/yaaiimooraaxwg" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.376c-.3.048-.512.026-.784-.04-.273-.066-3.334-1.265-3.78-1.54-.16-.1-.41-.252-.457-.252-.09 0-.18.252-.18.252-.09.181-.273.597-1.183.252 0 0-2.833-1.54-3.196-2.832-.362-1.292.542-2-1.732-5.063-1.732-3.062 3.015-1.37 3.015-1.37 1.275.767 1.458 1.67 1.458 2.022 0 .351-.09 1.832 2.107 0 0 0 2.698-3.62 3.787-3.62 1.09 0 4.285 1.292 1.732 2.434 0 0-1.82.893-2.743 1.54-.922.646-.922 1.232.18 1.918 0 0 3.407 2.553 3.497 2.765.09.212.362.404.09.767-.271.362-1.722.524-2.02.739-.273.292.362.646.362.646l1.444.767c.18.212.09.575-.09.767-.181.191-.844.34-1.444.19l-1.09-.646c-.182-.212-.635-.06-.635.151 0 .212.453.767.453.767.09.151.09.362-.09.404z"/>
                  </svg>
                  Join Main Group
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle>Website Contact</CardTitle>
              <CardDescription>
                Have questions or feedback about our website? Contact our website developer
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full gap-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                <a href="https://t.me/bikila2022" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.376c-.3.048-.512.026-.784-.04-.273-.066-3.334-1.265-3.78-1.54-.16-.1-.41-.252-.457-.252-.09 0-.18.252-.18.252-.09.181-.273.597-1.183.252 0 0-2.833-1.54-3.196-2.832-.362-1.292.542-2-1.732-5.063-1.732-3.062 3.015-1.37 3.015-1.37 1.275.767 1.458 1.67 1.458 2.022 0 .351-.09 1.832 2.107 0 0 0 2.698-3.62 3.787-3.62 1.09 0 4.285 1.292 1.732 2.434 0 0-1.82.893-2.743 1.54-.922.646-.922 1.232.18 1.918 0 0 3.407 2.553 3.497 2.765.09.212.362.404.09.767-.271.362-1.722.524-2.02.739-.273.292.362.646.362.646l1.444.767c.18.212.09.575-.09.767-.181.191-.844.34-1.444.19l-1.09-.646c-.182-.212-.635-.06-.635.151 0 .212.453.767.453.767.09.151.09.362-.09.404z"/>
                  </svg>
                  Contact @bikila2022
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

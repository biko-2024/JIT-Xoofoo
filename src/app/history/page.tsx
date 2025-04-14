import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "2004",
    title: "Foundation",
    description:
      "Yeroo jalqabaaf Inistitiyuutiin Teeknoolojii Jimmaa hojii baruu fi barsiisuu kan eegale bara 2004 ALI itt. ",
  },
  {
    year: "2012",
    title: "Growth Period",
    description:
      "The organization expanded its membership and began offering more services to the community.",
  },
  {
    year: "2015",
    title: "Formal Registration",
    description:
      "JIT Xoofoo W/Q/GIYOORGISII became officially registered as a non-profit organization.",
  },
  {
    year: "2017",
    title: "Expanded Services",
    description:
      "We developed specialized departments to better serve our community's needs.",
  },
  {
    year: "2019",
    title: "Community Outreach",
    description:
      "Started major community outreach programs and established partnerships with other organizations.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Embraced technology to reach more people and provide better services during challenging times.",
  },
  {
    year: "2023",
    title: "New Headquarters",
    description:
      "Established a new headquarters to accommodate our growing membership and activities.",
  },
  {
    year: "Present",
    title: "Continuing the Mission",
    description:
      "Today, we continue to serve our community with dedication, adapting to new challenges and opportunities.",
  },
];

export default function HistoryPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Our History</h1>
        <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
          The journey of JIT Xoofoo W/Q/GIYOORGISII is marked by dedication,
          growth, and service to our community. Here's a glimpse of our journey
          through the years.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 h-full w-1 -translate-x-1/2 bg-blue-200" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Year marker */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Content card - alternate sides for larger screens */}
                <div
                  className={`sm:w-1/2 ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"} pl-12 sm:pl-0 ${index % 2 === 0 ? "sm:pr-10" : "sm:pl-10"}`}
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-5">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-blue-600">
                            {event.year}
                          </span>
                          <h3 className="text-xl font-semibold">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Download Section */}
      <div className="container py-10">
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-800">Historical Documents</CardTitle>
            <CardDescription className="text-blue-600">Download or view our historical documents and learn more about our journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/80 hover:bg-white transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">JIT Xoofoo History Document</h3>
                    <p className="text-sm text-blue-600">Detailed history of our organization</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <a href="/pdfs/history.pdf" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </a>
                  </Button>
                  <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                    <a href="/pdfs/history.pdf" download="history.pdf">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

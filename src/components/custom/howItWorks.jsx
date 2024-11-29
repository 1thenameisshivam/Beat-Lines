import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const content = [
  {
    title: "Create Your Queue",
    description:
      "Start by generating a unique dashboard that you can share instantly with your audience. Set up custom preferences, branding, and playlist rules in seconds. Our intuitive interface makes it easy to get your collaborative music experience up and running.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="absolute text-center text-3xl font-bold">
          Create Your Queue
        </div>
      </div>
    ),
  },
  {
    title: "Add and Vote for Songs",
    description:
      "Let participants easily add songs from multiple platforms including Spotify, YouTube Music, and SoundCloud. Enable democratic playlist curation with our real-time voting system, ensuring the most popular tracks rise to the top.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="absolute text-center text-3xl font-bold">
          Add and Vote for Songs
        </div>
      </div>
    ),
  },
  {
    title: "Smart Queue Management",
    description:
      "Our intelligent algorithms ensure balanced playback and fair song rotation. Set rules for song duration, genre mixing, and artist variety to maintain the perfect atmosphere for your venue or event.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="absolute text-center text-3xl font-bold">
          Smart Queue Management
        </div>
      </div>
    ),
  },
  {
    title: "Enjoy Perfect Sync",
    description:
      "Experience flawless synchronized playback across all connected devices. Take control with advanced admin features, including the ability to skip, reorder, and moderate song requests in real-time.",
    content: (
      <div className="h-full flex items-center justify-center text-white">
        <div className="absolute text-center text-3xl font-bold">
          Enjoy Perfect Sync
        </div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-3 overflow-hidden bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How BeatLine Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the future of collaborative music management
          </p>
        </div>

        <div className="h-[80vh] overflow-hidden">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}

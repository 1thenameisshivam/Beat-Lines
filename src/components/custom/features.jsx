"use client";
import { Users, Shield, Music, Headphones, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Collaborative Queues",
    description:
      "Create dynamic playlists where everyone can contribute their favorite tracks and vote in real-time.",
    icon: Users,
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    title: "Smart Admin Controls",
    description:
      "Take command with powerful moderation tools, playlist management, and seamless device synchronization.",
    icon: Shield,
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Universal Compatibility",
    description:
      "Works with popular music services including Spotify, YouTube Music, and SoundCloud.",
    icon: Globe,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "Live Voting System",
    description:
      "Democratic song selection with real-time voting and crowd-sourced playlist curation.",
    icon: Music,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Smart Queue Management",
    description:
      "Intelligent algorithms ensure balanced playback and fair song rotation for all participants.",
    icon: Clock,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Multi-Room Audio",
    description:
      "Synchronize music across multiple spaces with zero latency and perfect harmony.",
    icon: Headphones,
    gradient: "from-yellow-500 to-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container relative">
        <div className="text-center r">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Why Choose BeatLine?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create the perfect shared music experience
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-white">
                <div className="relative z-20 h-full p-6">
                  <div
                    className={`inline-flex rounded-lg bg-gradient-to-br ${feature.gradient} p-3`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

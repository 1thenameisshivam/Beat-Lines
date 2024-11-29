/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  Play,
  Share2,
  ThumbsUp,
  Vote,
  Music2,
  Zap,
  Shield,
  BookOpen,
} from "lucide-react";
import FeatureCard from "./featureCars";
import FaqItem from "./feaqItem";
import QuickStartStep from "./quickStartStep";
import Link from "next/link";
const DocsContent = () => {
  const quickStartSteps = [
    {
      icon: Play,
      title: "Create a Queue",
      description: "Set up your dashboard and generate a sharable link.",
    },
    {
      icon: Music2,
      title: "Add Songs",
      description:
        "Allow your audience to paste YouTube links or search for songs directly.",
    },
    {
      icon: ThumbsUp,
      title: "Vote & Play",
      description:
        "Play songs with the most votes, ensuring a crowd-curated playlist.",
    },
  ];

  const features = [
    {
      icon: Vote,
      title: "Real-Time Voting System",
      description:
        "Democratic playlist curation with instant vote updates and fair song selection.",
    },
    {
      icon: Zap,
      title: "Smart Queue Management",
      description:
        "Intelligent system preventing duplicates and maintaining perfect flow.",
    },
    {
      icon: Share2,
      title: "Multiplatform Integration",
      description:
        "Seamless support for YouTube, Spotify, and SoundCloud in one place.",
    },
    {
      icon: Shield,
      title: "Admin Controls",
      description:
        "Complete control over your queue with moderation tools and playlist management.",
    },
  ];

  const faqs = [
    {
      question: "How do I create a queue?",
      answer:
        "Simply log in to your BeatLine account, click 'Create New Queue', and follow the setup wizard. You'll get a unique link to share with your audience instantly.",
    },
    {
      question: "Can I use BeatLine in offline events?",
      answer:
        "Yes! BeatLine works great for live events. Just ensure you have a stable internet connection for streaming the music content.",
    },
    {
      question: "How do participants vote for songs?",
      answer:
        "Participants can click the vote button next to any song in the queue. The songs with the most votes automatically move up in the playlist.",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-700 text-white">
          <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Documentation</h1>
            </div>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl">
              Learn how to use BeatLine to create the ultimate collaborative
              music experience
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            <div className="prose prose-indigo max-w-none mb-8">
              <p className="text-gray-600 text-lg mb-8">
                BeatLine makes it easy to manage collaborative music queues for
                events, parties, or any gathering. Follow these simple steps to
                get started with your first queue.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {quickStartSteps.map((step, index) => (
                <QuickStartStep key={index} {...step} />
              ))}
            </div>
          </section>
          {/* Features */}
          <section id="features" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              {faqs.map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
          </section>

          {/* Help Section */}
          <section className="bg-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <a
              href="https://www.linkedin.com/in/shivamkumar8987/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Contact Support
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default DocsContent;

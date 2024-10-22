import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'My Podcast',
  description: 'Podcast Landing Page',
  openGraph: {
    title: 'My Podcast',
    description: 'The latest episodes and news',
    url: 'https://my-podcast.com',
    siteName: 'My Podcast',
    images: [
      {
        url: 'https://my-podcast.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
};


export default function Home() {
  return (
    <div>
      <Navbar/>

      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white p-12 text-center">
        <h2 className="text-4xl font-bold">Listen to the Latest Episodes!</h2>
        <p className="mt-4">Your podcast for tech, creativity, and more.</p>
        <button className="mt-6 bg-yellow-500 px-6 py-3 rounded">Subscribe Now</button>
      </section>

      {/* Episodes */}
      <section id="episodes" className="p-12">
        <h2 className="text-2xl font-bold">Latest Episodes</h2>
        <div>
          {/* List episodes here */}
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-12 bg-gray-100">
        <h2 className="text-2xl font-bold">About the Podcast</h2>
        <p>
          Learn more about what this podcast is about, who the hosts are, and why you should listen.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-white text-center">
        <p>Follow us on social media</p>
        {/* Social Media Icons */}
      </footer>
    </div>
  );
}

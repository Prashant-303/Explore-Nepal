import Image from "next/image";

export default function AboutNepal() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Nepal</h1>
          <p className="text-lg mt-2">
            Explore the history, culture, and breathtaking landscapes of Nepal
          </p>
        </div>
      </header>

      {/* General Information Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          General Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">
              Nepal, nestled in the lap of the Himalayas, is a small yet diverse
              country in South Asia. Known as the birthplace of Lord Buddha and
              home to Mount Everest, Nepal boasts a rich cultural heritage and
              breathtaking natural beauty. With a history that spans thousands
              of years, Nepal is a melting pot of ethnic groups, languages, and
              traditions.
            </p>
            <p className="text-gray-700 text-lg">
              Geographically, Nepal ranges from the towering peaks of the
              Himalayas in the north to the lush Terai plains in the south.
              Kathmandu, the capital city, is renowned for its ancient temples,
              bustling markets, and vibrant culture.
            </p>
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/14938958/pexels-photo-14938958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Kathmandu Valley"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Nepalese Culture
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Nepali Traditional Dance"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-4">
                Nepalese culture is deeply rooted in traditions, festivals, and
                religious practices. With a majority Hindu and Buddhist
                population, festivals like Dashain, Tihar, and Buddha Jayanti
                are celebrated with great enthusiasm. The Newari culture of
                Kathmandu Valley, in particular, has preserved ancient
                traditions, art, and cuisine.
              </p>
              <p className="text-gray-700 text-lg">
                The warmth and hospitality of Nepalese people make visitors feel
                welcome. From traditional dances and music to vibrant markets
                filled with handcrafted goods, Nepal offers a cultural
                experience like no other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Travel Activities Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Popular Travel Activities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Trekking */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Trekking in Nepal"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-600 mb-2">Trekking</h3>
            <p className="text-gray-700">
              Explore famous trekking routes like the Everest Base Camp Trek and
              Annapurna Circuit, surrounded by stunning landscapes.
            </p>
          </div>
          {/* Cultural Exploration */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="https://images.pexels.com/photos/764689/pexels-photo-764689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cultural Exploration"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Cultural Exploration
            </h3>
            <p className="text-gray-700">
              Visit ancient temples, monasteries, and UNESCO World Heritage
              Sites in Kathmandu, Bhaktapur, and Patan.
            </p>
          </div>
          {/* Mountaineering */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="https://images.pexels.com/photos/1891882/pexels-photo-1891882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountaineering in Nepal"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Mountaineering
            </h3>
            <p className="text-gray-700">
              Conquer the world's highest peaks, including Mount Everest and
              Kanchenjunga, with thrilling mountaineering expeditions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

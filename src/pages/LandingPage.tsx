import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Award, Search, Plus, Shirt } from 'lucide-react';

const LandingPage: React.FC = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 75,
      condition: 'Like New'
    },
    {
      id: 2,
      title: 'Bohemian Summer Dress',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 60,
      condition: 'Excellent'
    },
    {
      id: 3,
      title: 'Designer Blazer',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 120,
      condition: 'Very Good'
    },
    {
      id: 4,
      title: 'Casual Sweater',
      image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 45,
      condition: 'Good'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50 dark:from-emerald-900/20 dark:via-stone-900 dark:to-amber-900/20 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 dark:text-white leading-tight">
                  Give Your Clothes a
                  <span className="text-emerald-600 block">Second Life</span>
                </h1>
                <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
                  Join ReWear and transform your unworn garments into new treasures. 
                  Swap, earn points, and build a sustainable wardrobe while reducing textile waste.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Start Swapping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 text-lg font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Browse Items
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">10K+</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Items Swapped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">5K+</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">2.5 Tons</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Waste Reduced</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2"
                  alt="Sustainable fashion"
                  className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2"
                  alt="Clothing swap"
                  className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Recycle className="h-6 w-6 text-emerald-600" />
                  <span className="text-sm font-semibold text-stone-800 dark:text-white">100% Sustainable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-stone-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-white mb-4">How ReWear Works</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
              Three simple steps to start your sustainable fashion journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Plus className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 dark:text-white">List Your Items</h3>
              <p className="text-stone-600 dark:text-stone-300">
                Upload photos and details of clothes you no longer wear. 
                Every item earns you points when listed.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 dark:text-white">Browse & Discover</h3>
              <p className="text-stone-600 dark:text-stone-300">
                Explore thousands of unique pieces from our community. 
                Find your next favorite outfit.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shirt className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 dark:text-white">Swap or Redeem</h3>
              <p className="text-stone-600 dark:text-stone-300">
                Exchange items directly or use your points to claim new pieces. 
                Build your dream wardrobe sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 dark:text-white mb-4">Featured Items</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300">
              Discover amazing pieces from our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                to={`/item/${item.id}`}
                className="bg-white dark:bg-stone-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-800 dark:text-white mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-stone-600 dark:text-stone-400">{item.condition}</span>
                    <span className="text-emerald-600 font-semibold">{item.points} points</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/browse"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Items
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white dark:text-emerald-100 mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100 dark:text-emerald-200">
              Together, we're making fashion more sustainable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <Recycle className="h-12 w-12 text-emerald-200 mx-auto" />
              <div className="text-3xl font-bold text-white">2.5 Tons</div>
              <div className="text-emerald-100 dark:text-emerald-200">Textile Waste Prevented</div>
            </div>

            <div className="text-center space-y-2">
              <Users className="h-12 w-12 text-emerald-200 mx-auto" />
              <div className="text-3xl font-bold text-white">5,200+</div>
              <div className="text-emerald-100 dark:text-emerald-200">Active Swappers</div>
            </div>

            <div className="text-center space-y-2">
              <Award className="h-12 w-12 text-emerald-200 mx-auto" />
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-emerald-100 dark:text-emerald-200">Successful Swaps</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-stone-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-800 dark:text-white mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 mb-8">
            Join thousands of fashion-forward individuals who are making a difference, 
            one swap at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Join ReWear Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/add-item"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 text-lg font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              <Plus className="mr-2 h-5 w-5" />
              List Your First Item
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Heart, Star, MapPin } from 'lucide-react';

const BrowseItems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'shoes', label: 'Shoes' }
  ];

  const items = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 75,
      condition: 'Like New',
      size: 'M',
      brand: 'Levi\'s',
      owner: 'Sarah Chen',
      location: 'New York, NY',
      category: 'outerwear',
      isFavorited: false,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Bohemian Summer Dress',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 60,
      condition: 'Excellent',
      size: 'S',
      brand: 'Free People',
      owner: 'Emma Wilson',
      location: 'Los Angeles, CA',
      category: 'dresses',
      isFavorited: true,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Designer Blazer',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 120,
      condition: 'Very Good',
      size: 'L',
      brand: 'Theory',
      owner: 'Michael Chen',
      location: 'San Francisco, CA',
      category: 'tops',
      isFavorited: false,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Casual Sweater',
      image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 45,
      condition: 'Good',
      size: 'M',
      brand: 'J.Crew',
      owner: 'Lisa Park',
      location: 'Chicago, IL',
      category: 'tops',
      isFavorited: false,
      rating: 4.5
    },
    {
      id: 5,
      title: 'High-Waist Jeans',
      image: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 55,
      condition: 'Like New',
      size: '29',
      brand: 'Madewell',
      owner: 'Alex Johnson',
      location: 'Seattle, WA',
      category: 'bottoms',
      isFavorited: true,
      rating: 4.6
    },
    {
      id: 6,
      title: 'Silk Scarf Collection',
      image: 'https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      points: 35,
      condition: 'Excellent',
      size: 'One Size',
      brand: 'Hermès',
      owner: 'Diana Kim',
      location: 'Miami, FL',
      category: 'accessories',
      isFavorited: false,
      rating: 4.9
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-2">Browse Items</h1>
          <p className="text-stone-600">Discover amazing pieces from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-stone-400" />
              </div>
              <input
                type="text"
                placeholder="Search items, brands, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-stone-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-stone-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-stone-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-stone-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              >
                <option value="newest">Newest</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-stone-600">
            Showing {filteredItems.length} of {items.length} items
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-stone-700">
                    {item.condition}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className={`h-4 w-4 ${item.isFavorited ? 'text-red-500 fill-current' : 'text-stone-600'}`} />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <Link
                    to={`/item/${item.id}`}
                    className="block w-full bg-emerald-600 text-white text-center py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-emerald-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-stone-800 line-clamp-2">{item.title}</h3>
                  <span className="text-emerald-600 font-bold text-lg ml-2">{item.points}</span>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm text-stone-600">
                    <span>{item.brand}</span>
                    <span>Size {item.size}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-stone-600">{item.rating}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm text-stone-500">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 bg-stone-200 rounded-full"></div>
                  <span className="text-sm text-stone-600">{item.owner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-stone-400" />
            </div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">No items found</h3>
            <p className="text-stone-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseItems;
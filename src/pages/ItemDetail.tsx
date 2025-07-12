import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, MapPin, Calendar, Package, ArrowLeft, MessageCircle, User } from 'lucide-react';

const ItemDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock data - in real app, fetch based on id
  const item = {
    id: 1,
    title: 'Vintage Denim Jacket',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2',
      'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2'
    ],
    points: 75,
    condition: 'Like New',
    size: 'M',
    brand: 'Levi\'s',
    color: 'Indigo Blue',
    material: '100% Cotton Denim',
    category: 'Outerwear',
    description: 'Classic Levi\'s denim jacket in excellent condition. This vintage piece has been well-maintained and features the iconic Levi\'s styling with button-front closure, chest pockets, and a timeless fit. Perfect for layering or as a statement piece. No visible wear or damage.',
    tags: ['vintage', 'denim', 'classic', 'versatile'],
    owner: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.8,
      swaps: 23,
      joinedDate: '2023-06-15',
      location: 'New York, NY'
    },
    availability: 'available',
    listedDate: '2024-01-10',
    views: 47,
    interests: 12
  };

  const similarItems = [
    {
      id: 2,
      title: 'Vintage Leather Jacket',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=300&h=375&dpr=2',
      points: 95,
      condition: 'Excellent'
    },
    {
      id: 3,
      title: 'Casual Blazer',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=300&h=375&dpr=2',
      points: 65,
      condition: 'Very Good'
    },
    {
      id: 4,
      title: 'Denim Vest',
      image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=300&h=375&dpr=2',
      points: 45,
      condition: 'Good'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/browse"
          className="inline-flex items-center space-x-2 text-stone-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.images[selectedImage]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-emerald-500' 
                      : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-stone-800 mb-2">{item.title}</h1>
                  <div className="flex items-center space-x-4 text-stone-600">
                    <span className="text-2xl font-bold text-emerald-600">{item.points} points</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.condition}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Heart className={`h-6 w-6 ${isFavorited ? 'text-red-500 fill-current' : 'text-stone-400'}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div>
                  <p className="text-sm text-stone-600">Brand</p>
                  <p className="font-semibold text-stone-800">{item.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-600">Size</p>
                  <p className="font-semibold text-stone-800">{item.size}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-600">Color</p>
                  <p className="font-semibold text-stone-800">{item.color}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-600">Material</p>
                  <p className="font-semibold text-stone-800">{item.material}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Description</h3>
              <p className="text-stone-600 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Owner Information</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={item.owner.avatar}
                  alt={item.owner.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-stone-800">{item.owner.name}</h4>
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-stone-600">{item.owner.rating} rating</span>
                    <span className="text-stone-400">•</span>
                    <span className="text-sm text-stone-600">{item.owner.swaps} swaps</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3 text-stone-400" />
                    <span className="text-sm text-stone-600">{item.owner.location}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                Request Swap
              </button>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                Redeem with Points
              </button>
            </div>

            {/* Item Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-sm">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Calendar className="h-4 w-4 text-stone-400 mr-1" />
                </div>
                <p className="text-sm text-stone-600">Listed</p>
                <p className="font-semibold text-stone-800">Jan 10</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Package className="h-4 w-4 text-stone-400 mr-1" />
                </div>
                <p className="text-sm text-stone-600">Views</p>
                <p className="font-semibold text-stone-800">{item.views}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Heart className="h-4 w-4 text-stone-400 mr-1" />
                </div>
                <p className="text-sm text-stone-600">Interests</p>
                <p className="font-semibold text-stone-800">{item.interests}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-8">Similar Items</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarItems.map(similarItem => (
              <Link
                key={similarItem.id}
                to={`/item/${similarItem.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={similarItem.image}
                    alt={similarItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-800 mb-2">{similarItem.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-stone-600">{similarItem.condition}</span>
                    <span className="text-emerald-600 font-semibold">{similarItem.points} points</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
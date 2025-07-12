import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Plus, Camera } from 'lucide-react';

const AddItem: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    brand: '',
    color: '',
    material: '',
    tags: ''
  });
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'shoes', label: 'Shoes' }
  ];

  const conditions = [
    { id: 'like-new', label: 'Like New' },
    { id: 'excellent', label: 'Excellent' },
    { id: 'very-good', label: 'Very Good' },
    { id: 'good', label: 'Good' },
    { id: 'fair', label: 'Fair' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageUpload = () => {
    // Mock image upload - in real app, this would handle file uploads
    const mockImages = [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2'
    ];
    setImages(prev => [...prev, mockImages[prev.length % mockImages.length]]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-stone-200">
            <h1 className="text-2xl font-bold text-stone-800">List New Item</h1>
            <p className="text-stone-600 mt-1">Share your unused clothing with the ReWear community</p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-8">
            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-4">
                Item Photos *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square bg-stone-100 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {images.length < 4 && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="aspect-square border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                  >
                    <Camera className="h-8 w-8 text-stone-400 mb-2" />
                    <span className="text-sm text-stone-600">Add Photo</span>
                  </button>
                )}
              </div>
              <p className="text-sm text-stone-500 mt-2">
                Upload up to 4 photos. First photo will be the main image.
              </p>
            </div>

            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-stone-700 mb-2">
                  Item Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., Vintage Denim Jacket"
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-stone-700 mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., Levi's"
                />
              </div>
            </div>

            {/* Category and Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-stone-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-stone-700 mb-2">
                  Size *
                </label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  required
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., M, L, 32, 10"
                />
              </div>

              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-stone-700 mb-2">
                  Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  required
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select condition</option>
                  {conditions.map(condition => (
                    <option key={condition.id} value={condition.id}>
                      {condition.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-stone-700 mb-2">
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., Blue, Black, Red"
                />
              </div>

              <div>
                <label htmlFor="material" className="block text-sm font-medium text-stone-700 mb-2">
                  Material
                </label>
                <input
                  type="text"
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g., 100% Cotton, Polyester Blend"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-stone-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                placeholder="Describe the item's condition, fit, styling, and any other relevant details..."
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-stone-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="vintage, casual, summer, trendy (separated by commas)"
              />
              <p className="text-sm text-stone-500 mt-1">
                Add tags to help others discover your item
              </p>
            </div>

            {/* Points Estimation */}
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Estimated Points</h3>
              <p className="text-3xl font-bold text-emerald-600 mb-2">75 points</p>
              <p className="text-sm text-emerald-700">
                Based on category, condition, and brand. You'll earn 10 points just for listing!
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Listing Item...' : 'List Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
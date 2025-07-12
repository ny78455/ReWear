import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Shirt, User, LogOut, Settings, Plus, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-stone-900 shadow-lg border-b border-emerald-100 dark:border-stone-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-stone-800 dark:text-white">ReWear</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-stone-600 dark:text-stone-400" />
              ) : (
                <Moon className="h-5 w-5 text-stone-600" />
              )}
            </button>

            {isAuthenticated ? (
              <>
                <Link
                  to="/browse"
                  className="text-stone-700 dark:text-stone-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Browse Items
                </Link>
                <Link
                  to="/add-item"
                  className="flex items-center space-x-1 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>List Item</span>
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-stone-600">
                    {user?.points || 0} points
                  </span>
                  <div className="relative group">
                    <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-stone-100 transition-colors">
                      {user?.avatar ? (
                        <img
                          src={user.avatar_url}
                          alt={user.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-stone-600 dark:text-stone-400" />
                      )}
                      <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                        {user?.name}
                      </span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-800 rounded-lg shadow-lg border border-stone-200 dark:border-stone-700 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 px-4 py-3 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
                      >
                        <User className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                      {user?.is_admin && (
                        <Link
                          to="/admin"
                          className="flex items-center space-x-2 px-4 py-3 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700"
                        >
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-stone-700 dark:text-stone-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
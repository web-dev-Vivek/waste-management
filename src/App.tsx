import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { UserTypeSelection } from './components/UserTypeSelection';
import { SearchBar } from './components/SearchBar';
import { BlogGrid } from './components/BlogGrid';
import { MaterialForm } from './components/MaterialForm';
import { BuyerDashboard } from './components/BuyerDashboard';
import { BackButton } from './components/BackButton';
import { PublicUserRegistration } from './components/PublicUserRegistration';
import { BuyerRegistration } from './components/BuyerRegistration';
import { CreateBlogPost } from './components/CreateBlogPost';
import type { UserType } from './types';

export default function App() {
  const [navigationStack, setNavigationStack] = useState<string[]>(['home']);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const navigateTo = (view: string) => {
    if (view === 'home') {
      setNavigationStack(['home']);
      setUserType(null);
      setIsLoggedIn(false);
    } else {
      setNavigationStack(prev => [...prev, view]);
    }
    setCurrentView(view);
  };

  const handleBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);
      setCurrentView(newStack[newStack.length - 1]);
      
      if (newStack[newStack.length - 1] === 'home') {
        setUserType(null);
        setIsLoggedIn(false);
      }
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return !userType ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join the Sustainable Revolution
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Connect with eco-conscious individuals and businesses. Together, let's build a greener future through responsible waste management.
              </p>
              <UserTypeSelection onSelect={(type) => {
                setUserType(type);
                navigateTo(type === 'public' ? 'public-registration' : 'buyer-registration');
              }} />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: 'List Materials',
                  description: 'Easily list your recyclable materials and connect with potential buyers.'
                },
                {
                  title: 'Market Insights',
                  description: 'Access real-time market data and trends in the recycling industry.'
                },
                {
                  title: 'Sustainable Impact',
                  description: 'Track your contribution to environmental conservation.'
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : null;

      case 'public-registration':
        return (
          <PublicUserRegistration
            onSubmit={() => navigateTo('public-dashboard')}
          />
        );

      case 'buyer-registration':
        return (
          <BuyerRegistration
            onSubmit={() => {
              setIsLoggedIn(true);
              navigateTo('buyer-dashboard');
            }}
          />
        );

      case 'public-dashboard':
        return (
          <div className="space-y-16">
            <SearchBar />
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Submit Your Material</h2>
              <MaterialForm onSubmit={() => navigateTo('submission-success')} />
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Sustainability News</h2>
              <BlogGrid />
            </section>
          </div>
        );

      case 'blog':
        return currentView === 'create-post' ? (
          <CreateBlogPost onSubmit={() => navigateTo('blog')} />
        ) : (
          <BlogGrid onCreatePost={() => navigateTo('create-post')} />
        );

      case 'create-post':
        return <CreateBlogPost onSubmit={() => navigateTo('blog')} />;

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
            <p className="text-gray-600 text-center mb-8">
              Have questions? We'd love to hear from you.
            </p>
            {/* Contact form would go here */}
            <p className="text-center text-gray-600">Coming soon...</p>
          </div>
        );

      default:
        return null;
    }
  };

  if (userType === 'buyer' && isLoggedIn) {
    return (
      <div>
        <BuyerDashboard onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main className="container mx-auto px-4 py-12">
        {navigationStack.length > 1 && (
          <div className="mb-8">
            <BackButton onClick={handleBack} />
          </div>
        )}

        {renderContent()}
      </main>
    </div>
  );
}
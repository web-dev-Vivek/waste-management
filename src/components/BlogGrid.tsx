import { Plus } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogGridProps {
  onCreatePost?: () => void;
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Recycling',
    excerpt: 'Discover how new technologies are revolutionizing waste management...',
    content: '',
    author: 'Sarah Green',
    date: new Date('2024-03-15'),
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b'
  },
  {
    id: '2',
    title: 'Sustainable Living Guide',
    excerpt: 'Simple steps to reduce your environmental impact...',
    content: '',
    author: 'Mike Rivers',
    date: new Date('2024-03-14'),
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    id: '3',
    title: 'Zero Waste Movement',
    excerpt: 'Join the growing community of zero waste advocates...',
    content: '',
    author: 'Emma Earth',
    date: new Date('2024-03-13'),
    imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec'
  }
];

export function BlogGrid({ onCreatePost }: BlogGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {onCreatePost && (
        <div className="mb-8">
          <button
            onClick={onCreatePost}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Post
          </button>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SAMPLE_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.date.toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
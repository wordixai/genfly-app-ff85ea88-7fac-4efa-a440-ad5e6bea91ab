const ProjectGallery = () => {
  // Mock data for trending projects
  const projects = [
    {
      id: 1,
      title: "Modern Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Dashboard"
    },
    {
      id: 2,
      title: "Portfolio Site",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop",
      category: "Portfolio"
    },
    {
      id: 3,
      title: "E-commerce App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Landing Page",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=300&h=200&fit=crop",
      category: "Landing"
    },
    {
      id: 5,
      title: "Mobile App UI",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Blog Template",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=300&h=200&fit=crop",
      category: "Blog"
    }
  ];

  return (
    <div className="mx-auto w-full max-w-[2000px] px-5 py-6 sm:px-4 md:px-22">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 truncate">{project.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load more projects placeholder */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
          Load More Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectGallery;
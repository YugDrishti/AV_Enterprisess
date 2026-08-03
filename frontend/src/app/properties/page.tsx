import { projects } from "@/lib/mockData";
import PropertyGrid from "@/components/PropertyGrid";

// Simulate network delay to show off the skeleton loading state
async function getProjects() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return projects;
}

export default async function PropertiesPage() {
  const data = await getProjects();

  return (
    <div className="min-h-screen bg-color-gray-light py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Featured Properties</h1>
        <div className="w-24 h-1 bg-color-orange mb-12"></div>

        <PropertyGrid properties={data} />
      </div>
    </div>
  );
}

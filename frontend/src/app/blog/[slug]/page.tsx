import { blogs } from "@/data/blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.content,
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="space-y-4 text-center md:text-left">
      <h1 className="text-xl md:text-3xl font-black uppercase text-purple-500">
        {blog.title}
      </h1>
      <p className="md:text-lg font-medium">{blog.content}</p>
    </section>
  );
}

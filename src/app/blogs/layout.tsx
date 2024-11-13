import { BlogNavbar } from "@/components/blogs/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BlogNavbar />
      {children}
    </div>
  );
}

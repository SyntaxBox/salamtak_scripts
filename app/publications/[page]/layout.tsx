import React from "react";
import { allPosts } from "contentlayer/generated";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function PostsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    page: string;
  }>;
}>) {
  const page = await params;
  console.log(page);
  const currentPage = Number(page?.page) || 1;
  const postsPerPage = 10; // Number of posts to show per page

  // Calculate pagination values
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const generatePaginationItems = () => {
    const items: React.JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      // Show first page, last page, and pages around current page
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href={`${i}`} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        items.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }
    return items;
  };
  return (
    <main className="flex-grow">
      {children}
      {totalPages > 1 && (
        <div className="py-2">
          <Pagination dir="rtl">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`${currentPage - 1}`} />
                </PaginationItem>
              )}
              {generatePaginationItems()}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`${currentPage + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </main>
  );
}

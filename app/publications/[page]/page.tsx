import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { arDZ } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { notFound } from "next/navigation";

export default async function TweetsPage({
  params,
}: {
  params: Promise<{ page: number }>;
}) {
  const page = await params;
  const currentPage = Number(page?.page) || 1;
  const postsPerPage = 10; // Number of posts to show per page

  // Calculate pagination values
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);
  if (currentPosts.length === 0) return notFound();
  return (
    <div className="py-16 bg-gradient-to-b from-cream to-white">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-forest">
          تغريدات مجتمع القراء
        </h1>
        <p className="text-xl mb-12 text-center text-forest max-w-3xl mx-auto">
          اطلع على آخر الأخبار والإنجازات من مجتمع القراء والمجودين
        </p>
        <div className="space-y-6">
          {currentPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-sage shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="bg-cream border-[1px] w-12 h-12 border-forest">
                  <AvatarImage src="/logo.svg" />
                  <AvatarFallback>م</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold text-forest">
                    مقرأة الإمام نافع
                  </CardTitle>
                  <p className="text-sm text-sage" dir="ltr">
                    {format(post.timestamp, "PPPp", { locale: arDZ })}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-forest mb-4">{post.title}</p>
                <div className="mt-4 p-4 bg-cream rounded-lg">
                  <Mdx code={post.body.code} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

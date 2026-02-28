// components/ui/CourseCard.tsx
import Link from "next/link";
import Image from "next/image";

type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden h-67.25 hover:shadow-md transition-shadow">
        <div className="relative h-32">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-[#f7f7f7]">
          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {course.description}
          </p>
           <span className="inline-block px-3  bg-[#E8E8E8] text-[#636363] text-xs font-medium rounded-full mt-3">
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
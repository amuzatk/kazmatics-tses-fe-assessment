// src/components/ui/CourseCard.tsx
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
    <Link href={`/dashboard/courses/${course.id}`} className="block group">
      <div 
        className="
          bg-[#f7f7f7] 
          rounded-xl 
          overflow-hidden 
          hover:shadow-md 
          transition-shadow
          duration-200
        "
      >
        {/* Image - kept your height */}
        <div className="relative h-32">
          <Image
            src={course.image || "/icons/course-mgt.png"}
            alt={course.title}
            fill
            className="object-cover"
            priority={false} // optional: can set true for above-the-fold cards
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 
            className="
              font-semibold 
              text-lg 
              text-[#202020]
              group-hover:text-[#0A60E1] 
              transition-colors
              mb-2
            "
          >
            {course.title}
          </h3>

          <p className="text-sm text-[#636363] line-clamp-2 mb-3">
            {course.description}
          </p>

          <span 
            className="
              inline-block 
              bg-[#E8E8E8] 
              text-[#636363] 
              text-xs 
              font-medium 
              rounded-full 
              px-4 py-1
            "
          >
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  );
}





// // components/ui/CourseCard.tsx
// import Link from "next/link";
// import Image from "next/image";

// type Course = {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
// };

// export default function CourseCard({ course }: { course: Course }) {
//   return (
//     <Link href={`/courses/${course.id}`} className="block group">
//       <div 
//     //   className="bg-[#f7f7f7] rounded-xl overflow-hidden max-h-67.25 hover:shadow-md transition-shadow"
//     className="bg-[#f7f7f7] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
//       >
//         <div className="relative h-32">
//           <Image
//             src={course.image}
//             alt={course.title}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="p-3 ]">
//           <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors ">
//             {course.title}
//           </h3>
//           <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//             {course.description}
//           </p>
//            <span className="inline-block   bg-[#E8E8E8] text-[#636363] text-xs font-medium rounded-full pt-1 pb-1 pr-4 pl-4 ">
//             {course.category}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }
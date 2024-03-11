export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number; 
}) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/dbcydcneq/image/upload/${params.join(
    ",",
  )}/v1710179321/ar-consultancy/${src}`;
}
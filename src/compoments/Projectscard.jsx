
export default function Card({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-4xl overflow-hidden w-full max-w-sm lg:hover:scale-105">
      <a href={link} target="_blank">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-800 mt-2">{description}</p>
        </div>
      </a>
    </div>
  );
}




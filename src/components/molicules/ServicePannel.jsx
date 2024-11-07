import ServiceContent from "./ServiceContent";
import ServiceHome from "./ServiceHome";
import ServicesExperinces from "./ServicesExperinces";

const ServicePannel = () => {
  const tabs = [
    {
      id: "about",
      label: "About",
      content: <ServiceHome />,
      contentClass: "text-black",
    },
    {
      id: "experience",
      label: "Experience",
      content: <ServicesExperinces />,
      contentClass: "",
    },
    {
      id: "contact",
      label: "Contact",
      content: <ServiceContent />,
      contentClass: "",
    },
  ];

  return (
    <div className="relative w-full xl:overflow-visible max-h-fit min-h-full">
      <div
        className="flex gap-5 border-b-4 border-[#be3d1e] py-1 h-fit"
        id="services"
      >
        {tabs.map((tab, index) => (
          <div key={tab.id}>
            <input
              type="radio"
              name="services"
              id={tab.id}
              value={tab.id}
              defaultChecked={index === 0}
              className="hidden peer"
            />
            {/* Label */}
            <label
              htmlFor={tab.id}
              className="cursor-pointer px-4 py-2 text-lg transition duration-500 peer-checked:bg-[#be3d1e] peer-checked:text-white"
            >
              {tab.label}
            </label>

            {/* Content */}
            <div
              className={`absolute left-[150%] opacity-0 lg:top-16 top-10 w-full h-0 overflow-hidden transition-all duration-500 peer-checked:left-0 peer-checked:opacity-100 peer-checked:h-[400px] ${tab.contentClass}`}
            >
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePannel;

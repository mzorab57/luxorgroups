import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const VideoText = () => {
  const { t } = useTranslation();
  const projectCategories = t("projectCategories", { returnObjects: true });

  return (
    <div className="font-jost">
     

      {/* Categories List */}
      <div className="relative px-4 translate-y-5 ltr:border-l rtl:border-r border-gray-300">
        <ul className="xl:space-y-24  space-y-10">
          {projectCategories.map((category, index) => (
            <li key={index} className="group">
              <Link
                to="/video"
                className="flex items-center space-x-4 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <span className="w-2.5 h-2.5 bg-teal-500 rounded-full group-hover:ring-4 ring-teal-500/20 transition-all duration-300" />
                <span className="text-xl  rtl:px-3 font-medium">{category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoText;
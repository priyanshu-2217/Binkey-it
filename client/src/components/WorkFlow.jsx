import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { useTheme } from "../context/Themecontext"; // ✅ Import the theme context

const Workflow = () => {
  const { theme } = useTheme();

  // Theme-dependent styles
  const headingTextColor = theme === "dark" ? "text-white" : "text-black";
  const highlightTextGradient =
    "bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text";

  const iconBg = theme === "dark" ? "bg-neutral-900" : "bg-yellow-200";
  const iconText = theme === "dark" ? "text-green-400" : "text-green-600";

  const itemTitleColor = theme === "dark" ? "text-white" : "text-black";
  const itemDescColor = theme === "dark" ? "text-neutral-500" : "text-gray-600";

  return (
    <div className="mt-20 transition-all duration-500">
      <h2
        className={`text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ${headingTextColor}`}
      >
        Accelerate your{" "}
        <span className={highlightTextGradient}>coding workflow.</span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {/* Left image */}
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="rounded-xl shadow-xl" />
        </div>

        {/* Checklist Items */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div
                className={`flex items-center justify-center h-10 w-10 p-2 rounded-full ${iconBg} ${iconText}`}
              >
                <CheckCircle2 />
              </div>
              <div className="ml-4">
                <h5
                  className={`mt-1 mb-2 text-xl font-semibold ${itemTitleColor}`}
                >
                  {item.title}
                </h5>
                <p className={`text-md ${itemDescColor}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

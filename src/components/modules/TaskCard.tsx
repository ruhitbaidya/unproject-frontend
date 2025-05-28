import type { ITasks } from "@/type";
import { DeleteIcon } from "lucide-react";

const TaskCard = (task: ITasks) => {
  return (
    <div className="w-[70%] mx-auto p-[30px] border rounded-lg mb-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[40px]">
          <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
          <div className="space-y-[10px]">
            <h2 className="text-[30px] font-bold">{task?.name}</h2>
            <p className="text-[18px]">{task?.description}</p>
            <div>
              <span className="text-gray-400">{task?.endDate}</span>
            </div>
          </div>
        </div>
        <div>
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

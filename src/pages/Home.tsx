import TaskCard from "@/components/modules/TaskCard";
import { TaskModal } from "@/components/modules/TaskModal";
import { useAppSelector } from "@/hooks/hooks";
import { taskState } from "@/redux/fetcher/tasks";
import type { ITasks } from "@/type";

const Home = () => {
  const tasks = useAppSelector(taskState);
  console.log(tasks);
  return (
    <div>
      <div className="flex justify-end w-[70%] mx-auto mb-[20px]">
        <TaskModal />
      </div>
      {tasks &&
        tasks?.map((item: ITasks) => <TaskCard key={item.id} {...item} />)}
    </div>
  );
};

export default Home;
